import {Component} from 'angular2/core';
import {PhotoService} from '../services/photo.service';
import {Photo} from '../models/photo';

@Component({
  selector: 'photo-row',
  templateUrl: 'app/components/photo-row.component.html'
})
export class PhotoRow {
  photoList: Photo[];
  photoListSorted: Photo[];
  photoListRanked: Photo[];

  constructor(private photoService: PhotoService) {
    this.photoService.getPhotos().subscribe(
      data => {
        this.photoList = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        this.photoListSorted = this.photoList.sort((a,b) => b.likes - a.likes);

        this.photoListRanked = [];

        for (let index in this.photoListSorted) {
          if (Number(index) < 3) {
            this.photoListRanked.push(this.photoListSorted[index]);
          } else {
            break;
          }
        }
      },

      error => console.log(error)
    );
  }
}
