import { Component, OnInit } from '@angular/core';
import { ItemService } from './items.service'; // Asegúrate de que la ruta del servicio es correcta


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    
  }

}
