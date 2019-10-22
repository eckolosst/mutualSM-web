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
import { SolicitudTerrenoService } from 'src/app/shared/services/solicitud-terreno.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { GaranteService } from 'src/app/shared/services/garante.service';

@Component({
  selector: 'app-form-solicitud-terreno',
  templateUrl: './form-solicitud-terreno.component.html',
  styleUrls: ['./form-solicitud-terreno.component.scss']
})
export class FormSolicitudTerrenoComponent implements OnInit {
  public terrenoForm: FormGroup;
  public guarantorForm: FormGroup;
  public socios: any[];
  public sociosFiltrados: Observable<any[]>;
  public newGuarantor: boolean;
  public sociosCtrl: FormControl;


  constructor(
    public dialogRef: MatDialogRef<FormSolicitudTerrenoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sociosService: SocioService,
    private solicitudTerrenoService: SolicitudTerrenoService,
    private garanteSercice: GaranteService,
    private formBuilder: FormBuilder
  ) {
    this.socios = this.sociosService.getHardCodedSocios();
    this.newGuarantor = false;
    this.sociosFiltrados = this.sociosCtrl.valueChanges.pipe(
      startWith(''),
    //  map(socio => (socio ? this.sociosFiltrados(socio) : this.socios.slice()))
    ); }

  ngOnInit() {
    this.terrenoForm = this.formBuilder.group({
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

}
