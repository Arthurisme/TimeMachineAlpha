import {Component} from 'angular2/core';
import {HomeComponent} from './components/home.component';
import {NavBar} from './components/nav-bar.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {Register} from './components/register.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RegisterService} from './services/register.service';
import {Login} from './components/login.component';
import {LoginService} from './services/login.service';
import {UserService} from './services/user.service';
import {PhotoService} from './services/photo.service';
import {MyAlbum} from './components/my-album.component';
import {AddPhotoService} from './services/add-photo.service';
import {UploadPhotoService} from './services/upload-photo.service';
import {AddPhoto} from './components/add-photo.component';
import {ImageDetail} from './components/image-detail.component';

@Component({
    selector: 'my-app',
    directives: [HomeComponent, NavBar, ROUTER_DIRECTIVES,Login, MyAlbum, AddPhoto],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, RegisterService, LoginService, UserService, PhotoService],
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})
@RouteConfig([
  {path:'/home', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: '/register', name:'Register', component: Register},
  {path:'/login', name:'Login', component: Login},
  {path:'/my-album', name:'MyAlbum', component: MyAlbum},
  {path:'/add-photo', name:'AddPhoto', component: AddPhoto },
  {path:'/image-detail/:id', name:'ImageDetail', component: ImageDetail}
])
export class AppComponent { }
