import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {AddPhotoService} from "../services/add-photo.service";
import {UploadPhotoService} from "../services/upload-photo.service";
import {User} from '../models/User';
import {Photo} from '../models/Photo';



@Component({
    selector: 'add-photo',
    providers: [UploadPhotoService, AddPhotoService],
    templateUrl: 'app/components/add-photo.component.html'
})
export class AddPhoto {
    newPhoto: Photo = new Photo();
    photoAdded: boolean = false;
    user: User;

    constructor (
        private uploadPhotoService: UploadPhotoService,
        private addPhotoService: AddPhotoService,
        private userService: UserService
    ) {}

    onSubmit() {
        this.userService.getUserByName(localStorage.getItem("currentUserName")).subscribe(
            user => {
                this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
                console.log("test user in add photo:"+this.user);
                this.newPhoto.user = this.user;
                // console.log( this.newPhoto.user);

                this.addPhotoService.sendPhoto(this.newPhoto)
                    .subscribe(
                        data => {
                            console.log( this.newPhoto.user);

                            this.photoAdded = true;
                            this.newPhoto = new Photo();
                        },
                        error => console.log(error)
                    );
            },
            error => console.log(error)
        )
    }
}
