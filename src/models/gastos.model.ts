export class AnoValor {
  ano: number;
  valor: number;

  constructor(ano: number, valor: number) {
    this.ano = ano;
    this.valor = valor;
  }
}

export class Gastos {
  titulo: String;
  descricao: Array<AnoValor>;
  color: string;
  
  constructor(titulo: String, descricao: Array<AnoValor>, color: string) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.color = color;
  }
}