import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let v = this.validateUser();
    if (!v)
      this.router.navigate(['login']);
    return v;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let v = this.validateUser();
    if (!v)
      this.router.navigate(['login']);
    return v;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    let v = this.validateUser();
    if (!v)
      this.router.navigate(['login']);
    return v;
  }

  constructor(private loginService: LoginService,
    public router: Router) { }

  validateUser(): boolean {
    if (this.loginService.getToken()) {
      return true;
    }
    return false;
  }
}
