import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, PopoverController, LoadingController } from 'ionic-angular';

import * as numeral from 'numeral';

import { GastometroService } from '../../services/gastometro.service';
import { Gastometro } from '../../models/gastometro.model';
import { GastosModal } from './gastos/gastos';
import { PopoverPage } from '../popover/popover';

@Component({
  templateUrl: 'gastometro.html',
  selector: 'page-gastometro'
})
export class GastometroPage implements OnInit {
  gastometros: Array<{ nome: string, valor: number, icone: string, dados: Array<Gastometro>, color: string,  bgcolor: string }>;
  dateHora: string;
  dateMinutos: string;
  dateSegundos: string;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
              public alertCtrl: AlertController, public popoverCtrl: PopoverController, public gastometroService: GastometroService, public loadingCtrl: LoadingController) {
    let date = new Date();
    this.dateHora = date.getHours().toString();
    this.dateMinutos = date.getMinutes().toString();
    this.dateSegundos = date.getSeconds().toString();

    if(date.getSeconds() < 10) {
      this.dateSegundos = '0' + this.dateSegundos;
    }
    if(date.getMinutes() < 10) {
      this.dateMinutos = '0' + this.dateMinutos;
    }
    if(date.getHours() < 10) {
      this.dateHora = '0' + this.dateHora;
    }
  }

  ngOnInit() {
    this.gastometros = [
      { nome: 'Geral', valor: 0, icone: 'timer', dados: null, color: '#fff', bgcolor: '#00b0ff'},
      { nome: 'Saúde', valor:0, icone: 'medkit', dados: null, color: '#213A41', bgcolor:'#fff'},
      { nome: 'Educação', valor: 0, icone: 'bookmarks', dados: null, color: '#213A41', bgcolor:'#fff'},
      { nome: 'Previdência Social', valor: 0, icone: 'body', dados: null, color: '#213A41', bgcolor:'#fff'},
      { nome: 'Administração', valor: 0, icone: 'person', dados: null, color: '#213A41', bgcolor:'#fff'},
      { nome: 'Urbanismo', valor: 0, icone: 'home', dados: null, color: '#213A41', bgcolor:'#fff'},
      { nome: 'Transporte', valor: 0, icone: 'train', dados: null, color: '#213A41', bgcolor:'#fff'},
      { nome: 'Cultura', valor: 0, icone: 'happy', dados: null, color: '#213A41', bgcolor:'#fff'},
      { nome: 'Segurança', valor: 0, icone: 'md-hand', dados: null, color: '#213A41', bgcolor:'#fff'},
      { nome: 'Ciência e Tecnologia', valor: 0, icone: 'flask', dados: null, color: '#213A41', bgcolor:'#fff'}
    ];
    this.inicializaGastometros();
  }

  inicializaGastometros() {
    // subscribe laco de repeticao na funciona como esperado
    this.gastometroService.getGastometroPorArea('saude').subscribe(data => {this.gastometros[1].dados = data.gastometro.sort(this.callbackSort);  this.gastometros[1].valor = this.gastometros[1].dados[0].pago; this.gastometros[0].valor += this.gastometros[1].dados[0].pago;});

    this.gastometroService.getGastometroPorArea('educacao').subscribe(data => {this.gastometros[2].dados = data.gastometro.sort(this.callbackSort);  this.gastometros[2].valor = this.gastometros[2].dados[0].pago; this.gastometros[0].valor += this.gastometros[2].dados[0].pago;});

    this.gastometroService.getGastometroPorArea('previdencia-social').subscribe(data => {this.gastometros[3].dados = data.gastometro.sort(this.callbackSort);  this.gastometros[3].valor = this.gastometros[3].dados[0].pago; this.gastometros[0].valor += this.gastometros[3].dados[0].pago;});

    this.gastometroService.getGastometroPorArea('administracao').subscribe(data => {this.gastometros[4].dados = data.gastometro.sort(this.callbackSort);  this.gastometros[4].valor = this.gastometros[4].dados[0].pago; this.gastometros[0].valor += this.gastometros[4].dados[0].pago;});

    this.gastometroService.getGastometroPorArea('urbanismo').subscribe(data => {this.gastometros[5].dados = data.gastometro.sort(this.callbackSort);  this.gastometros[5].valor = this.gastometros[5].dados[0].pago; this.gastometros[0].valor += this.gastometros[5].dados[0].pago;});

    this.gastometroService.getGastometroPorArea('transporte').subscribe(data =>{this.gastometros[6].dados = data.gastometro.sort(this.callbackSort);  this.gastometros[6].valor = this.gastometros[6].dados[0].pago; this.gastometros[0].valor += this.gastometros[6].dados[0].pago;});

    this.gastometroService.getGastometroPorArea('cultura').subscribe(data => {this.gastometros[7].dados = data.gastometro.sort(this.callbackSort);  this.gastometros[7].valor = this.gastometros[7].dados[0].pago; this.gastometros[0].valor += this.gastometros[7].dados[0].pago;});

    this.gastometroService.getGastometroPorArea('seguranca-publica').subscribe(data => {this.gastometros[8].dados = data.gastometro.sort(this.callbackSort);  this.gastometros[8].valor = this.gastometros[8].dados[0].pago; this.gastometros[0].valor += this.gastometros[8].dados[0].pago;});

    this.gastometroService.getGastometroPorArea('ciencia-e-tecnologia').subscribe(data => {this.gastometros[9].dados = data.gastometro.sort(this.callbackSort);  this.gastometros[9].valor = this.gastometros[9].dados[0].pago; this.gastometros[0].valor += this.gastometros[9].dados[0].pago;});
  }

  showModalGastos(gast) {
    if(gast.nome=='Geral'){
      return;
    }
    let modal = this.modalCtrl.create(GastosModal, { dados: gast.dados, titulo: gast.nome });
    modal.present();
    this.presentLoading();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sobre',
      subTitle: 'O gastômetro é uma ferramenta que informa o gasto no ano de 2017 feito pela gestão municipal no geral e por áreas',
      buttons: ['OK']
    });
    alert.present();
  }

  formatToCurrency(value: number): String {
    let valor = numeral(value).format('0,0.00').replace(/,/gi, '\.');
    let index = valor.lastIndexOf('.');
    return valor.substr(0, index) + ',' + valor.substr(index + 1);
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde ...",
      duration: 2000
    });
    loader.present();
  }

  callbackSort(a, b) {
    return b.ano-a.ano;
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
    });
  }
}
