import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss']
})

export class UbicacionComponent {
  @Input() nombre: string;
  public zona: number;
  public descripcion: string;
  public encargado: string;
  public abierto: boolean;
  @Output() pasameLosDatos = new EventEmitter;

  constructor(){
      this.nombre = 'Shop #1'
      this.zona = 6;
      this.descripcion = 'Bosques de la fontana';
      this.encargado = 'Alejandro Hernandez';
      this.abierto = true;    
  }
  emitirEvento(){
      this.pasameLosDatos.emit({
          'nombre': this.nombre,
          'zona': this.zona,
          'descripcion': this.descripcion,
          'encargo': this.encargado,
          'abierto': this.abierto
      })
  }
}
