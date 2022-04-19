import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from './services/index';
import { MatDialog } from '@angular/material/dialog';

import { CreateUserDialog } from './dialogs/create-user/create.user.compoment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private user_service: UserService, private dialog: MatDialog) { }

  users = [
    { "First Name": "Albin", "Last Name": "VP", "email": "albinvp03@gmail.com", "phone": "9874563210" },
    { "First Name": "Albin", "Last Name": "VP", "email": "albinvp03@gmail.com", "phone": "9874563210" },
    { "First Name": "Albin", "Last Name": "VP", "email": "albinvp03@gmail.com", "phone": "9874563210" },
  ];

  ngOnInit() {
    this.user_service.getUsers()
      .subscribe((data: any) => {
        console.log(data);
      },
        (error: any) => {
          console.log(error);
        });
  }


  createuser() {
    const dialogRef = this.dialog.open(CreateUserDialog, {
      width: '450px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
    });
  }


}
