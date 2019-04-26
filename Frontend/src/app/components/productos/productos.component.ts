import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  titulo= 'Clase de Productos';
  teachers = [];



  constructor(public rest: RestService) { }

  ngOnInit() {
    this.getTeachers();
    console.log('Productos lanzado');
  }

  getTeachers(){
    this.rest.getTeachers().subscribe(res => {
      console.log(res);
      this.teachers = res.teachers;
    });
  }

}
