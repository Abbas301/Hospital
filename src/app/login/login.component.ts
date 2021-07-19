import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patient.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sform: any = FormGroup
  message:string =""

  constructor(public ps:PatientService) { }

  ngOnInit(): void {
    this.sform = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern("[A-Za-z0-9]{3,20}@[a-z]{3,7}.[a-z]{3,4}")]),
      password: new FormControl("", [Validators.required, Validators.minLength(5), Validators.pattern("[0-9]{5}")])
    })
  }

  // getDetails(data:any) {
  //      this.ps.getAuth(data.value).subscribe(data =>{
  //        console.log(data);
  //      })
  // }

  get email() {
    return this.sform.get('email')
  }
  get psw() {
    return this.sform.get('password')
  }

  onSubmit(a:any) {
    console.log(a.value);
    a.reset();
    const message = "User logged successfully"
  }
}
