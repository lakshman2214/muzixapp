package com.favorite.article.service;

import java.util.List;

import com.favorite.article.entity.Favorite;

public interface FavoriteService {
	public List<Favorite> getFavoriteList();
	public Favorite favorite(Favorite favorite);
	public void deleteFavorite(String name);
}
