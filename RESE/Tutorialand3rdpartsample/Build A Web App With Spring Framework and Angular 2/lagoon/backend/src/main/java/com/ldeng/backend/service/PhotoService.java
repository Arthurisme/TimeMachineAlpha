package com.ldeng.backend.service;

import java.util.List;

import com.ldeng.backend.model.Photo;
import com.ldeng.backend.model.User;

public interface PhotoService {
	Photo save(Photo photo);
	
	List<Photo> findByUser(User user);
	
	Photo findByPhotoId(Long photoId);
	
	List<Photo> findAll();
}
