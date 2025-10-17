import { Routes } from '@angular/router';
import { Login } from './app/auth/login/login';
import { Register } from './app/auth/register/register';
import { ForgotPassword } from './app/auth/forgot-password/forgot-password';
import { Dashboard } from './dashboard/dashboard';
import { Layout } from './shared/layout/layout';
import { Business } from './business/business';
import { MonitoringProduct } from './monitoring-product/monitoring-product';
import { ProfileSaya } from './profile-saya/profile-saya';
import { PegawaiComponent } from './pegawai-component/pegawai-component';


export const routes: Routes = [
 { path: '', redirectTo: '/login', pathMatch: 'full' },

  // auth routes (tanpa layout)
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgot-password', component: ForgotPassword },

  // main layout (dengan sidebar & navbar)
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'business', component: Business },
      { path: 'monitoring-products', component: MonitoringProduct},
      { path: 'Profile Saya', component: ProfileSaya},
      { path: 'data-pegawai', component: PegawaiComponent},
    ]
  },

  // wildcard HARUS di paling bawah
  { path: '**', redirectTo: '/login' }
];
