import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Comment} from '../models/comment';

@Injectable()
export class CommentService {
  constructor(private http: Http) {}

  addComment(comment: Comment) {
    let url="http://localhost:8080/rest/comment/add";
    let header = new Headers ({'Content-Type' : 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});

    return this.http.post(url, JSON.stringify(comment), {headers: header});
  }
}
