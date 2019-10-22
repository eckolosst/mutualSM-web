import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SolicitudPrestamoService } from 'src/app/shared/services/solicitud-prestamo.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { FormSolicitudTerrenoComponent } from '../../form-solicitud-terreno/form-solicitud-terreno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const columnas = [
  { prop: 'numero' },
  { name: 'Socio' },
  { name: 'FechaPeticion' },
  { name: 'Garante' },
  { name: 'Terreno' }
];

@Component({
  selector: 'app-ver-solicitud-terreno',
  templateUrl: './ver-solicitud-terreno.component.html',
  styleUrls: ['./ver-solicitud-terreno.component.scss']
})
export class VerSolicitudTerrenoComponent implements OnInit {
  public rows;
  public columns;
  public temp;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(
    private dialog: MatDialog,
    private _solicitudService: SolicitudPrestamoService
  ) {
    this.rows = [];
    this.columns = columnas;
    this.temp = [];
  }

  ngOnInit() {
    this.getSolicitudesByEstado('pendiente');
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
  openDialogForm() {
    const dialogRef = this.dialog.open(FormSolicitudTerrenoComponent, {
      width: '750px'
    });
  }

 
}
