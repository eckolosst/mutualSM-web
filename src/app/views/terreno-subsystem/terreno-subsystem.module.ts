import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerrenoComponent } from './terreno/terreno.component';
import { SolicitudTerrenoComponent } from './solicitud-terreno/solicitud-terreno.component';
import { FormSolicitudTerrenoComponent } from './solicitud-terreno/form-solicitud-terreno/form-solicitud-terreno.component';
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

const components = [
  TerrenoComponent,
  SolicitudTerrenoComponent,
  FormSolicitudTerrenoComponent,
 
];

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
  entryComponents: [FormSolicitudTerrenoComponent]
})
export class TerrenoSubsystemModule { }
