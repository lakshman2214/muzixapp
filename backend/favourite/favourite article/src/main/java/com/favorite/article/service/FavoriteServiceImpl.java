package com.favorite.article.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.favorite.article.entity.Favorite;
import com.favorite.article.repo.FavRepository;

@Service
public class FavoriteServiceImpl implements FavoriteService {
	@Autowired
	private FavRepository favRepository;
	@Override
	public List<Favorite> getFavoriteList() {
		return favRepository.findAll();
	}
	@Override
	public Favorite favorite(Favorite favorite) {
		favRepository.save(favorite);
		return favorite;
	}
	@Override
	public void deleteFavorite(String name) {
		Optional<Favorite> optionalFavorites = favRepository.findByName(name);
	      if(optionalFavorites.isPresent()){
	    	  favRepository.delete(optionalFavorites.get());
	      }
	    }
}
