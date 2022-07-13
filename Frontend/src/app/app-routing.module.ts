import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfavouriteComponent } from './components/addfavourite/addfavourite.component';
import { ArtistComponent } from './components/artist/artist.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SearchartistComponent } from './components/searchartist/searchartist.component';
import { ShowuserdetailsComponent } from './components/showuserdetails/showuserdetails.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path:'',component:FirstPageComponent},
  {path:'tracksearch',component:HomeComponent,pathMatch:"full",canActivate:[AuthGuard]},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  //{path:'artists/:mbid',component:ArtistComponent},
  {path:'showuserdetails',component:ShowuserdetailsComponent},
  {path:'addfavourite',component:AddfavouriteComponent},
  {path: 'artistsearch',component:SearchartistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
