package com.sensoryex.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestMapping;

import com.sensoryex.backend.config.JwtFilter;

@SpringBootApplication
public class BackendApplication {
	
	
	@Bean
	public FilterRegistrationBean jwtFilter(){
		final FilterRegistrationBean registrationBean =new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/rest/*");
		
		return registrationBean;
	}
	


	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
}
