import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";


@Component({
    selector: 'nav-bar',
    directives:[ROUTER_DIRECTIVES],
    templateUrl: `app/components/nav-bar.component.html`
})
export class NavBar { }
