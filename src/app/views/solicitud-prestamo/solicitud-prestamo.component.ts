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

  ngOnInit() {}

  openDialogForm() {
    const dialogRef = this.dialog.open(FormSolicitudPrestamoComponent, {
      width: '500px',
      data: {}
    });
  }
}
