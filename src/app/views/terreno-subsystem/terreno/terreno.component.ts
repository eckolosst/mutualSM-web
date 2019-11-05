import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SolicitudTerrenoService } from 'src/app/shared/services/solicitud-terreno.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { TerrenoService } from "src/app/shared/services/terreno.service";
const columnas = [
  { prop: 'numero' },
  { name: 'Socio' },
  { name: 'EstadoBeneficio' },
  { name: 'Garante' },
  { name: 'Terreno' }
];

@Component({
  selector: 'app-terreno',
  templateUrl: './terreno.component.html',
  styleUrls: ['./terreno.component.scss']
})
export class TerrenoComponent implements OnInit {
  public rows;
  public columns;
  public temp;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(private terrenoService: TerrenoService) {
    this.rows = [];
    this.columns = columnas;
    this.temp = [];
  }

  ngOnInit() {
    this.temp = [...this.terrenoService.getTerrenos()];
    this.rows = this.terrenoService.getTerrenos();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(d => {
      // console.log(d);      return d.estadoBeneficio.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
}
