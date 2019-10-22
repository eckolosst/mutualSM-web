import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { SolicitudTerreno } from '../models/solicitud-terreno';

@Injectable({
  providedIn: 'root'
})
export class SolicitudTerrenoService {
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
