import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user=new User();
  msg='';

  constructor(private _service:RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("Response received");
        this._router.navigate(['/login'])

      },
      error=> {

        console.log("Exception occured");
        this.msg="Registration unsuccessful.Enter valid credentials";
      }
    )

  }

}
