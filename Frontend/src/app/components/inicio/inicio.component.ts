import { Component, OnInit } from '@angular/core';
import { TeacherModel } from 'src/app/models/teacher';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  titulo = 'Modulo de persona';
  teacher: TeacherModel;
  message = 'Dato guardado';

  constructor(public rest: RestService ) {
    this.rest.setTeacher(this.teacher);
    this.teacher = new TeacherModel('','','','');
  }

  ngOnInit() {
    //this.getData();
  }

  onSubmit(){
    console.log(this.teacher);
    this.rest.setTeacher(this.teacher).subscribe(
      response => {
        if(response){
          console.log(this.message);
        }else{
          console.log('Error al guardar')
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}
