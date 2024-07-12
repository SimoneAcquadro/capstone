import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginStatusService } from '../../services/login-status.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent implements OnInit {
  constructor (private loginStatusService: LoginStatusService, private router: Router) {}

  ngOnInit() {
    console.log('this.loginStatusService.IsLoggedIn', this.loginStatusService.IsLoggedIn)
    if (!this.loginStatusService.IsLoggedIn) this.router.navigate(['login'])
  }
}
