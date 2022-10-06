import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './COMPONENTES/NAVBAR/navbar/navbar.component';

import {AppRoutingModule} from '../assets/RUTAS/app.routes';
import { HomeComponent } from './COMPONENTES/PAGES/INICIO/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
