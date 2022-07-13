package com.favorite.article.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.favorite.article.entity.Favorite;
import com.favorite.article.service.FavoriteService;


@RestController
@CrossOrigin
public class FavoriteController {
	@Autowired
	private FavoriteService favoriteService;
	@GetMapping("/")
	public List<Favorite> getAllFavorite(){
		return favoriteService.getFavoriteList();
	}
	@PostMapping("/favorite")
	public Favorite favorite(@RequestBody Favorite favorite) {
			return favoriteService.favorite(favorite);
	}
	@DeleteMapping("/delete/{name}")
	public void deleteFavorite(@PathVariable String name) {
		favoriteService.deleteFavorite(name);
	}	
}
