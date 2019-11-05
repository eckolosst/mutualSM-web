import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Terreno } from '../models/terreno';
import { SolicitudTerreno } from "../models/solicitud-terreno";

@Injectable({
  providedIn: 'root'
})
export class SolicitudTerrenoService {
  static getHardCodedSolicitudesTerrenos(): any[] {
    return [
      {
        numero: '1',    
        socio: '223334',
        fechaPeticion:new Date(),
        garante:'223332',
        terreno:'0092',
        loteo:'chocon',
        apellidoSocio:'perez',
        nombreSocio:'lucas',
        apellidoGarante:'chiarotto',
        nombreGarante:'agustin',
        causaRechazo:'no le da la plata'
  
      },
      {
        numero: '2',    
        socio: '223334',
        fechaPeticion:new Date(),
        garante:'223332',
        terreno:'0092',
        loteo:'chocon',
        apellidoSocio:'perez',
        nombreSocio:'lucas',
        apellidoGarante:'chiarotto',
        nombreGarante:'agustin',
        causaRechazo:'no le da la plata'
  
      },
  
      
    ];
  }
  public url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.url;
  }

  insertSolicitud(data: SolicitudTerreno) {
    return this.httpClient.post<SolicitudTerreno>(`${this.url}solicitudTerreno`, data);
  }

  getSolicitudes() {
    return this.httpClient.get<[SolicitudTerreno]>(`${this.url}solicitudTerreno`);
  }

  getSolicitudesByState(estado: string) {
    return this.httpClient.get<[SolicitudTerreno]>(`${this.url}solicitudTerreno?resulltado=${estado}`);
  }





}
