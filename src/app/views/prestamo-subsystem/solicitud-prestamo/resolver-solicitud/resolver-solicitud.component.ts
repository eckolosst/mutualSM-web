import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-resolver-solicitud',
  templateUrl: './resolver-solicitud.component.html',
  styleUrls: ['./resolver-solicitud.component.scss']
})
export class ResolverSolicitudComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ResolverSolicitudComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }
}
