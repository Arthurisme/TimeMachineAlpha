package com.sensoryex.backend.service;

import java.util.List;

import com.sensoryex.backend.model.Photo;
import com.sensoryex.backend.model.User;

 
public interface PhotoService {
	Photo save(Photo photo);
	List<Photo> findByUser( User user);
	Photo findByPhotoId(Long photoId);
	List<Photo> findAll();
 
}
