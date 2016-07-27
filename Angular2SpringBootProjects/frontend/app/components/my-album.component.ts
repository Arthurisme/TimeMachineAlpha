import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {PhotoService} from "../services/photo.service";
import {User} from '../models/User';
import {Photo} from '../models/Photo';
import {Router} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';



@Component({
    directives:[ROUTER_DIRECTIVES],
    selector: 'my-album',
    templateUrl: `app/components/my-album.component.html`
})
export class MyAlbum {
    private photos: Photo[];
    private user;
    private selectedPhoto:Photo;

    constructor(
        private photoService:PhotoService,
        private router:Router,
        private userService:UserService

    ){

        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(

            user => {
                this.user =  JSON.parse(JSON.parse(JSON.stringify(user))._body);

                this.photoService.getPhotosByUser(this.user).subscribe(
                    photos => {
                        this.photos =  JSON.parse(JSON.parse(JSON.stringify(user))._body).photoList;
                        console.log("test photos list in front end: "+ this.photos);
                    }
                ),
                    error => console.log(error)
            }
        ),
            error => console.log(error)


    };

    onSelect(photo:Photo){
        this.selectedPhoto = photo;
        this.router.navigate(['ImageDetail',{id:this.selectedPhoto.photoId}]);
    }

}
