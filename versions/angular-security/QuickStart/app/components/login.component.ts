import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {LoginService} from "../services/login.service";
import {Router} from '@angular/router-deprecated';




@Component({
    selector: 'login',
    templateUrl: `app/components/login.component.html`
})
export class Login {
    private model ={'username':'', 'password':''};
    private currentUserName;
    error: boolean = false;
    err: any;
    errBody: any;
    body: {};

    constructor(private loginService: LoginService,private router: Router){}

    onSubmit(){
        this.loginService.sendCredentials(this.model).subscribe(

          data => {
              localStorage.setItem("token",JSON.parse(JSON.stringify(data))._body);

              this.loginService.sendToken(localStorage.getItem("token")).subscribe(
              data => {
                  this.currentUserName = this.model.username;
                  localStorage.setItem("currentUserName",this.model.username);
                  this.model.username="";
                  this.model.password="";

                  //for future version:
                  // this.router.parent.navigateByUrl('/');

              }
              )
          },err => {
                this.err = err.status;
                this.errBody = err._body;
                this.body = err._body;
                this.error = true;
            }
        )

    }
}
