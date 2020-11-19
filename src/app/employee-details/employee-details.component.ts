import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor( private user: UserService ,
               private http: HttpClient) { }
data = [];
query = '';

  ngOnInit() {

    // tslint:disable-next-line:no-unused-expression
    this.data = this.user.employees;
    console.log(this.user.employees);
  }

}
