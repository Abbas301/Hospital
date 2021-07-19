import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  details:any

  message:any

  constructor( public ps:PatientService) { }

  ngOnInit(): void {
    this.ps.getData().subscribe(data =>{
      this.details = data;
    })
  }

  onSubmit(addData:NgForm) {
      this.ps.addHematology(addData.value).subscribe(data =>{
        this.message = "Patient Hematology details Added successfully"
        console.log(data);
      })
      addData.reset();
  }

  onClick(addData:NgForm) {
    this.ps.addGlucometry(addData.value).subscribe(data =>{
      this.message = "Patient Hematology details Added successfully"
      console.log(data);
    })
    addData.reset();
  }


}
