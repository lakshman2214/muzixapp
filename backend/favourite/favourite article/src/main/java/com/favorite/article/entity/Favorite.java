package com.favorite.article.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("DemoFavorite")
public class Favorite {
	@Id
	private String id;
	private String name;

	private String artist;
	
	private String url;
	public Favorite() {
		super();
	}
	public Favorite(String id, String name, String url, String artist) {
		super();
		this.id = id;
		this.name = name;
		this.url = url;
		this.artist = artist;
	}
	public String getId() {
		return id;
	}
	public String getArtist() {
		return artist;
	}
	public void setArtist(String artist) {
		this.artist = artist;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	
	
}
