package com.sensoryex.backend.controller;

import com.sensoryex.backend.config.TokenHandlerService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;


import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;

import io.jsonwebtoken.SignatureException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



@RestController
@RequestMapping("/api")
public class ApiController {
	private static final Logger log = LoggerFactory.getLogger(ApiController.class);

	@Autowired
	private TokenHandlerService tokenHandlerService;



	@SuppressWarnings("unchecked")
	@RequestMapping(value = "role/{role}", method = RequestMethod.GET)
	public Boolean login(@PathVariable final String role,
						 final HttpServletRequest request) throws ServletException {

//		test:
// return true;
// return false;


//		String subject = "HACKER";
//		try {
//			Jws jwtClaims =
//					Jwts.parser().setSigningKey("secretkey").parseClaimsJws(jwt);
//
//			subject = claims.getBody().getSubject();
//
//			//OK, we can trust this JWT
//
//		} catch (SignatureException e) {
//
//			//don't trust the JWT!
//		}

		String tokenForThisUser = tokenHandlerService.getTokenCurrent();
		String tokenValue =  request.getParameter("claims" );

		  String authHeadertolen = request.getHeader("Authorization");


		 final Claims claims = (Claims) request.getAttribute("claims");
		String claimsS =   request.getAttribute("claims").toString();


//		  Claims claims = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(tokenForThisUser).getBody();
		request.setAttribute("claims", claims);

		log.info("api tokenForThisUser info test: 20160901: "
						+ "\n Claims name: " + tokenForThisUser
						+ "\n tokenValue Claims name: " + tokenValue
						+ "\n Claims name: " + claims
						+ "\n Claims role name: " + claims.get("roles")

						+ "\n authHeadertolen name: " + authHeadertolen
						+ "\n claimsS name: " + authHeadertolen
				+"\n claims : " + claims
//				+"\n name  : " + claims.getSubject()
//				+"\n roles  : " + claims.get("roles")
//				+"\n roles list:  : " +(List<String>) claims.get("roles")
		);

//		try {
//
//			final Claims claims = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(tokenForThisUser).getBody();
//			request.setAttribute("claims", claims);
//
//			log.info("Claims info test: 20160901: \n"
//							+
//							"Claims name: " + claims
////				+"user : " + claims.getSubject()
//
//			);
//
//
//		} catch (final SignatureException e) {
//			throw new ServletException ("Invalid token");
//		}


//		final Claims claims = (Claims) request.getAttribute("claims");
//
//


//		return ((List<String>) claims.get("roles")).contains(role);
//		return ((List<String>) claims.get("roles")).contains(Arrays.asList("user"));
//		return ((List<T>) claims.get("roles")).contains(role);
//		return Arrays.asList(claims.get("roles"))).contains(role);
//		return   contains(role);
		return (  claims.get("roles").toString()).contains("user");

//		 return true;

	}
}