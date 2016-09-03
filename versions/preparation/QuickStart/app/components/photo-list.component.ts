import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {PhotoService} from "../services/photo.service";
import {User} from '../models/User';
import {Photo} from '../models/Photo';
import {Router} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable'

@Component({
    selector: 'photo-list',
    templateUrl: `app/components/photo-list.component.html`
})
export class PhotoList {

    photos:Photo[];
    selectedPhoto:Photo;

    constructor(
        private photoService:PhotoService,
        private router:Router
    ) {
        this.photoService.getPhotos().subscribe(
            photos => {
                this.photos = JSON.parse(JSON.parse(JSON.stringify(photos))._body);
            },
            error => console.log(error)
        );


    }

    onSelect(photo:Photo) {
        this.selectedPhoto = photo;
        this.router.navigate(['ImageDetail', {id: this.selectedPhoto.photoId}]);
    }


}
