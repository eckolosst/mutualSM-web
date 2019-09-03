import { Component, OnInit } from '@angular/core';
import { PrestamoService } from 'src/app/shared/services/prestamo.service';

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

  constructor(private prestamoService: PrestamoService) {
    this.rows = [];
    this.columns = columnas;
    this.temp = [];
  }

  ngOnInit() {
    this.rows = this.prestamoService.getPrestamos();
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(d => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    // this.table.offset = 0;
  }
}
