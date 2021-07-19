import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor( private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:4300/api/patients')
  }
  postData(data:any){
    return this.http.post(`${environment.patientURL}`,data)
  }
  updateData(_id:any,patient:any) {
    return this.http.put(`${environment.patientURL}/${_id}`,patient)
  }

  addHematology(res:any) {
    return this.http.post('http://localhost:4300/api/hematology',res)
  }

  addGlucometry(data:any) {
    return this.http.post('http://localhost:4300/api/glucometry',data)
  }
}
