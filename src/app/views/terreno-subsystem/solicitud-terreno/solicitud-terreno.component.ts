import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormSolicitudTerrenoComponent } from './form-solicitud-terreno/form-solicitud-terreno.component';
import { SolicitudTerrenoService } from 'src/app/shared/services/solicitud-terreno.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DetalleSolicitudTerrenoComponent } from './detalle-solicitud-terreno/detalle-solicitud-terreno.component';

const columnas = [
  { prop: 'numero' },
  { name: 'Socio' },
  { name: 'FechaPeticion' },
  { name: 'Garante' },
  { name: 'Terreno' }
];

@Component({
  selector: 'app-solicitud-terreno',
  templateUrl: './solicitud-terreno.component.html',
  styleUrls: ['./solicitud-terreno.component.scss']
})
export class SolicitudTerrenoComponent implements OnInit {
  public rows;
  public columns;
  public temp;
 
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  solicitudesTerrenos: any[];

  constructor(
    private dialog: MatDialog,
    private _solicitudService: SolicitudTerrenoService,
  ) {
   
    this.rows = [];
    this.columns = columnas;
    this.temp = [];
  }

  ngOnInit() {
    this.getSolicitudesByEstado('pendiente');
    this.solicitudesTerrenos = SolicitudTerrenoService.getHardCodedSolicitudesTerrenos();
    this.rows = this.solicitudesTerrenos;
    
  }

  getSolicitudes() {
    this._solicitudService.getSolicitudes().subscribe(
      result => {
        this.temp = [...result];
        this.rows = result;
      },
      error => console.log(error)
    );
  }

  getSolicitudesByEstado(estado: string) {
    this._solicitudService.getSolicitudesByState(estado).subscribe(
      result => {
        this.temp = [...result];
        this.rows = result;
      },
      error => console.log(error)
    );
  }

  openDialogForm() {
    const dialogRef = this.dialog.open(FormSolicitudTerrenoComponent, {
      width: '750px'
    });
  }



  selectTab(option: string) {
    switch (option) {
      case 'p':
        this.getSolicitudesByEstado('pendiente');
        break;
      case 'r':
        this.getSolicitudesByEstado('desaprobada');
        break;
      case 'a':
        this.getSolicitudesByEstado('aprobada');
        break;
      default:
        this.getSolicitudes();
        break;
    }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(d => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onActivateRow(event) {
    if (event.type === 'click') {
      const dialogRef = this.dialog.open(DetalleSolicitudTerrenoComponent, {
        width: '500px',
        data: event.row
      });
    }
  }
}
