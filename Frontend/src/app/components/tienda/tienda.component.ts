import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})

export class TiendaComponent implements DoCheck{
  public titulo;
  public nombreDeUbicacion: string;   
  public miUbicacion;
  title = 'Alejandro Hernandez';

  constructor(){
      this.titulo = 'Esta es la tienda'
  }

  mostrarNombre(){
      console.log(this.nombreDeUbicacion);
  }
  verDatosUbicacion(event){
      console.log(event);
      this.miUbicacion = event;
  }


  ngDoCheck(){
    console.log('Cambios en las propiedades', this.nombreDeUbicacion);
  }
  
}
