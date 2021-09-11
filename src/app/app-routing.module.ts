import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Catalogo1Component } from './components/catalogo1/catalogo1.component';
import { HomeComponent } from './components/home/home.component';
import { Catalogo2Component } from './components/catalogo2/catalogo2.component';
import { ItemProductoComponent } from './components/item-producto/item-producto.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'catalogo1', component: Catalogo1Component },
  { path: 'catalogo2', component: Catalogo2Component },
  { path: 'home', component: HomeComponent },
  { path: 'itemProducto/:id', component: ItemProductoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



