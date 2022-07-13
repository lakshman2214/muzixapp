import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MusicapiService } from 'src/app/services/musicapi.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artistId:string | any ;
  public artist:any;
  public tracks:any;

  constructor(private _activatedRoute:ActivatedRoute,private _musicApiService:MusicapiService) { }

  ngOnInit(): void {
    //get artist id from browser URL
    this._activatedRoute.paramMap.subscribe( (paramMap:ParamMap)=>{
      this.artistId=paramMap.get('name');
    });

    //get artist from service
    /*this._musicApiService.getArtist(this.artistId).subscribe((data)=>{
      this.artist=data;
    });

     //get tracks from service
     this._musicApiService.getAllTracks(this.artistId).subscribe((data)=>{
      this.tracks=data;
    });*/

  }

}
