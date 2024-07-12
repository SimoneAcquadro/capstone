import { CarouselModule } from 'primeng/carousel';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingComponent } from './pages/landing/landing.component';
import { WebComponent } from './pages/web/web.component';
import { TechComponent } from './pages/tech/tech.component';
import { AboutComponent } from './pages/about/about.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { CarouselComponent } from './main-components/carousel/carousel.component';
import { CarouselTechComponent } from './main-components/carousel-tech/carousel-tech.component';
import { WebComponentComponent } from './main-components/web-component/web-component.component';
import { CarouselFotoComponent } from './main-components/carousel-foto/carousel-foto.component';
import { VideoComponent } from './main-components/video/video.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginStatusService } from './services/login-status.service'
import { Observable } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LandingComponent,
    WebComponent,
    TechComponent,
    AboutComponent,
    LoginComponent,
    CurriculumComponent,
    PrivacyComponent,
    CarouselComponent,
    CarouselTechComponent,
    WebComponentComponent,
    CarouselFotoComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbCarouselModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [LoginStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
