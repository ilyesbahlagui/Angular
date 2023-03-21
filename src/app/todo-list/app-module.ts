import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeaderComponent } from './components/header/header-component';
import { MainComponent } from './components/main/main-component';
import { LogoComponent } from './components/logo/logo-component';
import { NavComponent } from './components/nav/nav-component';
import { AppComponent } from "./app-component";

@NgModule({
    declarations: [
      MainComponent,
      AppComponent,
      HeaderComponent,
      NavComponent,
      LogoComponent,
    ],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent],
  })
 export class AppModule {}
  
  // platformBrowserDynamic().bootstrapModule(RootModule);