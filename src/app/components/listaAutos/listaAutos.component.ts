import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AutoService } from '../../services/auto.service';

@Component({
  selector: 'app-listaAutos',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './listaAutos.component.html',
  styleUrl: './listaAutos.component.css'
})
export class ListaAutosComponent {
  servicio = inject(AutoService)
  carros : any;
  marca ="";
  PrecioMinimo = 0
  PrecioMaximo = 90000000

  ngOnInit(){
    this.servicio.getAutos().subscribe(p=>(
      this.carros = p
    )

    )

  }


  visualizar: any
  ver( id: any){
    this.visualizar = id
  }
 busqueda:any

}