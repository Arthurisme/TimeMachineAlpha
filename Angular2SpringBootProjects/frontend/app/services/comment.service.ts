import {Injectable} from '@angular/core';
import {Photo} from '../models/photo';
import {User} from '../models/user';
import {Comment} from '../models/comment';

import {Http, Headers} from '@angular/http';




@Injectable()
export  class CommentService{

    constructor(private http:Http){}

    addComment(comment:Comment){
        let url = "http://localhost:8080/rest/comment/add";
        let header = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem("token")});

       return this.http.post(url,JSON.stringify(comment),{headers:header});
 }


    getCommentsByPhotoId(photoId: Number) {
        let url="http://localhost:8080/rest/comment/photoId";
        let header = new Headers ({'Content-Type' : 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});

        return this.http.post(url, photoId, {headers: header});
    }


}