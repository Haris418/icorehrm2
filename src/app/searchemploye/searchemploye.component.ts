import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-searchemploye',
  templateUrl: './searchemploye.component.html',
  styleUrls: ['./searchemploye.component.css']
})
export class SearchemployeComponent implements OnInit {
  employeedata: any;
  
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getEmployeeDetails();
  }
  getEmployeeDetails(){
    return this.api.getEmployee().subscribe((res: any)=>{
      this.employeedata = res;
      console.log(res);
    })
  }
  

}
