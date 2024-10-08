import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoService } from '../../services/auto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detallesAutos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detallesAutos.component.html',
  styleUrl: './detallesAutos.component.css'
})
export class DetallesAutosComponent {
  servicio = inject (AutoService)
  router = inject(ActivatedRoute);

  autos: any;

  ngOnInit() {
    this.router.params.subscribe(id => {
      this.servicio.getIDAuto(id['idAutos']).subscribe(a=>{
        this.autos = a
      });
    });
  }
}
