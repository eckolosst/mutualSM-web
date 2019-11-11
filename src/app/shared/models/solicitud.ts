import { Socio } from './socio';
import { Garante } from './garante';
import { Recibo } from './recibo-sueldo';

export class Solicitud {
  id: string;
  fechaPeticion: Date;
  fechaAprobacionRechazo: Date;
  resultado: string;
  socio: Socio;
  garante: Garante;
  recibos: [Recibo];
}
