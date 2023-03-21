
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Demarre l'application (ecouteur d'evenement des class et otut etc...) voir la doc 
platformBrowserDynamic().bootstrapModule(AppModule);
