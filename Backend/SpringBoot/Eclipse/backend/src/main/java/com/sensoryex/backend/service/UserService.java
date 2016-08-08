package com.sensoryex.backend.service;

import com.sensoryex.backend.model.User;

public interface UserService {

	User save(User user);
	User findByUserName( String userName);
}
