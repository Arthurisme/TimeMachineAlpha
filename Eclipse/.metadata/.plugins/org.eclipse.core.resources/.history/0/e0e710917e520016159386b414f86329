package com.sensoryex.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sensoryex.backend.model.User;
import com.sensoryex.backend.service.UserService;

 
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;

	@RequestMapping(value="/register", method=RequestMethod.POST)
	public User registerUser(@RequestBody User user){
		return userService.save(user);
	}
}
