import {Component} from '@angular/core'
import {Employee} from "../models/employee";
import {RegisterService} from "../services/register.service";
import {EmployeeService} from "../services/employee.service";

@Component({
    selector:'employee',
    templateUrl:`app/components/employee.component.html`

    })

export  class Employee{


    employees:Employee[];
    newEmployee: Employee = new Employee();
    registered:boolean = false;

    constructor(private employeeService:EmployeeService){

        this.employeeService.findAll().subscribe( data =>{
            // this.employees = data;

            this.employees = JSON.parse(JSON.parse(JSON.stringify(data))._body);
        })

    }





        onSubmit(){
           this.employeeService.save(this.newEmployee).subscribe(
               data => {

                   if(data.status === 200){


                       this.employeeService.findAll().subscribe(
                           data => {

                               this.employees = JSON.parse(JSON.parse(JSON.stringify(data))._body);

                           },
                           error => console.log(error)
                       );




                   }

                   // this.registered =true;
                   this.newEmployee = new Employee();
               },
               error => console.log(error)
           );

        }





}