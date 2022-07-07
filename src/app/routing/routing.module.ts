import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosListaComponent } from '../component/productos-lista/productos-lista.component'
import { ProductosAgregarComponent } from '../component/productos-agregar/productos-agregar.component'

const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosListaComponent },
  { path: 'agregar', component: ProductosAgregarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

