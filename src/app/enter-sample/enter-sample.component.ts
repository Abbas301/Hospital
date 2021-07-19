import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { PatientService } from '../patient.service';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-enter-sample',
  templateUrl: './enter-sample.component.html',
  styleUrls: ['./enter-sample.component.css']
})
export class EnterSampleComponent implements OnInit {
  details: any

  myControl = new FormControl();
  options: string[] = [];
  filteredOptions!: Observable<string[]>;

  selected: any;
  index: any;

  hematology: boolean = false;
  glucometry: boolean = false;

  constructor(public ps: PatientService) {
  }

  ngOnInit(): void {
    this.getDetails();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getDetails() {
    this.ps.getData().subscribe(data => {
      this.details = data;
      console.log(this.details);
      for (let obj of this.details) {
        console.log(obj.patientName)
        this.options.push(obj.patientName)
        console.log(this.options)
      }

    })
  }
  patient: any;
  getInfo() {
    console.log(this.selected);
    for (let obj of this.details) {
      if (this.selected === obj.patientName) {
        this.index = this.details.indexOf(obj)
        console.log(this.index);
        this.patient = this.details[this.index]
        console.log(this.patient);
      }
    }
    console.log(this.hematology);
    console.log(this.glucometry);

    for (let obj in this.patient) {
      console.log(this.patient[obj]);
    }
    const newPatient = {
      date: this.patient.date,
      patientName: this.patient.patientName,
      email: this.patient.email,
      id: this.patient.id,
      _id: this.patient._id,
      hematology: this.hematology,
      glucometry: this.glucometry
    }

    this.ps.updateData(this.patient._id, newPatient).subscribe((res) => {
      console.log(res);
    })

  }
}
