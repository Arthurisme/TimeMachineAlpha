package com.sensoryex.backend.controller;

import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sensoryex.backend.model.User;
import com.sensoryex.backend.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

 
@RestController
@RequestMapping("/rest")
public class UserResources {
	
	@Autowired
	private UserService userService;

 
	
	@RequestMapping("/user/users")
	public String loginSuccess(){
		return "Login Successful!";
   }
	
	

	@RequestMapping(value="/user/userName", method=RequestMethod.POST)
	public User findByUserName(@RequestBody String userName){
		return userService.findByUserName(userName);
   }
	

	@RequestMapping(value="/user/update", method=RequestMethod.POST)
	public User updateUser(@RequestBody User user){
		return userService.save(user);
   }
}




