import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import  {Observable} from 'rxjs/Observable';


@Injectable()
export class ApiTestService {
    constructor (private http:Http) {}

    // sendCredentials (model) {
    //     let tokenUrl = "http://localhost:8080/user/login";
    //     let headers1 = new Headers({'Content-Type': 'application/json'});
    //
    //     return this.http.post(tokenUrl, JSON.stringify(model), {headers: headers1});
    // }

    // check if downloaded token same with server:
    testApiRole () {
        let userUrl = "http://localhost:8080/api/role/user";
        // let headers2 = new Headers({'Authorization': 'Bearer '+token});


        // let headers2 = new Headers({'Authorization': 'Bearer '+token});
        // let header2 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem("token")});
        let header2 = new Headers({  'Authorization':'Bearer '+localStorage.getItem("token")});


        return this.http.get(userUrl,  {headers: header2});

        // return this.http.get(userUrl);
    }

    checkLogin()
    {
        if(localStorage.getItem("currentUserName")!="" && localStorage.getItem("token")!=""){
            return true;
        }else {
            return false;
        }
    }

    logout()
    {
        localStorage.setItem("token","");
        localStorage.setItem("currentUserName","");
        alert("You just logged out.")
    }

}