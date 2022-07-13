package com.example.demoMusicApp.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demoMusicApp.model.UserRegistration;
import com.example.demoMusicApp.service.UserService;

@RequestMapping("/users")
@RestController
public class ShowUserDetailsController {
	

	@Autowired
	UserService service;
	
	@GetMapping("/username/{username}")
    public UserRegistration getUserByUsername(HttpServletRequest request, @PathVariable String username) throws Exception {
		UserRegistration response = service.findUserDetailsByUsername(username);
        return response;
    }

}
