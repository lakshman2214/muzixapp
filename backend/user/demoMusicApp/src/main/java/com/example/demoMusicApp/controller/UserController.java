package com.example.demoMusicApp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demoMusicApp.model.PayLoad;
import com.example.demoMusicApp.model.UserRegistration;
import com.example.demoMusicApp.service.UserService;
import com.example.demoMusicApp.util.TokenUtil;

@RestController

@CrossOrigin(origins ="*")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@Autowired
    private TokenUtil tokenUtil;

	public UserController() {

	}
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins ="http://localhost:4200/")
	public UserRegistration registerUser(@RequestBody UserRegistration user) throws Exception {
		String tempEmailId=user.getEmailid();
		System.out.println(tempEmailId);
		if(tempEmailId !=null || "".equals(tempEmailId)) {
			System.out.println("infirst if");
			UserRegistration userObj=service.fetchUserByEmailid(tempEmailId);
			//System.out.println(userObj.getEmailid());
			if(userObj!=null) {
				throw new Exception("user with "+tempEmailId+" already exists");
			}
		}
		
		UserRegistration userObj=null;
		userObj=service.saveUser(user);
		return userObj;
		
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins ="http://localhost:4200/")
	public ResponseEntity<?> loginUser(@RequestBody UserRegistration user) throws Exception {
		String tempEmailId=user.getEmailid();
		String tempPass=user.getPassword();
		UserRegistration userObj=null;
		if(tempEmailId !=null && tempPass !=null ) {
			userObj=service.fetchUserByEmailidAndPassword(tempEmailId, tempPass);
		}
		if(userObj==null) {
			throw new Exception("Bad Credentials");
		}
		try {
			
			PayLoad payload = new PayLoad();
			payload.setToken(getToken(user.getEmailid(), user.getPassword()));
			payload.setUser(userObj);
			return new ResponseEntity<PayLoad>(payload, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.UNAUTHORIZED);
		} 
		
		
	}
	
	@CrossOrigin(origins="*")
    @GetMapping("/getuserdetails/{emailid}")
    public ResponseEntity<UserRegistration> getUserdetail(@PathVariable("emailid") String emailId) {
		UserRegistration per_user = service.fetchUserByEmailid(emailId);
		if(per_user!=null) {
			UserRegistration user = per_user;
			return new ResponseEntity<UserRegistration>(user,HttpStatus.OK);
		}
		return new ResponseEntity<UserRegistration>(HttpStatus.NOT_FOUND);
	}
	
	public String getToken(String id, String password) throws Exception {
//		return Jwts.builder().setId(id).setSubject(password).setIssuedAt(new Date())
//				.signWith(SignatureAlgorithm.HS256, "secretkey").compact();
		
		
		return tokenUtil.generateToken(id);

	}
	
	@PostMapping("/changepassword")
	@CrossOrigin(origins ="http://localhost:4200/")
	public UserRegistration changePassword(@RequestBody UserRegistration user) throws Exception {
		String tempEmailId=user.getEmailid();
		System.out.println(tempEmailId);
		if(tempEmailId !=null || "".equals(tempEmailId)) {
			System.out.println("infirst if");
			UserRegistration userObj=service.fetchUserByEmailid(tempEmailId);
			//System.out.println(userObj.getEmailid());
			if(userObj!=null) {
				userObj.setPassword(user.getPassword());
				service.saveUser(userObj);
			}
		}
		
		
		return user;
		
	}


}
