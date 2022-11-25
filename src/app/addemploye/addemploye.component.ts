import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ApiService } from '../shared/api.service';
export class EmployeeModel{
  id : number = 0;
  fname : string = '';
  lname : string = '';
  email : string = '';
  aadhar : string = '';
  phone : string = '';
  pan : string = '';
  designation : string = '';
  dateofbirth : string = '';
  materialstatus : string = '';

}


@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {

  formValue !: FormGroup;
  
  
  form!: FormGroup;
  data: any;
  constructor(private formbuilder: FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
   this.form = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lname: new FormControl('', []),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, ]),
      aadhar: new FormControl('', [Validators.required, ]),
      pan: new FormControl('', [Validators.required, ]),
      designation: new FormControl('', [Validators.required, ]),
      dateofbirth: new FormControl('', [Validators.required, ]),
      materialstatus: new FormControl('', [Validators.required, ]),

      employementdesignation: new FormControl('', [Validators.required, ]),
      paycycle: new FormControl('', [Validators.required, ]),
      dateofjoining: new FormControl('', [Validators.required, ]),
      compensation: new FormControl('', []),
      supervisor: new FormControl('', []),
      employementtype: new FormControl('', []),
    });
  }
  
  postEmployeeDetails(){
    this.form.valid
    // console.log(this.form.value,"form value");
    this.form.reset
    return this.api.postEmployee(this.form.value).subscribe((res: any)=>{
      console.log(res);
    }
    
    )
  }

  
  // postEmployeeDetails(){
  //   this.employeeModelObj.fname = this.formValue.value.fname;
  //   this.employeeModelObj.lname = this.formValue.value.lname;
  //   this.employeeModelObj.email = this.formValue.value.email;
  //   this.employeeModelObj.phone = this.formValue.value.phone;
  //   this.employeeModelObj.aadhar = this.formValue.value.aadhar;
  //   this.employeeModelObj.pan = this.formValue.value.pan;
  //   this.employeeModelObj.designation = this.formValue.value.designation;
  //   this.employeeModelObj.dateofbirth = this.formValue.value.dateofbirth;
  //   this.employeeModelObj.materialstatus = this.formValue.value.materialstatus;

  //   this.api.postEmployee(this.employeeModelObj)
    // .subscribe((res: any)=>{
    //   console.log(res);
    //   alert("employee added successfully")
    // }
    // )
    get f(){
      return this.form.controls;
    }
     
    submit(){
      console.log(this.form.value);
    }
  }





