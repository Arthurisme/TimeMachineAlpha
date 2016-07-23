import {Component} from '@angular/core'
import {User} from "../models/user";
import {RegisterService} from "../services/register.service";

@Component({
    selector:'register',
    templateUrl:`app/components/register.component.html`

    })

export  class Register{

    newUser: User = new User();

    constructor(private registerService:RegisterService){}

        onSubmit(){
           this.registerService.sendUser(this.newUser).subscribe(
               data => {
                   // this.registered =true;
                   this.newUser = new User();
               },
               error => console.log(error)
           );

        }

}