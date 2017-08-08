import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ReclamacaoModal } from './reclamacao/reclamacao';
import { InformacaoReclameAquiModal } from './informacoes/informacoes';

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

  showAlert() {
    let modal = this.modalCtrl.create(InformacaoReclameAquiModal);
    modal.present();
  }
}
