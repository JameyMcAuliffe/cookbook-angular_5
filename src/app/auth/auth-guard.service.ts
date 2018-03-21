import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private authService: AuthService) {}

	//canActivate returns a boolean in this instance
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.authService.isAuthenticated();
	}
}
