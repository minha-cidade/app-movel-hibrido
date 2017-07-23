import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as numeral from 'numeral';

@Component({
  templateUrl: 'gastometro.html',
  selector: 'page-gastometro'
})
export class GastometroPage {
  gastometroGeral: number;

  constructor(public navCtrl: NavController) {
    this.gastometroGeral =  2578838120.02;
  }


  formatToCurrency(value: number): String {
    let valor = numeral(value).format('0,0.00').replace(/,/gi, '\.');
    let index = valor.lastIndexOf('.');
    return valor.substr(0, index) + ',' + valor.substr(index + 1);
  }
}