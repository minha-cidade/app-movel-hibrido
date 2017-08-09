import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from 'ionic-angular';

import { ReclamacaoModal } from './reclamacao/reclamacao';
import { InformacaoReclameAquiModal } from './informacoes/informacoes';
import { PopoverPage } from '../popover/popover';

@Component({
  templateUrl: 'reclame-aqui.html',
  selector: 'page-reclame-aqui'
})
export class ReclameAquiPage {
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {

  }

  showCompose() {
    let modal = this.modalCtrl.create(ReclamacaoModal);
    modal.present();
  }

  showAlert() {
    let modal = this.modalCtrl.create(InformacaoReclameAquiModal);
    modal.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
    });
  }
}
