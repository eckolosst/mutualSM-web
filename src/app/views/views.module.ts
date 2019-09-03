import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SocioComponent } from './socio/socio.component';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { SolicitudPrestamoComponent } from './solicitud-prestamo/solicitud-prestamo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormSolicitudPrestamoComponent } from './solicitud-prestamo/form-solicitud-prestamo/form-solicitud-prestamo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  DashboardComponent,
  SocioComponent,
  PrestamoComponent,
  SolicitudPrestamoComponent,
  FormSolicitudPrestamoComponent
];

@NgModule({
  declarations: components,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CommonModule,
    NgxDatatableModule
  ],
  exports: components,
  entryComponents: [FormSolicitudPrestamoComponent]
})
export class ViewsModule {}
