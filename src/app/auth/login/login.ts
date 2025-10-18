import { Component, inject } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Auth } from '../../shared/services/auth';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
 styleUrls: ['./login.scss'] 
})
export class Login {


  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  onSubmit() {
    if (this.form.invalid) return;

    const data = this.form.value;
    this.auth.login(data).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);

        // ✅ SweetAlert success
        Swal.fire({
          title: 'Berhasil!',
          text: `Halo ${res.user}, selamat datang!`,
          icon: 'success',
          confirmButtonText: 'Lanjut',
          timer: 2500,
          timerProgressBar: true,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });

        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        // ✅ SweetAlert error
        Swal.fire({
          title: 'Oops...',
          text: 'Maaf, Password atau Email Anda salah.',
          icon: 'error',
          confirmButtonText: 'Coba lagi',
          timer: 3000,
          timerProgressBar: true,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
      }
    });
  }


}
