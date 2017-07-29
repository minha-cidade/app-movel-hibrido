import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ComparativoVoceSabiaModal } from './comparativo/comparativo';
import { Gastos, AnoValor } from '../../model/gastos.model';

@Component({
  selector: 'page-voce-sabia',
  templateUrl: 'voce-sabia.html'
})
export class VoceSabiaPage {
  private dinheiroDePublicidade;
  private dinheiroDePassagens;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.dinheiroDePublicidade = "Com esse valor daria para comprar cerca 1 e 500 mil livros didáticos de valores aproximadamente 30 reais";
    this.dinheiroDePassagens = "Com esse valor daria para construir 314 casas populares de valor de 62 mil e 500 reais";
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