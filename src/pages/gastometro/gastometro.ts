import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';

import * as numeral from 'numeral';

import { GastometroService } from '../../services/gastometro.service';
import { Gastometro } from '../../models/gastometro.model';
import { GastosModal } from './gastos/gastos';

@Component({
  templateUrl: 'gastometro.html',
  selector: 'page-gastometro'
})
export class GastometroPage implements OnInit {
  gastometros: Array<{ nome: string, valor: number, icone: string, dados: Array<Gastometro> }>;
  dateHora: string;
  dateMinutos: string;
  dateSegundos: string;
  index2017: number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
              public alertCtrl: AlertController,  public gastometroService: GastometroService) {
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
    this.index2017 = 4;
    this.gastometros = [
      { nome: 'Geral', valor: 0, icone: 'timer', dados: null},
      { nome: 'Saúde', valor:0, icone: 'medkit', dados: null},
      { nome: 'Educação', valor: 0, icone: 'bookmarks', dados: null},
      { nome: 'Previdência Social', valor: 0, icone: 'body', dados: null},
      { nome: 'Administração', valor: 0, icone: 'person', dados: null},
      { nome: 'Urbanismo', valor: 0, icone: 'home', dados: null},
      { nome: 'Transporte', valor: 0, icone: 'train', dados: null},
      { nome: 'Cultura', valor: 0, icone: 'happy', dados: null},
      { nome: 'Segurança', valor: 0, icone: 'md-hand', dados: null},
      { nome: 'Ciência e Tecnologia', valor: 0, icone: 'flask', dados: null}
    ];
    this.inicializaGastometros();
  }

  inicializaGastometros() {
    // subscribe laco de repeticao na funciona como esperado
    this.gastometroService.getGastometroPorArea('saude').subscribe(data => {this.gastometros[1].dados = data.gastometro ; this.gastometros[1].valor = data.gastometro[this.index2017].pago; this.gastometros[0].valor += data.gastometro[this.index2017].pago;});

    this.gastometroService.getGastometroPorArea('educacao').subscribe(data => {this.gastometros[2].dados = data.gastometro ;this.gastometros[2].valor = data.gastometro[this.index2017].pago; this.gastometros[0].valor += data.gastometro[this.index2017].pago;});

    this.gastometroService.getGastometroPorArea('previdencia-social').subscribe(data => {this.gastometros[3].dados = data.gastometro ;this.gastometros[3].valor = data.gastometro[this.index2017].pago; this.gastometros[0].valor += data.gastometro[this.index2017].pago;});

    this.gastometroService.getGastometroPorArea('administracao').subscribe(data => {this.gastometros[4].dados = data.gastometro ;this.gastometros[4].valor = data.gastometro[this.index2017].pago; this.gastometros[0].valor += data.gastometro[this.index2017].pago;});

    this.gastometroService.getGastometroPorArea('urbanismo').subscribe(data => {this.gastometros[5].dados = data.gastometro ;this.gastometros[5].valor = data.gastometro[this.index2017].pago; this.gastometros[0].valor += data.gastometro[this.index2017].pago;});

    this.gastometroService.getGastometroPorArea('transporte').subscribe(data =>{this.gastometros[6].dados = data.gastometro ; this.gastometros[6].valor = data.gastometro[this.index2017].pago; this.gastometros[0].valor += data.gastometro[this.index2017].pago;});

    this.gastometroService.getGastometroPorArea('cultura').subscribe(data => {this.gastometros[7].dados = data.gastometro ; this.gastometros[7].valor = data.gastometro[this.index2017].pago; this.gastometros[0].valor += data.gastometro[this.index2017].pago;});

    this.gastometroService.getGastometroPorArea('seguranca-publica').subscribe(data => {this.gastometros[8].dados = data.gastometro ; this.gastometros[8].valor = data.gastometro[this.index2017].pago; this.gastometros[0].valor += data.gastometro[this.index2017].pago;});

    this.gastometroService.getGastometroPorArea('ciencia-e-tecnologia').subscribe(data => {this.gastometros[9].dados = data.gastometro ; this.gastometros[9].valor = data.gastometro[this.index2017].pago; this.gastometros[0].valor += data.gastometro[this.index2017].pago;});
  }

  showModalGastos(gast) {
    let modal = this.modalCtrl.create(GastosModal, { dados: gast.dados, titulo: gast.nome });
    modal.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sobre',
      subTitle: 'Gastômetro é uma ferramenta para o cidadão acompanhar os gastos de sua cidade de forma simples e rápida',
      buttons: ['OK']
    });
    alert.present();
  }

  formatToCurrency(value: number): String {
    let valor = numeral(value).format('0,0.00').replace(/,/gi, '\.');
    let index = valor.lastIndexOf('.');
    return valor.substr(0, index) + ',' + valor.substr(index + 1);
  }
}
