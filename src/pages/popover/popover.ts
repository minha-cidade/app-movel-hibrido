import { Component } from '@angular/core';
import { ViewController, App } from 'ionic-angular';

import { LocalidadePage } from '../localidade/localidade';

@Component({
  template: `<button ion-item (click)="showLocalidade()">Mudar Localidade</button>`
})
export class PopoverPage {
  constructor(public app: App, public viewCtrl: ViewController) {}

  showLocalidade() {
    this.viewCtrl.dismiss().then(() => {
        this.app.getRootNav().push(LocalidadePage);
    });
  }
}
