package com.example.demoMusicApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.example.demoMusicApp.util.AuthenticationFiler;

@SpringBootApplication
public class DemoMusicAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoMusicAppApplication.class, args);
	}
	
	@Bean
	public AuthenticationFiler authenticationFilter(){
		return new AuthenticationFiler();
	}

	@Bean
	public FilterRegistrationBean<AuthenticationFiler>registerationFilter(){
		FilterRegistrationBean<AuthenticationFiler>registeration=new FilterRegistrationBean<>();
		registeration.addUrlPatterns("/users/*");
		registeration.setFilter(authenticationFilter());
		return registeration;
	}

}
