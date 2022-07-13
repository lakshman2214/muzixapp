import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicapiService {

  public lastfmUrl = 'http://ws.audioscrobbler.com/2.0';
  public apiKey = 'b9caeedd7e342f6152914f30bbb166c8';

  public artistResults: any;
  public trackResults:any ;
  

  constructor(private _httpClient:HttpClient) { }


  //get all Artists
  public getAllArtists(searchQuery: string):Observable<any>{
    this.trackResults = this._httpClient.get(this.lastfmUrl + '/?method=track.search&track=' + searchQuery +
          '&api_key=' + this.apiKey + '&format=json');
    return this.trackResults;

  }

  //get all Artists
  public getSimilarTracks(track: any):Observable<any>{
    this.trackResults = this._httpClient.get(this.lastfmUrl + '/?method=track.getsimilar&artist='+track.artist+'&track=' + track.name +
          '&api_key=' + this.apiKey + '&format=json&limit=10');
    return this.trackResults;

  }

   //search by artist
   public getAllArtist(searchQuery: string):Observable<any>{
    this.artistResults = this._httpClient.get(this.lastfmUrl + '/?method=artist.search&artist=' + searchQuery +
               '&api_key=' + this.apiKey + '&format=json');
             return this.artistResults;

  }

  //get a single artist
  /*public getArtist(artistId:any):Observable<any>{
    this.artistResults = this._httpClient.get(this.lastfmUrl + '/?method=artist.getinfo&artist='+ artistId +
    '&api_key=' + this.apiKey + '&format=json');
  return this.artistResults;
  }*/
  //get top tracks

  /*public getAllTracks(artistId:any):Observable<any>{
    this.trackResults = this._httpClient.get(this.lastfmUrl + '?method=artist.gettoptracks&artist='+ artistId +
    '&api_key=' + this.apiKey + '&format=json');
  return this.trackResults;
  }*/
}
