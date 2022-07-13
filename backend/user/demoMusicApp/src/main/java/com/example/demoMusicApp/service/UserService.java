package com.example.demoMusicApp.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demoMusicApp.model.UserRegistration;
import com.example.demoMusicApp.repository.UserRepository;
import com.example.demoMusicApp.util.TokenUtil;

@Service
public class UserService {
	

	@PersistenceContext
    private EntityManager em;
	
	@Autowired
    private TokenUtil tokenUtil;

	
	@Autowired
	private UserRepository repo;
	
	public UserService(UserRepository repo) {
		this.repo = repo;
	}
	
	public UserRegistration saveUser(UserRegistration user ) {
		return repo.save(user);
		
	}
	
	public UserRegistration fetchUserByEmailid(String email ) {
		System.out.println("in  service");
		return repo.findByEmailid(email);
		
	}
	
	public UserRegistration fetchUserByEmailidAndPassword(String email,String password)  {
		UserRegistration user = repo.findByEmailidAndPassword(email, password);
		
		return user;
		}
	
	public List<UserRegistration> getUserDetails() {
		return repo.findAll();
	}
	
	public UserRegistration findUserDetailsByUsername(String username) throws Exception {
		UserRegistration user = findByUsername(username);
      
		UserRegistration desired = new UserRegistration();
        desired.setEmailid(user.getEmailid());
        desired.setUsername(user.getUsername());
        desired.setPassword(desired.getPassword());
        desired.setId(user.getId());
        return desired;
    }
	
	public UserRegistration findByUsername(String username) throws Exception {
        Optional<UserRegistration> optional = findByUserName(username);
        if (!optional.isPresent()) {
            throw new Exception("user not found for username=" + username);
        }
        UserRegistration user = optional.get();
        return user;
    }
	
	
	
	public Optional<UserRegistration> findByUserName(String username) {
        String queryText = "from UserRegistration where emailid=:usernameArg";
        TypedQuery<UserRegistration> query = em.createQuery(queryText, UserRegistration.class);
        query.setParameter("usernameArg", username);
        List<UserRegistration> list = query.getResultList();
        if (list.isEmpty()) {
            Optional<UserRegistration> optional = Optional.empty();
            return optional;
        }

        UserRegistration user = list.get(0);
        Optional<UserRegistration> optional = Optional.of(user);
        return optional;
    }
	
	
	public UserRegistration authenticateByToken(String token) throws Exception {
        String email = tokenUtil.decodeToken(token);
        UserRegistration user = fetchUserByEmailid(email);
        UserRegistration desired = new UserRegistration();
        desired.setEmailid(user.getEmailid());
        desired.setUsername(user.getUsername());
        desired.setPassword(desired.getPassword());
        desired.setId(user.getId());
        return desired;
    }

}
