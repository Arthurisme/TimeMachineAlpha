package com.sensoryex.backend.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

 import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.sensoryex.backend.model.Comment;
import com.sensoryex.backend.model.Photo;
import com.sensoryex.backend.model.User;
import com.sensoryex.backend.service.CommentService;
import com.sensoryex.backend.service.PhotoService;

 
 
 
@RestController
@RequestMapping("/rest")
public class CommentResource {
	
 	

	@Autowired
	private CommentService commentService;
	
	@Autowired
	private PhotoService photoService;
	
	@RequestMapping(value="/comment/add", method=RequestMethod.POST)
	public void addComment(@RequestBody Comment comment){
		Photo photo = photoService.findByPhotoId(comment.getPhotoId());
//		List<Comment> commentList=photo.getCommentList();
		comment.setPhoto(photo);
		commentService.save(comment);		}
	
	
	@RequestMapping(value="/comment/photoId", method=RequestMethod.POST)
	public List<Comment> getCommentsByPhotoId(@RequestBody Long photoId){
 		return	commentService.findByPhotoId(photoId);
		}


}
