import { Injectable } from '@angular/core';
import { Socio } from '../models/socio';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getSocios() {
    return this.http.get<[Socio]>(`${this.url}socio`);
  }
}
