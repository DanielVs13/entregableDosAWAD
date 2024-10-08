import { Component } from '@angular/core';
import { TablaAutosComponent } from '../../components/tablaAutos/tablaAutos.component';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [TablaAutosComponent],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {

}
