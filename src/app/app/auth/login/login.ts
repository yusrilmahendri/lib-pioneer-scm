import { Component, inject } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { log } from 'console';


@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.html',
 styleUrls: ['./login.scss'] 
})
export class Login {


  username = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    console.log('sadas');
   this.router.navigate(['/dashboard']);
  }
}
