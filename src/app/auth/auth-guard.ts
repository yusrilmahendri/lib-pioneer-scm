import { CanActivateFn } from '@angular/router';
import {  Router } from '@angular/router';
import { Auth } from '../shared/services/auth';
import { inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = inject(Auth);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  // ✅ Pastikan dijalankan hanya di browser
  if (isPlatformBrowser(platformId)) {
    const isLoggedIn = auth.isAuthenticated();

    if (isLoggedIn) {
      return true;
    }

    router.navigate(['/login']);
    return false;
  }
  return false;
};
