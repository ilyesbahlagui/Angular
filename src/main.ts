import { Component, NgModule, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div class="container-fluid">
      <app-main></app-main>
    </div>
  `
})
class AppComponent {}

@Component({
  selector: 'app-header',
  template: `
    <h1>Haut de page</h1>
    <header>
      <app-logo></app-logo>
      <app-nav></app-nav>
    </header>
  `,
  encapsulation: ViewEncapsulation.Emulated,
  styles: [
    `
      header {
        display: flex;
      }
      h1 {
        color: red;
      }
    `,
  ],
})
class HeaderComponent {}

@Component({
  selector: 'app-main',
  template: `<h1>Bienvenue sur le site!</h1>`
})
class MainComponent {}

@Component({
  selector: 'app-nav',
  template: `
    <nav>
      <div><a href="/">Accueil</a></div>
      <div><a href="/pres">Présentation</a></div>
      <div><a href="/contact">Contact</a></div>
    </nav>
  `
})
class NavComponent {}

@Component({
  selector: 'app-logo',
  template: `<img src="http://placeimg.com/640/480/abstract" width="120">`
})
class LogoComponent {}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    LogoComponent,
  ],
  imports: [ BrowserModule ],
  bootstrap: [ AppComponent ]
})
class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule);
