package com.ldeng.backend.service;

import java.util.List;

import com.ldeng.backend.model.Comment;

public interface CommentService {
	Comment save(Comment comment);

	Comment findOne(Long commentId);

	List<Comment> findByPhotoId(Long photo);
}
