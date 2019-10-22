import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../src/environments/environment';
import { Terreno } from '../models/terreno';

@Injectable({
  providedIn: 'root'
})
export class SolicitudTerrenoService {
  public url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.url;
  }

  insertTerreno(data: Terreno) {
    return this.httpClient.post<Terreno>(`${this.url}solicitudTerreno`, data);
  }

  getTerrenos() {
    return this.httpClient.get<[Terreno]>(`${this.url}solicitudTerreno`);
  }

/*   getSolicitudesByState(estado: string) {
    return this.httpClient.get<[SolicitudTerreno]>(`${this.url}solicitudTerreno?resulltado=${estado}`);
  } */
}
