package com.sensoryex.backend.service;

import java.util.List;

import com.sensoryex.backend.model.Comment;
 
 
public interface CommentService {
	Comment save(Comment comment);
    Comment findOne(Long commentId);
	
	List<Comment> findByPhotoId( Long photoId);  
}
