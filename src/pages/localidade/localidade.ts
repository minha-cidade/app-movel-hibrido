import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'localidade.html',
  selector: 'page-localidade'
})
export class LocalidadePage {
  estado: string;
  cidade: string;

  constructor(public navCtrl: NavController) {
  }

  pushHomePage() {
    this.navCtrl.setRoot(HomePage);
  }
}
