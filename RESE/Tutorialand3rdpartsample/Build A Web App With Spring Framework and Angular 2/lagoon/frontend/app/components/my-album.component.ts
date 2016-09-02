import {Component} from 'angular2/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {Photo} from '../models/photo';
import {Router} from 'angular2/router';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {PhotoService} from '../services/photo.service';


@Component({
  selector: 'my-album',
  templateUrl: 'app/components/my-album.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class MyAlbum {
  private photos: Photo[];
  private user;
  private selectedPhoto: Photo;

  constructor (
    private photoService: PhotoService,
    private router: Router,
    private userService: UserService
  ) {
    this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
      user => {
        this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        this.photoService.getPhotosByUser(this.user).subscribe(
          photos => this.photos=JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList
        ),
        error => console.log(error)
      }
    ),
    error => console.log(error)
  };


  onSelect(photo: Photo) {
    this.selectedPhoto = photo;
    this.router.navigate(['ImageDetail', {id: this.selectedPhoto.photoId}]);
  }
}
