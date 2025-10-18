import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '../../shared/services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register implements OnInit {

  private fb = inject(FormBuilder);
  private auth = inject(Auth);
  private router = inject(Router);

  form!: FormGroup;

  ngOnInit(): void {
    this.doGetForm();
  }

  get f() {
    return this.form.controls;
  }

  // ✅ Validasi password harus sama
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirm = group.get('password_confirmation')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  doGetForm(){
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirmation: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    }, { validators: this.passwordMatchValidator });  
  }

  // ✅ Logic submit form register
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      Swal.fire({
        icon: 'warning',
        title: 'Periksa Kembali!',
        text: 'Pastikan semua kolom telah diisi dengan benar.',
        confirmButtonText: 'Oke',
      });
      return;
    }

    const data = {
      name: this.f['name'].value,
      email: this.f['email'].value,
      phone: this.f['phone'].value,
      password: this.f['password'].value,
      password_confirmation: this.f['password_confirmation'].value
    };

    this.auth.register(data).subscribe({
      next: (res: any) => {
        Swal.fire({
          title: '🎉 Pendaftaran Berhasil!',
          text: `Akun ${res.user.name} berhasil dibuat. Silakan login.`,
          icon: 'success',
          confirmButtonText: 'Login Sekarang',
          timer: 2500,
          timerProgressBar: true,
          showClass: { popup: 'animate__animated animate__fadeInDown' },
          hideClass: { popup: 'animate__animated animate__fadeOutUp' }
        }).then(() => {
          this.router.navigate(['/login']);
        });
      },
      error: (err) => {
        console.error('Register error detail:', err);
        Swal.fire({
          icon: 'error',
          title: 'Gagal!',
          text:
            err?.error?.message ||
            (err?.error?.errors ? JSON.stringify(err.error.errors) : 'Terjadi kesalahan.'),
          confirmButtonText: 'Tutup',
        });
      }
    });
  }
}
