import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { UsersService } from 'src/app/users.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';

@Injectable()
export class NeedAuthGuard implements CanActivate {

  constructor(private customerService: UsersService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const redirectUrl = route['_routerState']['url'];

    if (this.customerService.isLogged()) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/home'], {
          queryParams: {
            redirectUrl
          }
        }
      )
    );

    return false;
  }
}
