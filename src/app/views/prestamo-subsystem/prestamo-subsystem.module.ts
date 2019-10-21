import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamoComponent } from './prestamo/prestamo.component';
import { SolicitudPrestamoComponent } from './solicitud-prestamo/solicitud-prestamo.component';
import { FormSolicitudPrestamoComponent } from './solicitud-prestamo/form-solicitud-prestamo/form-solicitud-prestamo.component';
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

const components = [PrestamoComponent, SolicitudPrestamoComponent, FormSolicitudPrestamoComponent];

@NgModule({
  declarations: components,
  imports: [
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
  entryComponents: [FormSolicitudPrestamoComponent]
})
export class PrestamoSubsystemModule {}
