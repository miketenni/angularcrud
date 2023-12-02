import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/components/login/login.component';
import { SignupComponent } from './modules/login/components/signup/signup.component';
import { NotfoundComponent } from './modules/login/components/notfound/notfound.component';
import { HeaderComponent } from './modules/dashboard/component/header/header.component';
import { FooterComponent } from './modules/dashboard/component/footer/footer.component';
import { AboutComponent } from './modules/dashboard/component/about/about.component';
import { MainComponent } from './modules/dashboard/component/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
