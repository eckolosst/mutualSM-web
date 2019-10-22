import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocioComponent } from './views/commons/socio/socio.component';
import { PrestamoComponent } from './views/prestamo-subsystem/prestamo/prestamo.component';
import { SolicitudPrestamoComponent } from './views/prestamo-subsystem/solicitud-prestamo/solicitud-prestamo.component';
import { DashboardComponent } from './views/commons/dashboard/dashboard.component';
import { SolicitudTerrenoComponent } from './views/terreno-subsystem/solicitud-terreno/solicitud-terreno.component';
import { TerrenoComponent } from './views/terreno-subsystem/terreno/terreno.component';
import { VerSolicitudTerrenoComponent } from './views/prestamo-subsystem/terreno/ver-solicitud-terreno/ver-solicitud-terreno.component';
import { VerificarSolicitudTerrenoComponent } from './views/terreno-subsystem/verificar-solicitud-terreno/verificar-solicitud-terreno.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'socio', component: SocioComponent },
  { path: 'prestamo', component: PrestamoComponent },
  { path: 'sol_prestamo', component: SolicitudPrestamoComponent },
  { path: 'sol_terreno', component: SolicitudTerrenoComponent },
  { path: 'terreno', component: TerrenoComponent },
  { path: 'ver_sol_terreno', component: VerSolicitudTerrenoComponent },
  { path: 'aprobar_terreno', component: VerificarSolicitudTerrenoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
