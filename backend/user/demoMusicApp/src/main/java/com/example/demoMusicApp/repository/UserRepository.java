package com.example.demoMusicApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demoMusicApp.model.UserRegistration;

public interface UserRepository extends JpaRepository<UserRegistration,Integer> {
	public UserRegistration findByEmailid(String emailid); 
	
	public UserRegistration findByEmailidAndPassword(String emailid,String password);
	
	UserRegistration findByIdAndPassword(int id, String password);
	
	
	

}
