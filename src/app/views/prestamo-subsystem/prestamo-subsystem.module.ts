import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { SolicitudPrestamoComponent } from './solicitud-prestamo/solicitud-prestamo.component';
import { FormSolicitudPrestamoComponent } from './solicitud-prestamo/form-solicitud-prestamo/form-solicitud-prestamo.component';
import { ResolverSolicitudComponent } from './solicitud-prestamo/resolver-solicitud/resolver-solicitud.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatDialogModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatExpansionModule
} from '@angular/material';
import { VerSolicitudTerrenoComponent } from './terreno/ver-solicitud-terreno/ver-solicitud-terreno.component';
import { FormSolicitudTerrenoComponent } from './form-solicitud-terreno/form-solicitud-terreno.component';

const components = [
  PrestamoComponent,
  SolicitudPrestamoComponent,
  FormSolicitudPrestamoComponent,
  FormSolicitudTerrenoComponent,
  ResolverSolicitudComponent,
  VerSolicitudTerrenoComponent,
  
];

@NgModule({
  declarations: components,
  imports: [FormsModule,ReactiveFormsModule,
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  exports: components,
  entryComponents: [FormSolicitudPrestamoComponent, ResolverSolicitudComponent,FormSolicitudTerrenoComponent]
})
export class PrestamoSubsystemModule {}
