import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../../app/COMPONENTES/PAGES/INICIO/home/home.component';

const routes: Routes = [
  {path:'Inicio',component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,
    relativeLinkResolution: 'legacy' }), ],
exports: [RouterModule]
})
export class AppRoutingModule { }
