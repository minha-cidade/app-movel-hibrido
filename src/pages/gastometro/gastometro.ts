import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';

import * as numeral from 'numeral';

import { GastosModal } from './gastos/gastos';

@Component({
  templateUrl: 'gastometro.html',
  selector: 'page-gastometro'
})
export class GastometroPage {
  gastometros: Array<{ nome: String, valor: number, icone: string }>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
    this.gastometros = [
      { nome: 'Geral', valor: 43783237.99, icone: 'timer'},
      { nome: 'Saúde', valor: 43783237.99, icone: 'medkit'},
      { nome: 'Educação', valor: 43783237.99, icone: 'bookmarks'},
      { nome: 'Segurança', valor: 43783237.99, icone: 'eye'},
      { nome: 'Administração', valor: 43783237.99, icone: 'person'},
      { nome: 'Previdência Social', valor: 43783237.99, icone: 'people'},
      { nome: 'Urbanismo', valor: 43783237.99, icone: 'cog'},
      { nome: 'Transporte', valor: 43783237.99, icone: 'bus'},
      { nome: 'Cultura', valor: 43783237.99, icone: 'happy'},
      { nome: 'Ciência e Tecnologia', valor: 43783237.99, icone: 'flask'},
      { nome: 'Agricultura', valor: 43783237.99, icone: 'flower'}
    ];
  }

  showModalGastos() {
    let modal = this.modalCtrl.create(GastosModal);
    modal.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sobre',
      subTitle: 'Gastômetro é uma ferramenta para o cidadão acompanhar os gastos de sua cidade de forma simples e rápida',
      buttons: ['OK']
    });
    alert.present();
  }

  formatToCurrency(value: number): String {
    let valor = numeral(value).format('0,0.00').replace(/,/gi, '\.');
    let index = valor.lastIndexOf('.');
    return valor.substr(0, index) + ',' + valor.substr(index + 1);
  }
}
