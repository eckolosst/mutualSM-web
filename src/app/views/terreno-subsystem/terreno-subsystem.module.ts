import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// PrimeNG
import {AccordionModule, CalendarModule, MenuItem} from 'primeng/primeng';
import { SharedModule, PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/components/table/table';
import {DropdownModule} from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TabViewModule} from 'primeng/tabview';
import {MultiSelectModule} from 'primeng/multiselect';
import {SolicitudTerrenoComponent} from './solicitud-terreno/solicitud-terreno.component';
import {TerrenoComponent} from './terreno/terreno.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule }   from '@angular/forms';
import { VerificarSolicitudTerrenoComponent } from './verificar-solicitud-terreno/verificar-solicitud-terreno.component';





@NgModule({
  declarations: [SolicitudTerrenoComponent,TerrenoComponent,VerificarSolicitudTerrenoComponent],
  imports: [
    FormsModule,
    NgbModule,
    CommonModule,
    MultiSelectModule,
    AccordionModule,
    ButtonModule,
    PanelModule,
    SharedModule,
    TableModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    TabViewModule,
  ]
})
export class TerrenoSubsystemModule { }
