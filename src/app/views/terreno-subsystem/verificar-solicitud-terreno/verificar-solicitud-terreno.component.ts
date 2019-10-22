
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { SolicitudTerreno } from 'src/app/shared/models/solicitud-terreno';


@Component({
  selector: 'app-verificar-solicitud-terreno',
  templateUrl: './verificar-solicitud-terreno.component.html',
  styleUrls: ['./verificar-solicitud-terreno.component.css'],
})
export class VerificarSolicitudTerrenoComponent implements OnInit {

  constructor() { }

  model: any = {};

  solicitudes:SolicitudTerreno[]=new Array();
  colsS:any[];
  selectedSolicitud:SolicitudTerreno= new SolicitudTerreno();
  

  ngOnInit() {

    this.getSolicitudes();
    this.colsS = [
      { field: 'numero', header: 'numero' },
      { field: 'fecha_peticion', header: 'Fecha Peticion' },
      { field: 'fecha_aprobacion_rechazo', header: 'Aprobacion/rechazo' },
      { field: 'resultado', header: 'Resultado' },
      { field: 'numeroSocio', header: 'Numero Socio' },
      { field: 'numeroGarante', header: 'Numero Garante' },
      { field: 'nombreLoteo', header: 'Nombre Loteo' },
    
    ];
  }
  getSolicitudes() {
    let s:SolicitudTerreno=new SolicitudTerreno();
    s.numero = 1;;
    s.fechaPeticion = new Date();
    //s.fecha_aprobacion_rechazo = new Date();
    s.resultado = "No evaluado";
    s.numeroSocio = 6;
    //s.Garante = 1;
 //   s.nombreLoteo = "3";
    this.solicitudes.push(s);
  }

  aceptar(){
    Swal.fire({
      title: 'Exito!',
      text: 'Se aprobo la solicitud ',
      type: 'success',
      showConfirmButton: false,
      timer: 3200
    });
    this.selectedSolicitud.resultado="Aprobado";
    this.selectedSolicitud.fechaAprobacionRechazo=new Date();
  }
  
  rechazar(){
   
    Swal.fire({
      title: 'Ok!',
      text: 'Se rechazo la solicitud',
      type: 'error',
      showConfirmButton: false,
      timer: 3200
    });
    this.selectedSolicitud.resultado="Rechazado";
    this.selectedSolicitud.fechaAprobacionRechazo=new Date();

  }

}
