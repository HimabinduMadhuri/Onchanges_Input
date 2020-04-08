import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnChanges {

  @Input() employee:Employee;
  @Input() message : string;


  allMsgChangeLogs: string[] = [];
  allEmployeeChangeLogs: string[] = [];

  constructor() {}

    


   

  ngOnChanges(changes : SimpleChanges){
    for ( let propName in changes){
      let x = changes[propName];

      let curVal = JSON.stringify(x.currentValue);
      let prevVal = JSON.stringify(x.previousValue);
      let changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;


      if(propName === "message"){
        this.allMsgChangeLogs.push(changeLog);

      }
      
      else if(propName ==="employee"){

        this.allEmployeeChangeLogs.push(changeLog);
      }
    }

  }

}
