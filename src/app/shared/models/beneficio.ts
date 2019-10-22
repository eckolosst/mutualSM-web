import { Garante } from './garante';

import { Socio } from './socio';
import { EstadoBeneficio } from './estado-beneficio';

export class Beneficio {
  id: string;
  numero: string;
  socio: Socio;
  estados: [EstadoBeneficio];
  garante: Garante;
}
