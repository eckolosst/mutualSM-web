import { Persona } from './persona';
import { Cuota } from './cuota';
import { Periodo } from './periodo';

export class Socio extends Persona {
  numeroSocio: string;
  cuotas: [Cuota];
  // periodoAfiliacion: Periodo;
  inicioPeriodo: Date;
  finPeriodo: Date;
}
