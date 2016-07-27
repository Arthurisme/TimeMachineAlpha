import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {User} from '../models/user';
import {Http, Headers} from '@angular/http';

@Injectable()
export  class PhotoService{

    constructor (private http:Http){}

    getPhotoByUser(user: User){
        let url = "http://localhost:8080/rest/photo/user";
        let header = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});

        return this.http.post(url, JSON.stringify(user), {headers:header} );
    }


}