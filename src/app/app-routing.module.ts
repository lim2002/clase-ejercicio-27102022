import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { AbmComponent } from './abm/abm.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'abm',
    component:AbmComponent
  },
  {
    path:'catalogo',
    component:CatalogoComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
