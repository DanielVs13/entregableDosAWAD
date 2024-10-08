import { Component, inject } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tablaAutos',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './tablaAutos.component.html',
  styleUrl: './tablaAutos.component.css',
})
export class TablaAutosComponent {
  servicio = inject(AutoService);
  carros: any;
  ngOnInit() {
    this.servicio.getAutos().subscribe((p) => (this.carros = p));
  }

  eliminar(id: any) {
    this.servicio.deleteAuto(id).subscribe();
    window.location.reload();
  }
}
