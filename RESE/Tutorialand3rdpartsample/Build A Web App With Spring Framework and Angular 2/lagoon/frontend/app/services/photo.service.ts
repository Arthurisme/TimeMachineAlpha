import {User} from '../models/user';
import {Injectable} from 'angular2/core';
import {Photo} from '../models/photo';
import {Http, Headers} from 'angular2/http';


@Injectable()
export class PhotoService {

  constructor (private http : Http) {}

  getPhotosByUser(user: User) {
    let url="http://localhost:8080/rest/photo/user";
    let header = new Headers ({'Content-Type' : 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});

    return this.http.post(url, JSON.stringify(user), {headers: header});
  }

  getPhotoById(photoId: number) {
    let url="http://localhost:8080/rest/photo/photoId";
    let header = new Headers ({'Content-Type' : 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});

    return this.http.post(url, JSON.stringify(photoId), {headers: header});
  }

  updatePhoto(photo: Photo) {
    let url="http://localhost:8080/rest/photo/update";
    let header = new Headers ({'Content-Type' : 'application/json', 'Authorization': 'Bearer '+localStorage.getItem("token")});

    return this.http.post(url, JSON.stringify(photo), {headers: header});
  }

  getPhotos() {
    let url="http://localhost:8080/photo/allPhotos";
    return this.http.get(url);
  }
}
