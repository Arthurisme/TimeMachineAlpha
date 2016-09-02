package com.sensoryex.backend.controller;

import java.util.Arrays;
import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sensoryex.backend.model.User;
import com.sensoryex.backend.service.UserService;
import com.sensoryex.backend.config.TokenHandlerService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
@RequestMapping("/user")
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);

//     TokenHandlerService _TokenHandlerService = new TokenHandlerService();

    @Autowired
    private TokenHandlerService tokenHandlerService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public User registerUser(@RequestBody User user) {
        return userService.save(user);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody Map<String, String> json) throws ServletException {

        if (json.get("username") == null || json.get("password") == null) {
            throw new ServletException("Please fill in username and password");
        }

        String userName = json.get("username");
        String password = json.get("password");

        User user = userService.findByUserName(userName);

        if (user == null) {
            throw new ServletException("User name is not found");
        }

        String pwd = user.getPassword();

        if (!password.equals(pwd)) {
            throw new ServletException("Invalid login. Please check your name and password.");
        }

        log.info("Users info test: 20160901:" +
                " \n user name: " + userName +
                " \n user role: " + userName
                +"\n tokentest from another class: "+tokenHandlerService.tokentest
                +"\n realtaken  from another class before inject: "+tokenHandlerService.getTokenCurrent()

        );

        String jwtsForThisUser=Jwts.builder()
                .setSubject(userName)
                .claim("roles", Arrays.asList("user", "admin"))
//                .claim("roles", "admin")
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS256, "secretkey").compact();

        tokenHandlerService.setTokenCurrent(jwtsForThisUser);

        log.info("Users info test: 20160901:  "

                +" \n realtaken  from another class after inject: "+tokenHandlerService.getTokenCurrent()

        );


        return jwtsForThisUser;
    }


    @SuppressWarnings("unused")
    private static class UserLogin {
        public String name;
        public String password;
    }

    @SuppressWarnings("unused")
    private static class LoginResponse {
        public String token;

        public LoginResponse(final String token) {
            this.token = token;
        }
    }


}




