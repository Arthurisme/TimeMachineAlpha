package com.ldeng.backend.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ldeng.backend.model.Photo;
import com.ldeng.backend.model.User;

@Repository
public interface PhotoDao extends CrudRepository<Photo, Long>{
	
	Photo save(Photo photo);
	
	List<Photo> findByUser(User user);
	
	Photo findByPhotoId(Long photoId);
	
	List<Photo> findAll();
}