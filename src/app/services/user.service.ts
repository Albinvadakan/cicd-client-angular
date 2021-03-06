import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get('http://localhost:3000/user/getallusers');
    }

    addUser(userObj: any) {
        return this.http.post('http://localhost:3000/user/create', userObj);
    }

}