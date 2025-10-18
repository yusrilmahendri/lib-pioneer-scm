import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Auth } from '../../shared/services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {

  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);

  form!: FormGroup;

  ngOnInit(): void {
    // ✅ Inisialisasi form dilakukan di lifecycle hook
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched(); // 🔴 Menandai semua field agar error muncul
      return;
    }

    const data = this.form.value;

    this.auth.login(data).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        Swal.fire({
          title: 'Berhasil!',
          text: `Halo ${res.user}, selamat datang!`,
          icon: 'success',
          confirmButtonText: 'Lanjut',
          timer: 2500,
          timerProgressBar: true,
        });
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        Swal.fire({
          title: 'Oops...',
          text: 'Maaf, Password atau Email Anda salah.',
          icon: 'error',
          confirmButtonText: 'Coba lagi',
        });
      }
    });
  }
}
