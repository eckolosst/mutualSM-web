import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../commons/dashboard/dashboard.component';
import { SocioComponent } from '../commons/socio/socio.component';
import { DetalleSocioComponent } from '../commons/socio/detalle-socio/detalle-socio.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const components = [DashboardComponent, SocioComponent, DetalleSocioComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, NgxDatatableModule, FlexLayoutModule, MatButtonModule, MatIconModule, MatDialogModule],
  exports: components,
  entryComponents: [DetalleSocioComponent]
})
export class CommonsModule {}
