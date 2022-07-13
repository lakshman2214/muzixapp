import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }
  
  public loginUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8191/login",user)

  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8191/registeruser",user)

  }

  public changePassword(user:User):Observable<any>{
    return this._http.post<any>("http://localhost:8191/changepassword",user)

  }

  // public getUserDetails(user:User):Observable<any>{
  //   
  //   return this._http.get<User>("http://localhost:8191/getuserdetails/"+user.emailid,user)

  // }
}
