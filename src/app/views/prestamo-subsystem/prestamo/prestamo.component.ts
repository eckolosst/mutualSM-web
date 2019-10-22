import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PrestamoService } from 'src/app/shared/services/prestamo.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';

const columnas = [
  { prop: 'numero' },
  { name: 'Socio' },
  { name: 'EstadoBeneficio' },
  { name: 'Garante' },
  { name: 'Monto' }
];

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.scss']
})
export class PrestamoComponent implements OnInit {
  public rows;
  public columns;
  public temp;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  constructor(private prestamoService: PrestamoService) {
    this.rows = [];
    this.columns = columnas;
    this.temp = [];
  }

  ngOnInit() {
    this.temp = [...this.prestamoService.getPrestamos()];
    this.rows = this.prestamoService.getPrestamos();
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
