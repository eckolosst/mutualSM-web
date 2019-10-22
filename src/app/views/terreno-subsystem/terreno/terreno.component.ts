import { Component, OnInit } from '@angular/core';
import { Terreno } from '../../../shared/models/terreno';


@Component({
  selector: 'app-terreno',
  templateUrl: './terreno.component.html',
  styleUrls: ['./terreno.component.scss'],

})
export class TerrenoComponent implements OnInit {

  constructor() { }


  model: any = {};
  terrenos:Terreno[]=new Array();
  cols: any[];
  selectedTerreno:Terreno;

  ngOnInit() {
    this.getTerrenos();
    this.cols = [
      { field: 'numero', header: 'Numero' },
      { field: 'largo', header: 'Largo' },
      { field: 'frente', header: 'Frente' },
      { field: 'direccion', header: 'Direccion' },
      { field: 'valor', header: 'Valor' },
      { field: 'matricula', header: 'Matricula' },
    ];
  }

  /* numero:number;
  largo:number; 
  frente:number;
  direccion:string;
  valor:number;
  matricula:string;
  estado:Estado_terreno; */

  getTerrenos(){
    let t:Terreno;
    t= new Terreno();
 
    
    for(let i =1;i<10;i++){
     t= new Terreno();
         t.numero=i;
         t.largo=i+20;
         t.frente=i+40;
         t.direccion=i.toString();
         t.valor=i*800;
         t.matricula=i.toString();
 
     this.terrenos.push(t);
    }

  }

}
