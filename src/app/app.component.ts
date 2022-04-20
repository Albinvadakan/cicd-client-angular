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

  users = [];

  ngOnInit() {
    this.getallusers();
  }


  createuser() {
    const dialogRef = this.dialog.open(CreateUserDialog, {
      width: '450px',
      height: '450px'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.getallusers();
      }
    });
  }


  getallusers() {
    this.user_service.getUsers()
      .subscribe((data: any) => {
        this.users = data;
      },
        (error: any) => {
          console.log(error);
        });
  }

}
