import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

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
}