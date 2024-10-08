import { Component, ElementRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoService } from '../../services/auto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editarFormulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editarFormulario.component.html',
  styleUrls: ['./editarFormulario.component.css'],
})
export class EditarFormularioComponent {
  carros: any = {
    id: '',
    nombre: '',
    modelo: '',
    marca: '',
    precio: 0,
    color: '',
  };

  nuevoDueno: string = '';
  servicio = inject(AutoService);
  route = inject(Router);
  ruta = inject(ActivatedRoute);
  listaElement: ElementRef;

  constructor(private el: ElementRef) {
    this.listaElement = el;
  }

  ngOnInit() {
    this.ruta.params.subscribe((p) => {
      const id = p['idAutos'];
      this.servicio.getIDAuto(id).subscribe((auto) => {
        this.carros = auto;
      });
    });
  }

  editar(formulario: any) {
    if (formulario.valid) {
      this.servicio.putNosotros(this.carros).subscribe(() => {
        this.route.navigateByUrl('Inicio');
      });
    }
  }
}
