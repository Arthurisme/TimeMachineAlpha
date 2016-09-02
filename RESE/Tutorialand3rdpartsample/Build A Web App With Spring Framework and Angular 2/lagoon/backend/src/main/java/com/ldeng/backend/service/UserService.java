package com.ldeng.backend.service;

import com.ldeng.backend.model.User;

public interface UserService {
	User save(User user);
	
	User findByUserName(String userName);
	


}
