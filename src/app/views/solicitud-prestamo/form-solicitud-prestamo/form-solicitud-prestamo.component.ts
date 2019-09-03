import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SocioService } from 'src/app/shared/services/socio.service';
import { Socio } from 'src/app/shared/models/socio';
import { SolicitudPrestamoService } from 'src/app/shared/services/solicitud-prestamo.service';

@Component({
  selector: 'app-form-solicitud-prestamo',
  templateUrl: './form-solicitud-prestamo.component.html',
  styleUrls: ['./form-solicitud-prestamo.component.scss']
})
export class FormSolicitudPrestamoComponent implements OnInit {
  public prestamoForm: FormGroup;
  public socios: any[];

  constructor(
    public dialogRef: MatDialogRef<FormSolicitudPrestamoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sociosService: SocioService,
    private solicitudPrestamoService: SolicitudPrestamoService,
    private formBuilder: FormBuilder
  ) {
    this.socios = this.sociosService.getSocios();
  }

  ngOnInit() {
    this.prestamoForm = this.formBuilder.group({
      fechaPeticion: [null, Validators.required],
      fechaAprobacion: [null],
      resultado: [null, Validators.required],
      socio: [null],
      garante: [null],
      recibos: [null, Validators.required],
      monto: [null]
    });
  }

  send() {
    this.solicitudPrestamoService.post();
  }

  cancel() {
    this.dialogRef.close();
  }
}
