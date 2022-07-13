import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { LoginService } from '../services/login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
  msg='';

  constructor(private _service:RegistrationService, private _router:Router,private loginService:LoginService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response received");
        this._router.navigate(['/home'])

      },
      error=> {

        console.log("Exception occured");
        this.msg="Bad credentials.Please enter valid email and password";
      }
    )
    this.loginService.generateToken(this.user).subscribe(
      (response:any)=>{
        //success
        console.log(response.token);
        console.log(response.user);
        localStorage.setItem("username",response.user.username);
        localStorage.setItem("useremail",response.user.emailid);
        this.loginService.authenticateuser(response.token)
         window.location.href="/home"
      },
      error=>{
        //error
        console.log(error);
      }
    )

  }

  gotoregistration(){
    this._router.navigate(['/registration'])
  }

}
