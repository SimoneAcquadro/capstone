import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginEmail: string = '';
  loginPassword: string = '';
  registerEmail: string = '';
  registerPassword: string = '';

  constructor(private authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.login(
      {
        username: this.loginEmail,
        password: this.loginPassword
      }
    ).subscribe( (token) => {
      localStorage.setItem('token', token);

    })
  }

  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.register(
      {
        username: this.registerEmail,
        password: this.registerPassword
      }
    ).subscribe( () => {})

  }


}

