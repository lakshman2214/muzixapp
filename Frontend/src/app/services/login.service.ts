import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:8191"

  constructor(private http:HttpClient) { }

  //calling server to generate token
   generateToken(user:any){
    //token generate
    return this.http.post(`${this.url}/login`,user)
  }

  //for authenticate user
  authenticateuser(token: any){
    localStorage.setItem("token",token)
    return true;

  }
//to check if user is logged in
  isLoggedIn(){
    let token=localStorage.getItem('token');
    if(token==undefined || token=='' || token ==null){
      return false;
    }else{
      return true;
    }  
  }
  //to log out
  logOut(){
    localStorage.removeItem('token')
    return true;
  }  
  //get Token
  getToken(){
    return localStorage.getItem("token")

  }
  



}


