import {Component} from '@angular/core';
import {HomeComponent} from './components/home.component'
import {NavBar} from './components/nav-bar.component'


@Component({
    selector: 'my-app',
    directives:[NavBar,HomeComponent],
    template: `
    <nav-bar></nav-bar>
    <home></home>
    `
})
export class AppComponent { }
