import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TiendaComponent } from './components/tienda/tienda.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

const routes: Routes = [  
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo: 'inicio', pathMatch:'full'},
  {path: 'contacto', component: ContactoComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
