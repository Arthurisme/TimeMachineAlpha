import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {User} from '../models/user';
import {Http, Headers} from '@angular/http';

@Injectable()
export  class UserService{

    constructor (private http:Http){}

    getUserByName(username: string){
        let url = "http://localhost:8080/rest/user/userName";
        let header = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});

        return this.http.post(url, username, {headers:header} );
    }

    updateUser(user: User) {
        let url="http://localhost:8080/rest/user/update";
        let header=new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});

        return this.http.post(url, JSON.stringify(user), {headers: header});
    }
}