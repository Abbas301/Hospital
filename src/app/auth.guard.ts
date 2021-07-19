import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public router:Router ,
               private auth:AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      {
        const roles = route.data.roles as Array<string>;
        console.log(roles);
     
        const userDetails = this.auth.getUserDetails();
        if(userDetails && roles.includes(userDetails.role))
        {
          return true;
        }
        else {
          this.router.navigateByUrl(`/login`);
          return false;
        }
      }
    }
    
 }
