import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocioComponent } from './views/commons/socio/socio.component';
import { PrestamoComponent } from './views/prestamo-subsystem/prestamo/prestamo.component';
import { SolicitudPrestamoComponent } from './views/prestamo-subsystem/solicitud-prestamo/solicitud-prestamo.component';
import { DashboardComponent } from './views/commons/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'socio', component: SocioComponent },
  { path: 'prestamo', component: PrestamoComponent },
  { path: 'sol_prestamo', component: SolicitudPrestamoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
