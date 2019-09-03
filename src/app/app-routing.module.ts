import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocioComponent } from './views/socio/socio.component';
import { PrestamoComponent } from './views/prestamo/prestamo.component';
import { SolicitudPrestamoComponent } from './views/solicitud-prestamo/solicitud-prestamo.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

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
