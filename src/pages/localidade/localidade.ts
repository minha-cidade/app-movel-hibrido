import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'localidade.html',
  selector: 'page-localidade'
})
export class LocalidadePage {
  estado: string;
  cidade: string;

  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  pushHomePage() {
    if(this.estado=="paraiba" && this.cidade=="joao-pessoa") {
      this.navCtrl.setRoot(HomePage);
      this.storage.set('localidade-done', true);
    }
  }
}
