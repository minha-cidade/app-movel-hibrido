import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'educacional.html',
  selector: 'page-educacional'
})
export class EducacionalPage {
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Créditos',
      subTitle: 'Todos os vídeos e textos contidos nesta tela são de autoria do Senado Federal \n\n Fonte: http://www12.senado.leg.br/orcamentofacil',
      buttons: ['OK']
    });
    alert.present();
  }
}