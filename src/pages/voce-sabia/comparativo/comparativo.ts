import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import * as numeral from 'numeral';
import { Chart } from 'chart.js';

import { Gastos } from '../../../models/gastos.model';

@Component({
  selector: 'modal-comparativo-voce-sabia',
  templateUrl: 'comparativo.html'
})
export class ComparativoVoceSabiaModal implements AfterViewInit {
   @ViewChild('lineCanvas') lineCanvas: ElementRef;
   lineChart: any;
   gastos: Gastos;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.gastos = navParams.get('gastos');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  ngAfterViewInit() {
    this.inflateChart();
  }

  private inflateChart() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: [this.gastos.descricao[0].ano, this.gastos.descricao[1].ano, this.gastos.descricao[2].ano, this.gastos.descricao[3].ano],
        datasets: [{
          data: [this.gastos.descricao[0].valor, this.gastos.descricao[1].valor, this.gastos.descricao[2].valor, this.gastos.descricao[3].valor],
          backgroundColor: this.gastos.color,
          borderColor: this.gastos.color,
					fill: false
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
                    stepSize : 5000000,
                    beginAtZero: true,
                    callback: function(label, index, labels) {
                        if(label==0)
                          return 0+',00';
                        else if(label==1000000)
                          return 1 + " milhão";
                        else
                          return label/1000000+' milhões';
                    }
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
