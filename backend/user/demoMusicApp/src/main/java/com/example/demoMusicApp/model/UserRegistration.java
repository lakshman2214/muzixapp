package com.example.demoMusicApp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class UserRegistration {
	
	@Id
	@GeneratedValue
	private int id;
	private String username;
	private String emailid;
	private String password;
	public UserRegistration() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserRegistration(int id, String username, String emailid, String password) {
		super();
		this.id = id;
		this.username = username;
		this.emailid = emailid;
		this.password = password;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "UserRegistration [id=" + id + ", username=" + username + ", emailid=" + emailid + ", password="
				+ password + "]";
	}
	
	
	

}
