import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router: Router) { }

  registerUser(credentials:any) {
      
    return this.http.post("http://localhost:4300/api/users",credentials)
  }

  getUserDetails() {
      const userDetails = JSON.parse('User')
      console.log(userDetails);
      if(userDetails) {
        return userDetails;
      }
    }
    isLoggedIn() {
      const userDetails = this.getUserDetails();
      return userDetails ? true : false;
    }
    isAdmin() {
      const userDetails = this.getUserDetails();
      return userDetails && userDetails.role === 'admin' ? true : false;
    }
    isUser() {
      const userDetails = this.getUserDetails();
      return userDetails && userDetails.role === 'user' ? true : false;
    }
}

