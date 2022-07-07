import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/routing.module';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { ProductosListaComponent } from './component/productos-lista/productos-lista.component';
import { ProductosAgregarComponent } from './component/productos-agregar/productos-agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProductosListaComponent,
    ProductosAgregarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
