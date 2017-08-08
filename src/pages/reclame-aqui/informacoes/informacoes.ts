import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-informacoes',
  templateUrl: 'informacoes.html'
})
export class InformacaoReclameAquiModal {

  constructor(public viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
