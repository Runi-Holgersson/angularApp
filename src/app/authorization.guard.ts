import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthorizationService} from "./common/services/authorization.service";
import {map, catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthorizationService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.getUserInfo()
      .pipe(catchError(err => {
          this.router.navigate(['/home/login-page']);
          this.authService.error = err.statusText;
          return of(false);
        }),
        map(res => {
            return true;
          }
        ))
  }
}
