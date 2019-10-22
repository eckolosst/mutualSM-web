import { Component, OnInit } from '@angular/core';
import { SocioService } from 'src/app/shared/services/socio.service';
import { Socio } from 'src/app/shared/models/socio';
import { MatDialog } from '@angular/material';
import { DetalleSocioComponent } from './detalle-socio/detalle-socio.component';

const columnas = [
  { prop: 'dni' },
  { name: 'NumeroSocio' },
  { name: 'Nombre' },
  { name: 'Apellido' },
  // { name: 'Fecha Nac' },
  // { name: 'Domicilio' },
  { name: 'Email' }
  // { name: 'Inicio Periodo' },
  // { name: 'Fin Periodo' }
];

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.scss']
})
export class SocioComponent implements OnInit {
  public rows;
  public columns;

  constructor(private socioService: SocioService, private dialog: MatDialog) {
    this.columns = columnas;
  }

  ngOnInit() {
    this.rows = this.socioService.getHardCodedSocios();
  }

  onActivateRow(event) {
    if (event.type === 'click') {
      const dialogRef = this.dialog.open(DetalleSocioComponent, {
        width: '500px',
        data: event.row
      });
    }
  }
}
