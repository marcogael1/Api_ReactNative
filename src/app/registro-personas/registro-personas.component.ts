import { Component, OnInit } from '@angular/core';
import { ItemService } from '../items.service'; 

@Component({
  selector: 'app-registro-personas',
  templateUrl: './registro-personas.component.html',
  styleUrls: ['./registro-personas.component.css']
})
export class RegistroPersonasComponent implements OnInit {
  persona = {
    nombre: '',
    apellido: '',
    edad: null,
    correo: '',
    telefono: ''
  };
  personas: any[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.cargarPersonas();
  }

  cargarPersonas() {
    this.itemService.obtenerPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  eliminarPersona(id: number) {
    this.itemService.eliminarPersona(id).subscribe(() => {
      console.log('Persona eliminada');
      this.cargarPersonas();
    });
  }

  onSubmit() {
    this.itemService.addPersona(this.persona).subscribe(result => {
      console.log('Persona registrada', result);
      this.persona = { nombre: '', apellido: '', edad: null , correo:'', telefono:''};
      this.cargarPersonas();
    });
  }
}
