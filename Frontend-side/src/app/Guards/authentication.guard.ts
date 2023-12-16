import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from 'src/services/login.service';
import { take, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})


class authenticationGuard {


  constructor(private userservice:LoginService,private router:Router){}
  CanActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    if(this.userservice)
    {
       return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  }

export const IsauthGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean => {
  return inject(authenticationGuard).CanActivate(route,state);
}