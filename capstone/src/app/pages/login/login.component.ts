import { LoginStatusService } from './../../services/login-status.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

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

  constructor(private authService: AuthService, private loginStatusService: LoginStatusService, private router: Router) {}

  isLoggedIn = localStorage.getItem('token') !== null

  public onLogin(form: NgForm) {
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

      this.isLoggedIn = true
      this.loginStatusService.IsLoggedIn = true

      setTimeout(() => {
        this.router.navigate(['curriculum']);
      }, 250);
    })
  }

  public onLogout() {

    localStorage.removeItem('token')

    this.isLoggedIn = false
    this.loginStatusService.IsLoggedIn = false

    setTimeout(() => {
      this.router.navigate(['']);
    }, 250);
  }

  public onRegister(form: NgForm) {
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
