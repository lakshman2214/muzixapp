package com.favorite.article.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.favorite.article.entity.Favorite;

public interface FavRepository extends MongoRepository<Favorite, String> {
	Optional<Favorite> findByName(String name);
	void deleteByName(String name);
}
