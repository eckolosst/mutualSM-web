import { Component, OnInit } from '@angular/core';
import { SocioService } from 'src/app/shared/services/socio.service';
import { Socio } from 'src/app/shared/models/socio';

const columnas = [
  { prop: 'dni' },
  { name: 'Nombre' },
  { name: 'Apellido' },
  { name: 'Fecha Nac' },
  { name: 'Domicilio' },
  { name: 'Email' },
  { name: 'N° Socio' },
  { name: 'Inicio Periodo' },
  { name: 'Fin Periodo' }
];

@Component({
  selector: 'app-socio',
  templateUrl: './socio.component.html',
  styleUrls: ['./socio.component.scss']
})
export class SocioComponent implements OnInit {
  public rows;
  public columns;

  constructor(private socioService: SocioService) {
    this.columns = columnas;
  }

  ngOnInit() {
    this.rows = this.socioService.getSocios();
  }
}
