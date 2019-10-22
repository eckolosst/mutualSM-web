import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { SocioService } from 'src/app/shared/services/socio.service';
import { Socio } from 'src/app/shared/models/socio';
import { SolicitudPrestamoService } from 'src/app/shared/services/solicitud-prestamo.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GaranteService } from 'src/app/shared/services/garante.service';

@Component({
  selector: 'app-form-solicitud-prestamo',
  templateUrl: './form-solicitud-prestamo.component.html',
  styleUrls: ['./form-solicitud-prestamo.component.scss']
})
export class FormSolicitudPrestamoComponent implements OnInit {
  public prestamoForm: FormGroup;
  public guarantorForm: FormGroup;
  public socios: any[];
  public sociosFiltrados: Observable<any[]>;
  public newGuarantor: boolean;
  public sociosCtrl: FormControl;

  constructor(
    public dialogRef: MatDialogRef<FormSolicitudPrestamoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sociosService: SocioService,
    private solicitudPrestamoService: SolicitudPrestamoService,
    private garanteSercice: GaranteService,
    private formBuilder: FormBuilder
  ) {
    this.sociosCtrl = new FormControl();
    this.socios = this.sociosService.getHardCodedSocios();
    this.newGuarantor = false;
    this.sociosFiltrados = this.sociosCtrl.valueChanges.pipe(
      startWith(''),
      map(socio => (socio ? this._sociosFiltrados(socio) : this.socios.slice()))
    );
  }

  ngOnInit() {
    this.prestamoForm = this.formBuilder.group({
      fechaPeticion: [new Date(), Validators.required],
      resultado: [null, Validators.required],
      socio: [null],
      garante: [null],
      recibos: [null, Validators.required],
      monto: [null, [Validators.required]]
    });
    this.guarantorForm = this.formBuilder.group({
      dni: [null, Validators.required],
      apellido: [null, Validators.required],
      nombre: [null, Validators.required],
      fechaNacimiento: [null, Validators.required],
      domicilio: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefono: [null, Validators.required]
    });
  }

  send() {
    if (this.newGuarantor) {
      this.garanteSercice.addGarante(this.guarantorForm.value).subscribe(
        result => {
          // TODO: attach guarantorId to solicitud before post.
          this.solicitudPrestamoService.insertSolicitud(
            this.prestamoForm.value
          );
        },
        error => console.log(error)
      );
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  private _sociosFiltrados(value: string) {
    const filterValue = value.toLowerCase();
    return this.socios.filter(
      socio => socio.nombre.toLowerCase().indexOf(filterValue) === 0
    );
  }
}
