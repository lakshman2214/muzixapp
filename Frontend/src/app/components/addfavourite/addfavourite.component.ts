import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Favourite } from 'src/app/model/favourite';
import { FavouriteapiService } from 'src/app/services/favouriteapi.service';

@Component({
  selector: 'app-addfavourite',
  templateUrl: './addfavourite.component.html',
  styleUrls: ['./addfavourite.component.css']
})
export class AddfavouriteComponent implements OnInit {
  public getfab:any
  public recommendedTracks:any
  public showFab:any
   public delfab:Favourite

  constructor(private favapiservice:FavouriteapiService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchPageData();
  }

  fetchPageData(){
    this.favapiservice.getFavourite().subscribe(data=>{
      this.getfab=data;
      console.log(data);
      if(data.length){
        let randomIndex = this.randomNumber(0,this.getfab.length-1);
        console.log(randomIndex);
        this.favapiservice.getRecommendedTracks(this.getfab[randomIndex]).subscribe(data =>{
          console.log(data);
          this.recommendedTracks = data.similartracks.track;
        },
        error=>{
          console.log(error);
        });
      }        
    },
    error=>{
      console.log(error);
    }
    )
  }
  randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
  } 
  addtofavourite(track){
    let {name, url, artist} = track;
    this.favapiservice.addfavourite(new Favourite(name,url,artist.name)).subscribe( data=> {
      console.log(data);
        this._snackBar.open(name + " added to Favourite", 'OKAY', {duration:3000});
      this.fetchPageData();
    });
  }
  deleteTrack(name:string){
    this.favapiservice.deleteFavourite(name).subscribe(data=>{
      this._snackBar.open(name + " removed from Favourite", 'OKAY', {duration:3000});
      this.fetchPageData();
    },
   /* error=>{
      console.log("error in deletion");
    }*/
      )
  }

  checkIfFavorite(track){
    let found = false;
    for(let idx in this.getfab){
      if(this.getfab[idx].name == track.name){
        found = true;
        break;
      }
    }
    return found;
  }

}
