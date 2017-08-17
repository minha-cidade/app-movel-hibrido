import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Chart } from 'chart.js';
import * as numeral from 'numeral';

import { Gastometro } from '../../../models/gastometro.model';

@Component({
  templateUrl: 'geral.html',
  selector: 'modal-geral'
})
export class GastosGeralModal  implements AfterViewInit {
   @ViewChild('pieCanvas') pieCanvas: ElementRef;
   pieChart: any;
   ano: string;
   dados: Array<Gastometro>;
   indexAno: Map<string, number>;
   areasTopVinte: any;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.ano = '2017';
    this.indexAno = new Map();
    // ano => index
    this.indexAno.set('2017', 0);
    this.indexAno.set('2016', 1);
    this.indexAno.set('2015', 2);
    this.indexAno.set('2014', 3);
    this.indexAno.set('2013', 4);
    this.indexAno.set('2012', 5);
    this.indexAno.set('2011', 6);
    this.indexAno.set('2010', 7);
    this.indexAno.set('2009', 8);

    this.dados = navParams.get('dados');
    this.topAreasGastos();
  }

  close() {
    this.viewCtrl.dismiss();
  }

  updateChart() {
    this.pieChart.destroy();
    this.pieCanvas.nativeElement.height = 270;
    this.inflateChart();
    this.topAreasGastos();
  }

  valorGeral(): number {
    let sum = 0;
    for(var i = 0 ; i < 9 ; ++i) {
      sum += this.dados[i][this.indexAno.get(this.ano)].pago;
    }
    return sum;
  }

  topAreasGastos() {
    this.areasTopVinte = [];

    for(var i = 0 ; i < 9 ; ++i) {
      this.areasTopVinte.push(this.dados[i][this.indexAno.get(this.ano)]);
    }
    this.areasTopVinte = this.areasTopVinte.sort(this.callbackSort);
  }

  callbackSort(a, b) {
    return b.pago-a.pago;
  }

  ngAfterViewInit() {
    Chart.defaults.global.legend.position = 'bottom';
    Chart.defaults.global.legend.labels.usePointStyle = true;
    this.inflateChart();
  }

  private inflateChart() {
    this.pieChart = new Chart(this.pieCanvas.nativeElement, {
      type: 'pie',
      data: {
        labels: [this.upperCase(this.dados[0][0].area), this.upperCase(this.dados[1][0].area), this.upperCase(this.dados[2][0].area), this.upperCase(this.dados[3][0].area), this.upperCase(this.dados[4][0].area),
                 this.upperCase(this.dados[5][0].area), this.upperCase(this.dados[6][0].area), this.upperCase(this.dados[7][0].area), this.upperCase(this.dados[8][0].area)],
        datasets: [{
          data: [this.dados[0][this.indexAno.get(this.ano)].pago, this.dados[1][this.indexAno.get(this.ano)].pago, this.dados[2][this.indexAno.get(this.ano)].pago,
                this.dados[3][this.indexAno.get(this.ano)].pago, this.dados[4][this.indexAno.get(this.ano)].pago, this.dados[5][this.indexAno.get(this.ano)].pago, this.dados[6][this.indexAno.get(this.ano)].pago,
                 this.dados[7][this.indexAno.get(this.ano)].pago, this.dados[8][this.indexAno.get(this.ano)].pago],
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(233, 30, 99, 0.6)',
                            'rgba(156, 39, 176, 0.6)', 'rgba(205, 220, 57, 0.6)'],
          hoverBackgroundColor: ['rgba(255,99,132,1)','rgba(54, 162, 235, 1)',
					                        'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
                                  'rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)', 'rgba(233, 30, 99, 1)',
                                  'rgba(156, 39, 176, 1)', 'rgba(205, 220, 57, 1)']
        }]
      }
    });
  }

  formatToCurrency(value: number): String {
    let valor = numeral(value).format('0,0.00').replace(/,/gi, '\.');
    let index = valor.lastIndexOf('.');
    return valor.substr(0, index) + ',' + valor.substr(index + 1);
  }

  upperCase(val: string): string {
    return val[0].toUpperCase() + val.substr(1, val.length);
  }
}
