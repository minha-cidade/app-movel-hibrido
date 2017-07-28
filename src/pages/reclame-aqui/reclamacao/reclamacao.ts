import { Component } from '@angular/core';
import { AlertController, ViewController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'modal-reclamacao',
  templateUrl: 'reclamacao.html'
})
export class ReclamacaoModal {
  body: string;
  categoria: string;

  constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, private emailComposer: EmailComposer) {
  }
  
  close() {
    this.viewCtrl.dismiss();
  }

  send() { 
    let email = {
      to: 'marcos.alves@cc.ci.ufpb.br',
      subject: '[APP MINHA CIDADE] Voz do Cidadão!',
      body: "Categorias do Problema relatado abaixo: " + this.categoria + "\n\n" + this.body,
      isHtml: true
    };
    // Send a text message using default options
    this.emailComposer.open(email);  
  }
}