import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favourite } from '../model/favourite';
import { MusicapiService } from './musicapi.service';

@Injectable({
  providedIn: 'root'
})
export class FavouriteapiService {
  favapi="http://localhost:8789"

  constructor(private http:HttpClient, private musicapi:MusicapiService){}
  public addfavourite(fab:Favourite){
    return this.http.post<Favourite>(`${this.favapi}/favorite`,fab);
  }

  public getFavourite():any{
    return this.http.get<Favourite>(`${this.favapi}/`);
  }

  public getRecommendedTracks(track):any{
    return this.musicapi.getSimilarTracks(track);
  }

public deleteFavourite(name){
  return this.http.delete(`${this.favapi}`+`/delete/${name}`);
}

   

}
