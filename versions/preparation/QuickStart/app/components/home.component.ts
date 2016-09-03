import {Component} from '@angular/core';
import {PhotoList} from './photo-list.component';
import {SidePanel} from './side-panel.component';
import {flattenStyles} from "@angular/compiler/core_private";
import {ApiTestService} from "../services/apitest.service";
import {Router} from '@angular/router-deprecated';



@Component({
    selector: 'home',
    directives:[PhotoList,SidePanel],
    templateUrl: `app/components/home.component.html`
})
export class HomeComponent {

    hasThisRole:boolean;

    constructor(private apiTestService: ApiTestService,private router: Router){}

    onClick(){

        // this.hasThisRole = false;



        this.apiTestService.testApiRole().subscribe(
            booleanData => {
                this.hasThisRole  = JSON.parse(JSON.parse(JSON.stringify(booleanData))._body);
            },
            error => console.log(error)
        );

    }
}
