import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../items.service';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css']
})
export class ActualizarPersonaComponent implements OnInit {
  persona: any = {};

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.itemService.obtenerPersonaPorId(id).subscribe((data) => {
      this.persona = data;
    });
  }

  onActualizarPersona() {
    this.itemService.actualizarPersona(this.persona).subscribe(() => {
      this.router.navigate(['../registro-personas']); 
    });
  }
}
