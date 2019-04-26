import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  public contactoEmail: string;


  constructor() { }

  ngOnInit() {
  }

  guardarEmail(){
    localStorage.setItem('correo', this.contactoEmail);
    console.log(localStorage.getItem('correo'));
  }

}
