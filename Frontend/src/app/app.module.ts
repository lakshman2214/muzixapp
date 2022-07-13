import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MusicapiService } from './services/musicapi.service';
import { ArtistComponent } from './components/artist/artist.component';
import { FirstPageComponent } from './components/first-page/first-page.component';
import {MatButtonModule} from '@angular/material/button';
import { ChangePasswordDialog, ShowuserdetailsComponent } from './components/showuserdetails/showuserdetails.component'
import {MatIconModule} from '@angular/material/icon';
import { AddfavouriteComponent } from './components/addfavourite/addfavourite.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SearchartistComponent } from './components/searchartist/searchartist.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NavbarComponent,
    ArtistComponent,
    FirstPageComponent,
    ShowuserdetailsComponent,
    AddfavouriteComponent,
    SearchartistComponent,
    ChangePasswordDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [MusicapiService],
  bootstrap: [AppComponent],
  entryComponents: [ChangePasswordDialog]
})
export class AppModule { }
