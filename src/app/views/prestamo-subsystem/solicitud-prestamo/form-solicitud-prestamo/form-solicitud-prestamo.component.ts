import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SocioService } from 'src/app/shared/services/socio.service';
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
  public paycheckForm: FormGroup;
  public socios: any[];
  public sociosFiltrados: Observable<any[]>;
  public newGuarantor: boolean;
  public sociosCtrl: FormControl;
  public waiting: boolean;

  constructor(
    public dialogRef: MatDialogRef<FormSolicitudPrestamoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sociosService: SocioService,
    private solicitudPrestamoService: SolicitudPrestamoService,
    private formBuilder: FormBuilder
  ) {
    this.waiting = false;
    this.sociosCtrl = new FormControl();
    this.socios = [];
    this.newGuarantor = false;
    this.sociosFiltrados = this.sociosCtrl.valueChanges.pipe(
      startWith(''),
      map(socio => (socio ? this._sociosFiltrados(socio) : this.socios.slice()))
    );
  }

  ngOnInit() {
    this.sociosService.getSocios().subscribe(
      result => {
        this.socios = result;
      },
      error => console.error(error)
    );
    this.prestamoForm = this.formBuilder.group({
      fechaPeticion: [new Date(), Validators.required],
      resultado: ['pendiente', Validators.required],
      socio: [null],
      garante: [null],
      recibos: [null],
      monto: [null, Validators.required]
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
    this.paycheckForm = this.formBuilder.group({
      sueldoNeto: [null, Validators.required],
      sueldoBruto: [null, Validators.required],
      cuil: [null, Validators.required]
    });
  }

  send() {
    this.waiting = true;
    if (this.newGuarantor) {
      this.prestamoForm.setControl('garante', new FormControl(this.guarantorForm.value));
      this.prestamoForm.setControl('recibos', new FormControl(this.paycheckForm.value));
    }
    this.solicitudPrestamoService.insertSolicitud(this.prestamoForm.value).subscribe(
      result => {
        this.dialogRef.close(true);
      },
      error => console.error(error)
    );
  }

  cancel() {
    this.dialogRef.close(false);
  }

  private _sociosFiltrados(value: string) {
    const filterValue = value.toLowerCase();
    return this.socios.filter(socio => socio.nombre.toLowerCase().indexOf(filterValue) === 0);
  }
}
