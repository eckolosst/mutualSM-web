import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormSolicitudPrestamoComponent } from './form-solicitud-prestamo/form-solicitud-prestamo.component';

@Component({
  selector: 'app-solicitud-prestamo',
  templateUrl: './solicitud-prestamo.component.html',
  styleUrls: ['./solicitud-prestamo.component.scss']
})
export class SolicitudPrestamoComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    // request para pendientes
  }

  openDialogForm() {
    const dialogRef = this.dialog.open(FormSolicitudPrestamoComponent, {
      width: '750px'
    });
  }

  selectTab(option: string) {
    switch (option) {
      case 'p':
        // request para pendientes
        break;
      case 'r':
        // request para desaprobados
        break;
      case 'a':
        // request para aprobados
        break;
      default:
        // request para todos
        break;
    }
  }
}
