import { Component } from '@angular/core';
import { Employee } from './employee';
import{NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emp = new Employee('sai' , 22);
  msg:string = "hello sai";






OnFormSubmit( empForm: NgForm) {

  let  name= empForm.controls['name'].value;
   let age = empForm.controls['age'].value;
   this.emp = new Employee(name , age);
}
}
