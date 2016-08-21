package com.ldeng.backend.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ldeng.backend.dao.UserDao;
import com.ldeng.backend.model.User;
import com.ldeng.backend.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDao userDao;
	
	public User save (User user) {
		return userDao.save(user);
	}
	
	public User findByUserName(String userName) {
		return userDao.findByUserName(userName);
	}
	

}
