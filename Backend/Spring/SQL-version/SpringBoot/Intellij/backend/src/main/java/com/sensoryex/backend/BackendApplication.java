package com.sensoryex.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sensoryex.backend.config.JwtFilter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class BackendApplication {

	private static final Logger log = LoggerFactory.getLogger(BackendApplication.class);



	@Bean
	public FilterRegistrationBean jwtFilter(){
		final FilterRegistrationBean registrationBean =new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/rest/*", "/api/*");
//		registrationBean.addUrlPatterns("/rest/*" );


		return registrationBean;
	}
	


	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
}
