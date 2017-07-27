import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ReclamacaoModal } from './reclamacao/reclamacao';

@Component({
  templateUrl: 'reclame-aqui.html',
  selector: 'page-reclame-aqui'
})
export class ReclameAquiPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  showCompose() {
    let modal = this.modalCtrl.create(ReclamacaoModal);
    modal.present();
  }
}