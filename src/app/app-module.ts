import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// FIRST
// import { HeaderComponent } from './components/header/header-component';
// import { MainComponent } from './components/main/main-component';
// import { LogoComponent } from './components/logo/logo-component';
// import { NavComponent } from './components/nav/nav-component';
import { TodoListNavComponent } from "./todo-list/components/nav/todo-list-nav-component";
import { TodoListMainComponent } from "./todo-list/components/main/todo-list-main-component";
import { TodoListHeaderComponent } from "./todo-list/components/header/todo-list-header-component";


import { AppComponent } from "./app-component";

@NgModule({
    declarations: [
      // MainComponent,
      AppComponent,
      // HeaderComponent,
      // NavComponent,
      // LogoComponent,
      TodoListMainComponent,
      TodoListNavComponent,
      TodoListHeaderComponent,
      
    ],
    imports: [BrowserModule,FormsModule],
    bootstrap: [AppComponent],
  })
 export class AppModule {}
  
  // platformBrowserDynamic().bootstrapModule(RootModule);