import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Chart } from 'chart.js';
import * as numeral from 'numeral';

@Component({
  templateUrl: 'gastos.html',
  selector: 'modal-gastos'
})
export class GastosModal  implements AfterViewInit {
   @ViewChild('lineCanvas') lineCanvas: ElementRef;
   lineChart: any;
   ano: String;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
    this.ano = "2017";
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
        labels: [2009, 2010, 2012, 2013],
        datasets: [{
          data: [1000000, 2000000, 4000000, 61000000],
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