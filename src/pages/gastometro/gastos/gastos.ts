import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Chart } from 'chart.js';
import * as numeral from 'numeral';

import { Gastometro } from '../../../models/gastometro.model';

@Component({
  templateUrl: 'gastos.html',
  selector: 'modal-gastos'
})
export class GastosModal  implements AfterViewInit {
   @ViewChild('lineCanvas') lineCanvas: ElementRef;
   lineChart: any;
   ano: string;
   titulo: string;
   dados: Array<Gastometro>;
   indexAno: Map<string, number>;

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


    this.titulo = navParams.get('titulo');
    this.dados = navParams.get('dados');
  }

  close() {
    this.viewCtrl.dismiss();
  }

   ngAfterViewInit() {
    this.inflateChart();
  }

  private inflateChart() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        datasets: [{
          data: [this.dados[this.indexAno.get('2009')].pago, this.dados[this.indexAno.get('2010')].pago,
                 this.dados[this.indexAno.get('2011')].pago, this.dados[this.indexAno.get('2012')].pago,
                 this.dados[this.indexAno.get('2013')].pago, this.dados[this.indexAno.get('2014')].pago,
                 this.dados[this.indexAno.get('2015')].pago, this.dados[this.indexAno.get('2016')].pago,
                 this.dados[this.indexAno.get('2017')].pago],
          backgroundColor: 'rgb(0, 176, 255)',
          borderColor: 'rgb(0, 176, 255)'
        }]
      },
			options: {
        legend: {
          display: false
        },
      	scales: {
          xAxes: [{
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            },
					}],
					yAxes: [{
						 ticks: {
                    callback: function(label, index, labels) {
                        if(label==0)
                          return 0+',00';
                        else if(label==1000000)
                          return 1 + " milhão";
                        else
                          return label/1000000+' milhões';
                    },
                    beginAtZero: true
                },
                scaleLabel: {
                    // display: true,
                    // labelString: '1k = 1000'
                },
            gridLines: {
              color: "rgba(0, 0, 0, 0)",
            }
					}]
				}
			}
    });
  }


  formatToCurrency(value: number): String {
    let valor = numeral(value).format('0,0.00').replace(/,/gi, '\.');
    let index = valor.lastIndexOf('.');
    return valor.substr(0, index) + ',' + valor.substr(index + 1);
  }
}
