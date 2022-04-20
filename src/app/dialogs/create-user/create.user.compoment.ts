import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/index';

@Component({
    selector: 'app-root',
    templateUrl: './create.user.component.html'
})
export class CreateUserDialog implements OnInit {

    constructor(public dialogRef: MatDialogRef<CreateUserDialog>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private service: UserService) { }

    createUserForm: any;

    ngOnInit() {
        this.createUserForm = this.fb.group({
            first_name: '',
            last_name: '',
            email: '',
            phone: ''
        });
    }

    onSave() {
        console.log(this.createUserForm.value);
        this.service.addUser(this.createUserForm.value)
            .subscribe((result: any) => {
                console.log(result);
                this.dialogRef.close(true);
            },
                (error: any) => {
                    // this.dialogRef.close(false);
                })
    }

}
