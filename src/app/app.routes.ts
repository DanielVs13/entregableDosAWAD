import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AutosComponent } from './pages/autos/autos.component';
import { DetallesAuComponent } from './pages/detallesAu/detallesAu.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EditarFormularioComponent } from './components/editarFormulario/editarFormulario.component';

export const routes: Routes = [
  {path: '',redirectTo:'Inicio',pathMatch:'full'},
  {path:"Inicio", component:InicioComponent},
  {path:"Autos", component:AutosComponent},
  {path:"detalles/:idAutos", component:DetallesAuComponent},
  {path:"formulario", component:FormularioComponent},
  {path:"editar-formulario/:idAutos", component:EditarFormularioComponent},
  
];
