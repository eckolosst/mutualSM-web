import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Socio } from 'src/app/shared/models/socio';

@Component({
  selector: 'app-detalle-socio',
  templateUrl: './detalle-socio.component.html',
  styleUrls: ['./detalle-socio.component.scss']
})
export class DetalleSocioComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DetalleSocioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Socio
  ) {}

  ngOnInit() {
    console.log(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }
}
