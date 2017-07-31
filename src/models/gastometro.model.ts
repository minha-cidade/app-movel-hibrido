export class Gastometro {
  ano: number;
  idCidade: string;
  idEstado: string;
  idArea: string;
  cidade: string;
  estado: string;
  area: string;
  pago: number;
  liquidado: number;
  empenhado: number;
  topVinte: Array<{ favorecido: string, pagante: string, valor: number }>;
}
