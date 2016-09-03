import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {PhotoService} from "../services/photo.service";
import {User} from '../models/User';
import {Photo} from '../models/Photo';
import {Router} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable'


@Component({
    selector: 'photo-row',
    templateUrl: `app/components/photo-row.component.html`
})
export class PhotoRow {
    photoList:Photo[];
    photoListSorted:Photo[];
    photoListRanked:Photo[];
    selectedPhoto:Photo;


    constructor(
        private photoService:PhotoService,
        private router:Router
    ) {
        this.photoService.getPhotos().subscribe(
            photos => {
                this.photoList = JSON.parse(JSON.parse(JSON.stringify(photos))._body);
                this.photoListSorted = this.photoList.sort((a,b) => b.likes - a.likes);

                this.photoListRanked = [];

                for(let index in this.photoListSorted){
                    if(Number(index)<3){
                     this.photoListRanked.push(this.photoListSorted[index]);
                    }
                    else{
                        break;
                    }
                }
            },
            error => console.log(error)
        );


    }

    onSelect(photo:Photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['ImageDetail', {id: this.selectedPhoto.photoId}]);
    }

}
