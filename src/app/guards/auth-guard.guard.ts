import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './../service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanActivateChild {
  

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenStorage.getToken() == null) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenStorage.getToken() == null) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
  
}
