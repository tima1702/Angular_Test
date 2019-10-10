import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

export class AboutGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
