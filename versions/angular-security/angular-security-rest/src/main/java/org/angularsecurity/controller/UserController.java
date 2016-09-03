package org.angularsecurity.controller;

import java.util.List;

import org.angularsecurity.domain.User;
import org.angularsecurity.domain.UserAuthentication;
import org.angularsecurity.domain.UserRole;
import org.angularsecurity.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;


//	@RequestMapping(value = "/admin/employee/save", method = RequestMethod.POST)
//	public ResponseEntity<Employee> savePost(@RequestBody @Valid Employee employee, BindingResult result) {
//		if (!result.hasErrors()) {
//			employeeService.save(employee);
//			return new ResponseEntity<>(HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.UNPROCESSABLE_ENTITY);
//		}
//	}

//	@RequestMapping(value = "/api/users/registration", method = RequestMethod.POST)
//	public User registerUser(@RequestBody @Valid User user, BindingResult result) {
//
//
//
//		user.setUsername("admin9");
//		user.setPassword(new BCryptPasswordEncoder().encode("admin9"));
//		user.grantRole("admin9".equals("admin") ? UserRole.ADMIN : UserRole.USER);
//		return userRepository.save(user);
////		return userService.save(user);
//	}


	@RequestMapping(value = "/api/users/registration", method = RequestMethod.POST)
	public User registerUser(@RequestBody @Valid User user, BindingResult result) {
//		public User registerUser(@RequestBody  User user, BindingResult result) {


//        User user1 = new User();
		user.setUsername(user.getUsername());
		user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
//		user.grantRole(user.getUsername().equals("admin") ? UserRole.ADMIN : UserRole.USER);
		user.grantRole( UserRole.ADMIN  );
		return userRepository.save(user);
//		return userService.save(user);
	}

	@RequestMapping(value = "/api/users/current", method = RequestMethod.GET)
	public User getCurrent() {
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		if (authentication instanceof UserAuthentication) {
			return ((UserAuthentication) authentication).getDetails();
		}
		return new User(authentication.getName()); // anonymous user support
	}

	@RequestMapping(value = "/api/users/current", method = RequestMethod.PATCH)
	public ResponseEntity<String> changePassword(@RequestBody final User user) {
		final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		final User currentUser = userRepository.findByUsername(authentication.getName());

		if (user.getNewPassword() == null || user.getNewPassword().length() < 4) {
			return new ResponseEntity<>("new password to short", HttpStatus.UNPROCESSABLE_ENTITY);
		}

		final BCryptPasswordEncoder pwEncoder = new BCryptPasswordEncoder();
		if (!pwEncoder.matches(user.getPassword(), currentUser.getPassword())) {
			return new ResponseEntity<>("old password mismatch", HttpStatus.UNPROCESSABLE_ENTITY);
		}

		currentUser.setPassword(pwEncoder.encode(user.getNewPassword()));
		userRepository.saveAndFlush(currentUser);
		return new ResponseEntity<>("password changed", HttpStatus.OK);
	}

	@RequestMapping(value = "/admin/api/users/{user}/grant/role/{role}", method = RequestMethod.POST)
	public ResponseEntity<String> grantRole(@PathVariable User user, @PathVariable UserRole role) {
		if (user == null) {
			return new ResponseEntity<>("invalid user id", HttpStatus.UNPROCESSABLE_ENTITY);
		}

		user.grantRole(role);
		userRepository.saveAndFlush(user);
		return new ResponseEntity<>("role granted", HttpStatus.OK);
	}

	@RequestMapping(value = "/admin/api/users/{user}/revoke/role/{role}", method = RequestMethod.POST)
	public ResponseEntity<String> revokeRole(@PathVariable User user, @PathVariable UserRole role) {
		if (user == null) {
			return new ResponseEntity<>("invalid user id", HttpStatus.UNPROCESSABLE_ENTITY);
		}

		user.revokeRole(role);
		userRepository.saveAndFlush(user);
		return new ResponseEntity<>("role revoked", HttpStatus.OK);
	}

	@RequestMapping(value = "/admin/api/users", method = RequestMethod.GET)
	public List<User> list() {
		return userRepository.findAll();
	}
}
