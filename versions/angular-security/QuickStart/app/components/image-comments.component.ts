import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user';
import {Comment} from '../models/comment';
import {Photo} from '../models/photo';
import {UserService} from "../services/user.service";
import {PhotoService} from "../services/photo.service";
import {CommentService} from "../services/comment.service";
// import {Router} from '@angular/router-deprecated';
import {RouteParams} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';


@Component({
    selector: 'image-comments',
    providers: [CommentService],
    templateUrl: 'app/components/image-comments.component.html'
})
export class ImageComments   {
    @Input('photo') photo:Photo;
    myLocalStrorage = localStorage;
    comments:Comment[];
    newComment = new Comment();
    user:User = new User;
    photoId:Number;
    // userName:string;
    // testNumberId:Number ;


    constructor(private userService:UserService,
                private commentService:CommentService,
                private routeParams:RouteParams,
                private photoService:PhotoService) {


        // let photoId = Number.parseInt(this.routeParams.get('id'));
        this.photoId = Number.parseInt(this.routeParams.get('id'));



        // way 1 to show comments: no comments get from server----------------:
        // this.userService.getUserByName(localStorage.getItem("currentUserName"))
        //     .subscribe(
        //         user => {
        //
        //             this.user = JSON.parse(JSON.parse(JSON.stringify(user))._body);
        //         },
        //         error => console.log(error)
        //     )


        // // Another way to show comments: data comments get from server !!!photoId work only form routerParams :
        this.commentService.getCommentsByPhotoId( this.photoId)
            .subscribe(
                comments => {

                    this.comments = JSON.parse(JSON.parse(JSON.stringify(comments))._body);
                },
                error => console.log(error)
            )


    }

    onSubmit() {

        this.newComment.photo = this.photo;
        this.newComment.userName = this.user.userName;
        this.newComment.photoId = this.photo.photoId;

        // way 1 to show comments: no comments get from server------------:
        // this.commentService.addComment(this.newComment)
        //     .subscribe(
        //         photo => this.photoService.getPhotoById(this.photo.photoId).subscribe(
        //             photo => this.photo = JSON.parse(JSON.parse(JSON.stringify(photo))._body),
        //             error => console.log(error)
        //         )
        //     );


        // Another way to show comments: data comments get from server----------------:
        this.commentService.addComment(this.newComment)
            .subscribe(
                photo => this.commentService.getCommentsByPhotoId(this.photoId)
                    .subscribe(
                        comments => {

                            this.comments = JSON.parse(JSON.parse(JSON.stringify(comments))._body);
                        },
                        error => console.log(error)
                    )
            );


        this.newComment = new Comment();


    }
}
