import { Component } from '@angular/core';
import { ListaAutosComponent } from "../../components/listaAutos/listaAutos.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ListaAutosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
