import {Component} from 'angular2/core';
import {PhotoService} from '../services/photo.service';
import {User} from '../models/user';
import {Photo} from '../models/photo';
import {Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'photo-list',
  templateUrl: 'app/components/photo-list.component.html'
})
export class PhotoList {
  photos: Photo[];
  selectedPhoto: Photo;

  constructor(
    private photoService: PhotoService,
    private router: Router
  ) {
    this.photoService.getPhotos().subscribe(
      data => this.photos = JSON.parse(JSON.parse(JSON.stringify(data))._body),
      error => console.log(error)
    );
  }

  onSelect(photo: Photo) {
    this.selectedPhoto=photo;
    this.router.navigate(['ImageDetail', {id: this.selectedPhoto.photoId}]);
  }
}
