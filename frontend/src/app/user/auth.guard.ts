import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
return true
  return authService.isAuthenticated()
};
