package com.sensoryex.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sensoryex.backend.dao.UserDao;
import com.sensoryex.backend.model.User;
import com.sensoryex.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	
	
	@Autowired
	private UserDao userDao;

 
	public User save(User user) {
 		return userDao.save(user);
	}

}
