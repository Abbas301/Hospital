import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message = ""

  constructor(public ps:PatientService) { }

  ngOnInit(): void {
  }

onSubmit(data:NgForm){
    console.log(data.value);
    this.ps.postData(data.value).subscribe(data =>{
      this.message = "Patient details Added successfully"
      console.log(data);
    })
    data.reset();
}
}
