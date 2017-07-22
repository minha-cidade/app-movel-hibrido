export class AnoValor {
  ano: number;
  valor: number;

  constructor(ano: number, valor: number) {
    this.ano = ano;
    this.valor = valor;
  }
}

export class VoceSabiaModel {
  titulo: String;
  descricao: Array<AnoValor>;
  color: String;
  
  constructor(titulo: String, descricao: Array<AnoValor>, color: String) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.color = color;
  }
}