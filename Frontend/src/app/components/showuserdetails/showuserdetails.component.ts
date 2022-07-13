import { Component, Inject, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-showuserdetails',
  templateUrl: './showuserdetails.component.html',
  styleUrls: ['./showuserdetails.component.css']
})
export class ShowuserdetailsComponent implements OnInit {
  user=new User();
  public details:any;
  fullname:string;
  useremail:string;
  password:"";

  constructor(private regservice:RegistrationService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.savedata();

  }

  // fetchUserDetails(){
  //   this.regservice.getUserDetails(this.user).subscribe(data=>
  //     {
  //       this.details=data;
  //       console.log(data);
  //     })
  // }

  savedata(){
    this.fullname=localStorage.getItem('username');
    this.useremail=localStorage.getItem('useremail');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordDialog, {
      width: '300px',
      data: {name: this.fullname, password: this.password},
    });

    dialogRef.afterClosed().subscribe(password => {
      if(password){
        this.user.emailid = this.useremail;
        this.user.password = password
        this.regservice.changePassword(this.user).subscribe(data => console.log(data), error => console.log(error));
      }
    });
  }

}


@Component({
  selector: 'password-change-dialog',
  templateUrl: 'changepassworddialog.component.html',
})
export class ChangePasswordDialog {
  constructor(
    public dialogRef: MatDialogRef<ChangePasswordDialog>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}