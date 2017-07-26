import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'sobre.html',
  selector: 'modal-sobre'
})
export class SobreModal {

  constructor(public viewCtrl: ViewController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }
}