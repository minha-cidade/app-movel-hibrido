import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'sobre.html',
  selector: 'modal-sobre'
})
export class SobreModal {
  desenvolvedores: Array<{nome: string, cargo: string}>;

  constructor(public viewCtrl: ViewController) {
    this.desenvolvedores = [
      {nome: 'Marcos Alves', cargo: 'Desenvolvedor front-end / Mobile'},
      {nome: 'Elcius Ferreira', cargo: 'Desenvolvedor back-end'},
      {nome: 'Kevin Fernandes', cargo: 'Desenvolvedor back-end'},
      {nome: 'Victor Franco', cargo: 'Desenvolvedor back-end'},
      {nome: 'Abraão Allysson', cargo: 'Desenvolvedor back-end'},
      {nome: 'Josué Paiva', cargo: 'Desenvolvedor front-end'},
      {nome: 'Renê Alves', cargo: 'Desenvolvedor front-end / Designer'}
    ]
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
