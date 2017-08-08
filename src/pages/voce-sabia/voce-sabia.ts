import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ComparativoVoceSabiaModal } from './comparativo/comparativo';
import { Gastos, AnoValor } from '../../models/gastos.model';

@Component({
  selector: 'page-voce-sabia',
  templateUrl: 'voce-sabia.html'
})
export class VoceSabiaPage {
  private dinheiroDePublicidade: Array<string>;
  private dinheiroDePassagens: Array<string>;
  private randomIndex: number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.randomIndex = Math.floor(3 * Math.random());
    // 43783237.99
    this.dinheiroDePublicidade = [
      "Com esse valor daria para comprar 1250 carros populares no valor de 35 mil reais cada",
      "Com esse valor daria para comprar 729 casas populares no valor de 60 mil reais cada",
      "Com esse valor daria para comprar 8 escolas (com 20 salas) no valor de 5,2 milhões de reais cada"
    ];
    // 13.966.272,84
    this.dinheiroDePassagens = [
      "Com esse valor daria para comprar 2 escolas (com 20 salas) no valor de 5,2 milhões de reais cada",
      "Com esse valor daria para comprar aproximadamente 35 mil cestas básicas no valor de 400 reais cada",
      "Com esse valor daria para comprar aproximadamente 465 mil livros didáticos no valor de 30 reais cada"
    ];
  }

  detalhesPublicidade() {
    let anosValores = new Array<AnoValor>();

    anosValores.push(new AnoValor(2014, 17510609.73));
    anosValores.push(new AnoValor(2015, 16573704.74));
    anosValores.push(new AnoValor(2016, 5139790.74));
    anosValores.push(new AnoValor(2017, 4559132.78));

    let modal = this.modalCtrl.create(ComparativoVoceSabiaModal, { gastos: new Gastos('Gastos Publicidade', anosValores, '#00b0ff') });
    modal.present();
  }

  detalhesDiariasPassagens() {
    let anosValores = new Array<AnoValor>();

    anosValores.push(new AnoValor(2013, 2123516.64));
    anosValores.push(new AnoValor(2014, 6092879.05));
    anosValores.push(new AnoValor(2015, 3357845.69));
    anosValores.push(new AnoValor(2016, 2392031.46));

    let modal = this.modalCtrl.create(ComparativoVoceSabiaModal, { gastos: new Gastos('Gastos Diárias e Passagens', anosValores, '#FFB300') });
    modal.present();
  }

}
