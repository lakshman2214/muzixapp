import { Component, OnInit } from '@angular/core';
 import { Favourite } from 'src/app/model/favourite';
import { FavouriteapiService } from 'src/app/services/favouriteapi.service';
import { MusicapiService } from 'src/app/services/musicapi.service';

@Component({
  selector: 'app-searchartist',
  templateUrl: './searchartist.component.html',
  styleUrls: ['./searchartist.component.css']
})
export class SearchartistComponent implements OnInit {

  public searchQuery:string="";
  public artistsearch: any;

  constructor(private _musicapiService:MusicapiService,private favapiserv:FavouriteapiService) { }

  ngOnInit(): void {
  }

  //search artists
  public searchArtists(){
    this._musicapiService.getAllArtist(this.searchQuery).subscribe( data=>{
      this.artistsearch=data.results.artistmatches.artist;
      
    }
    )
  }

  // // addtofavourite(name:string,url:string){
   
  // //   this.favapiserv.addfavourite(new Favourite(name,url)).subscribe( data=> {
      
  // //       console.log(data);
  // //       alert(name+ " added");
  // //       window.location.reload();
        
  // //     }
  // //   );

  // }



}
