package com.sensoryex.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sensoryex.backend.dao.PhotoDao;
import com.sensoryex.backend.dao.UserDao;
import com.sensoryex.backend.model.User;
import com.sensoryex.backend.model.Photo;
import com.sensoryex.backend.service.UserService;

 
import com.sensoryex.backend.service.PhotoService;

@Service
public class PhotoServiceImpl implements PhotoService {
	
	
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private PhotoDao photoDao;

 
	public Photo save(Photo photo) {
 		return photoDao.save(photo);
	}

 
 
	
	public List<Photo> findByUser( User user){
 		return photoDao.findByUser(user);

	}
	
	public  Photo findByPhotoId(Long photoId)
{
 		return photoDao.findByPhotoId(photoId);

	}

	public  List<Photo> findAll( )
{
 		return photoDao.findAll( );

	}

}
