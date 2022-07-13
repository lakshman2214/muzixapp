import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Favourite } from '../model/favourite';
import { FavouriteapiService } from '../services/favouriteapi.service';
import { MusicapiService } from '../services/musicapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchQuery:string="";
  public tracks: any;
  public fav:Favourite;
  public favouriteList: any;

  constructor(private _musicapiService:MusicapiService,
    private favapiservice:FavouriteapiService, 
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchFavorites();
  }

  fetchFavorites(){
    this.favapiservice.getFavourite().subscribe(data=>{
      this.favouriteList=data;
    },
    error=>{
      console.log(error);
    })
  }

  checkIfFavorite(track){
    let found = false;
    for(let idx in this.favouriteList){
      if(this.favouriteList[idx].name == track.name){
        found = true;
        break;
      }
    }
    return found;
  }

  deleteTrack(name:string){
    this.favapiservice.deleteFavourite(name).subscribe(data=>{
      this._snackBar.open(name + " removed from Favourite", 'OKAY', {duration:3000});
      this.fetchFavorites();
    },
   /* error=>{
      console.log("error in deletion");
    }*/
      )
  }

  //search artists
  public searchArtists(){
    this._musicapiService.getAllArtists(this.searchQuery).subscribe( data=>{
      this.tracks=data.results.trackmatches.track;
    }
    )
  }

  /*public setFav(name:string,url:string){
    console.log(name);
    console.log(url);
    this.fav.name=name;
    this.fav.url=url;
    console.log(this.fav.name);
    console.log(this.fav.url);
    this.addtofavourite();
  }*/
  addtofavourite(track){
   let {name, url, artist} = track;
   
    this.favapiservice.addfavourite(new Favourite(name,url,artist)).subscribe( data=> {
      
        console.log(data);
        this._snackBar.open(name + " added to Favourite", 'OKAY', {duration:3000});
        this.fetchFavorites();

        
      }
    );

  }

}


