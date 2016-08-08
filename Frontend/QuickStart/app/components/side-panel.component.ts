import {Component} from '@angular/core';
import {UserService} from "../services/user.service";
import {PhotoService} from "../services/photo.service";
import {User} from '../models/User';
import {Photo} from '../models/Photo';
import {Router} from '@angular/router-deprecated';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {Observable} from 'rxjs/Observable'
import {PhotoRow} from './photo-row.component'


@Component({
    selector: 'side-panel',
    templateUrl: `app/components/side-panel.component.html`,
    directives:[PhotoRow]

})
export class SidePanel {}
