import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // ✅ Tambahkan ini
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private http = inject(HttpClient);
  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);
  private apiUrl = 'https://cloud-api-management.pioneersolve.id/api';

  private buildUrl(endpoint: string): string {
    return `${this.apiUrl.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}`;
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  register(data: any) {
    return this.http.post(this.buildUrl('register'), data);
  }

  login(credentials: any) {
    return this.http.post(this.buildUrl('login'), credentials).pipe(
      tap((res: any) => {
        if (this.isBrowser()) {
          localStorage.setItem('token', res.token);
        }
      })
    );
  }

  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem('token');
      this.router.navigate(['login']);
    }
  }

  isAuthenticated(): boolean {
    if (!this.isBrowser()) return false;
    return !!localStorage.getItem('token');
  }
}
