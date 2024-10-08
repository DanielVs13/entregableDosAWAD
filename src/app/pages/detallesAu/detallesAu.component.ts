import { Component } from '@angular/core';
import { DetallesAutosComponent } from '../../components/detallesAutos/detallesAutos.component';

@Component({
  selector: 'app-detallesAu',
  standalone: true,
  imports: [DetallesAutosComponent],
  templateUrl: './detallesAu.component.html',
  styleUrl: './detallesAu.component.css',
})
export class DetallesAuComponent {}
