import { Injectable } from '@angular/core';
import { Loteo } from '../models/loteo';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoteoService {
  public url: string;

  constructor(private http: HttpClient) {
    this.url = environment.url;
  }

  getHardCodedLoteos() {
    return [
      {
        nombre: 'Cerezos 1',    
        domicilio: '95 Continental Way',
        cantidad:2,
        terrenos:['1,2']
  
      },
      {
        nombre: 'Chocon',
        domicilio: '4 Lakewood Gardens Crossing',
        cantidad:2,
        terrenos:['1,2']
      },
      {
      
        nombre: 'Plottier 2',
        
        domicilio: '8 Arkansas Plaza',
        cantidad:2,
        terrenos:['1,2']
   
      },
      {
      
        nombre: 'Olivos',
 
        domicilio: '9358 Bellgrove Parkway',
        cantidad:2,
        terrenos:['1,2']
    
      },
      {
   
        nombre: 'Rincon club',
   
        domicilio: '7824 Bonner Alley',
        cantidad:2,
        terrenos:['1,2']
      
      },
      {
      
        nombre: 'Hogar',
     
       
        domicilio: '7 Talmadge Terrace',
        cantidad:2,
        terrenos:['1,2']
  
      },
      {
     
        nombre: 'Cello',
       
        domicilio: '769 Londonderry Plaza',
        cantidad:2,
        terrenos:['1,2']
      },
      {
   
        nombre: 'Puente',
    
        domicilio: '9724 Grim Plaza',
        cantidad:2,
        terrenos:['1,2']
    
      },
      {

        nombre: 'Valle',


        domicilio: '005 Thierer Plaza',
        cantidad:2,
        terrenos:['1,2']

      },
      {

        nombre: 'Uvita',
 
  
        domicilio: '87245 Iowa Street',
        cantidad:2,
        terrenos:['1,2']
      
      },
      {
     
        nombre: 'Altos Comahues',
      
        domicilio: '16285 Express Alley',
        cantidad:2,
        terrenos:['1,2']

      },
      
    ];
  }

  getLoteos() {
    return this.http.get<[Loteo]>(`${this.url}loteo`);
  }
}
