import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { WebComponent } from './pages/web/web.component';
import { TechComponent } from './pages/tech/tech.component';
import { AboutComponent } from './pages/about/about.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { LoginComponent } from './pages/login/login.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

// import { LoginStatusService } from './services/login-status.service';

// function redirectBasedOnAuth (loginStatusService: LoginStatusService) {
//   if (loginStatusService.IsLoggedIn) return '/curriculum'
//   else return '/login'
// }

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'web',
    component: WebComponent
  },
  {
    path:'tech',
    component: TechComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'curriculum',
    component: CurriculumComponent,
    // redirectTo: () => redirectBasedOnAuth(LoginStatusService)
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'privacy',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
