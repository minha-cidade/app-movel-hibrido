import { Component } from '@angular/core';
import { NavController, AlertController, PopoverController } from 'ionic-angular';

import { PopoverPage } from '../popover/popover';

@Component({
  templateUrl: 'educacional.html',
  selector: 'page-educacional'
})
export class EducacionalPage {

  constructor(public popoverCtrl: PopoverController, public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Créditos',
      subTitle: 'Todos os vídeos e textos contidos nesta tela são de autoria do Senado Federal \n\n Fonte: http://www12.senado.leg.br/orcamentofacil',
      buttons: ['OK']
    });
    alert.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
    });
  }
}
