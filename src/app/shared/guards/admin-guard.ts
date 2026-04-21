import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn() && authService.isAdmin()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};
