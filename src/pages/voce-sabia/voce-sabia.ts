import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ComparativoVoceSabiaModal } from './comparativo/comparativo';
import { VoceSabiaModel, AnoValor } from '../../model/voce-sabia.model';

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

    anosValores.push(new AnoValor(2014, 1751060973));
    anosValores.push(new AnoValor(2015, 1657370474));
    anosValores.push(new AnoValor(2016, 513979074));
    anosValores.push(new AnoValor(2017, 455913278));
    
    let modal = this.modalCtrl.create(ComparativoVoceSabiaModal, { gastos: new VoceSabiaModel('Publicidade', anosValores) });
    modal.present();
  }


}