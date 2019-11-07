import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> | UrlTree {
    return this.authService.user.pipe(
      map(user => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        } else {
          this.router.navigate(['/auth']);
        }
      }));
  }
}
