import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'nav-bar',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/components/nav-bar.component.html'
})
export class NavBar {
  constructor (private loginService:LoginService) {

  }

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }
}
