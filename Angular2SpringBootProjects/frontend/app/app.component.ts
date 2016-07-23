import {Component} from '@angular/core';
import {HomeComponent} from './components/home.component';
import {NavBar} from './components/nav-bar.component';
import {Register} from './components/register.component';

import {RouteConfig,ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {RegisterService} from "./services/register.service";





@Component({
    selector: 'my-app',
    directives:[NavBar,HomeComponent,ROUTER_DIRECTIVES],
    providers:[ROUTER_PROVIDERS,HTTP_PROVIDERS,RegisterService],
    template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `
})

@RouteConfig([
    {path:'/home',name:'Home',component:HomeComponent,useAsDefault:true},
    {path:'/register',name:'Register',component:Register},
])

export class AppComponent { }
