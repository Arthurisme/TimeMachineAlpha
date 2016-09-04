import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Employee} from '../models/employee';
import  {Observable} from 'rxjs/Observable';


@Injectable()
export class EmployeeService {
    constructor (private http:Http) {}



    findAll () {
        let userUrl = "http://localhost:8080/admin/employee/all";
        // let headers2 = new Headers({'Authorization': 'Bearer '+token});


        // let headers2 = new Headers({'Authorization': 'Bearer '+token});
        // let header2 = new Headers({'Content-Type': 'application/json', 'Authorization':'Bearer '+localStorage.getItem("token")});
        let header = new Headers({  'Authorization': localStorage.getItem("token")});


        return this.http.get(userUrl,  {headers: header});

        // return this.http.get(userUrl);
    }

    save (employee: Employee) {
        let url = "http://localhost:8080/admin/employee/save";
        let header = new Headers({'Content-Type': 'application/json', 'Authorization': localStorage.getItem("token")});

        console.log("201609031722: " +JSON.stringify(employee));

        return this.http.post(url, JSON.stringify(employee), {headers: header});
    }
}



// import {Injectable} from '@angular/core';
// import {Http,Headers} from '@angular/http';
// import {User} from '../models/User';
// import  {Observable} from 'rxjs/Observable';
//
//
// @Injectable()
// export class RegisterService {
//     constructor (private http:Http) {}
//
//     sendUser (user: User) {
//         let url = "http://localhost:8080/user/register";
//         let header = new Headers({'Content-Type': 'application/json'});
//
//         return this.http.post(url, JSON.stringify(user), {headers: header});
//     }
// }