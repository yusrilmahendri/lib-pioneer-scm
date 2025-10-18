import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink , RouterModule} from "@angular/router";
import { Auth } from '../services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterModule],
  standalone: true,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  constructor(private auth: Auth) {}

  isCollapsed:  boolean = true;

    toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

logout() {
    Swal.fire({
      title: 'Yakin ingin keluar?',
      text: 'Anda akan keluar dari akun ini.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Keluar',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        this.auth.logout();
        Swal.fire({
          title: 'Berhasil!',
          text: 'Anda telah keluar dari akun.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  }
}
