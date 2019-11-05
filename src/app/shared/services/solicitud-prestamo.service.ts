import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SolicitudPrestamo } from '../models/solicitud-prestamo';

@Injectable({
  providedIn: 'root'
})
export class SolicitudPrestamoService {
  public url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.url;
  }

  insertSolicitud(data: SolicitudPrestamo) {
    return this.httpClient.post<SolicitudPrestamo>(`${this.url}solicitudPrestamo`, data);
  }

  getSolicitudes() {
    return this.httpClient.get<[SolicitudPrestamo]>(`${this.url}solicitudPrestamo`);
  }

  getSolicitudesByState(estado: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.get<[SolicitudPrestamo]>(`${this.url}solicitudprestamo?resultado=${estado}`, { headers });
  }
}
