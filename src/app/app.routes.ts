import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ForgotPassword } from './auth/forgot-password/forgot-password';
import { Dashboard } from './dashboard/dashboard';
import { Layout } from './shared/layout/layout';
import { Business } from './business/business';
import { MonitoringProduct } from './monitoring-product/monitoring-product';
import { ProfileSaya } from './profile-saya/profile-saya';
import { PegawaiComponent } from './pegawai-component/pegawai-component';
import { authGuard } from './auth/auth-guard';

export const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' },

  // auth routes (tanpa layout)
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },

  // main layout (dengan sidebar & navbar)
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
      { path: 'business', component: Business, canActivate: [authGuard] },
      { path: 'monitoring-products', component: MonitoringProduct, canActivate: [authGuard] },
      { path: 'profile-saya', component: ProfileSaya, canActivate: [authGuard] },
      { path: 'data-pegawai', component: PegawaiComponent, canActivate: [authGuard] },
    ]
  },

  // wildcard HARUS di paling bawah
  { path: '**', redirectTo: 'login' }
];
