import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Solicitud } from 'src/app/shared/models/solicitud';
import { Socio } from 'src/app/shared/models/socio';

@Component({
  selector: 'app-detalle-solicitud-terreno',
  templateUrl: './detalle-solicitud-terreno.component.html',
  styleUrls: ['./detalle-solicitud-terreno.component.scss']
})
export class DetalleSolicitudTerrenoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DetalleSolicitudTerrenoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Solicitud
  ) {}

  ngOnInit() {
    // console.log(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
}