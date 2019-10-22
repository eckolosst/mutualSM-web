import { Terreno } from './terreno';
import { Contrato } from './contrato';
import { Beneficio } from './beneficio';

export class Venta extends Beneficio {
  pagoInicial: number;
  terreno: Terreno;
  contrato: Contrato;
}
