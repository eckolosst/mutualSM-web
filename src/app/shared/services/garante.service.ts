import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Garante } from '../models/garante';

@Injectable({
  providedIn: 'root'
})
export class GaranteService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  addGarante(data: Garante) {
    return this.http.post<Garante>(`${this.url}garante`, data);
  }
}
