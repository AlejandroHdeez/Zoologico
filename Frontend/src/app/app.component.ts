import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'Alejandro Hernandez';
  correo: string;

  ngOnInit(){
    this.correo = localStorage.getItem('correo');
  }

  ngDoCheck(){
    this.correo = localStorage.getItem('correo');
  }

  eliminarCorreo(){
    localStorage.removeItem('correo');
    localStorage.getItem('correo');
  }
  
}
