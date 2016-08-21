import {Component, Input} from 'angular2/core';
import {Photo} from '../models/photo';
import {PhotoService} from '../services/photo.service';
import {UserService} from '../services/user.service';
import {User} from '../models/user';
import {RouteParams} from 'angular2/router';
import {ImageComments} from './image-comments.component';

@Component({
  selector: 'image-detail',
  templateUrl: 'app/components/image-detail.component.html',
  directives: [ImageComments]
})
export class ImageDetail{
  photo: Photo = new Photo();
  like: string;
  user: User;

  constructor(
    private photoService: PhotoService,
    private userService: UserService,
    private routeParams: RouteParams
  ) {
    let photoId = Number.parseInt(this.routeParams.get('id'));
    this.photoService.getPhotoById(photoId).subscribe(
      photo => {
        this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body);
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
          user => {
            this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
            if(this.user.likedPhotoList.filter(photo => photo.photoId == this.photo.photoId)[0]) {
              this.like="Unlike";
            } else {
              this.like="Like";
            }
          },
          error => console.log(error)
        )
      },
      error => console.log(error)
    )
  }

  goBack() {
    window.history.back();
  }

  likeDisplay() {
    if (this.like =="Like") {
      this.like="Unlike";
      this.user.likedPhotoList.push(this.photo);
      this.photo.likes+=1;
      this.userService.updateUser(this.user).subscribe();
      this.photoService.updatePhoto(this.photo).subscribe();
    } else {
      this.like="Like";

      for (let i=0; i<this.user.likedPhotoList.length; i++) {
        if(this.user.likedPhotoList[i].photoId == this.photo.photoId) {
          this.user.likedPhotoList.splice(i,1);
        }
      }

      this.photo.likes-=1;
      this.userService.updateUser(this.user).subscribe();
      this.photoService.updatePhoto(this.photo).subscribe();
    }
  }
}
