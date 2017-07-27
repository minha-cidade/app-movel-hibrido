import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-reclamacao',
  templateUrl: 'reclamacao.html'
})
export class ReclamacaoModal {
  constructor(public viewCtrl: ViewController) {
  }
  
  close() {
    this.viewCtrl.dismiss();
  }
}