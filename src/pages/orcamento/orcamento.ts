import { Component, ElementRef, ViewChild } from '@angular/core'; 
import { NavController } from 'ionic-angular';

import * as numeral from 'numeral';
import { Chart } from 'chart.js';

import { Despesa } from '../../model/despesa.model';

@Component({
  selector: 'page-orcamento',
  templateUrl: 'orcamento.html'
})
export class OrcamentoPage {
  @ViewChild('pieCanvas') pieCanvas: ElementRef;
  pieChart: any;
  orcamentoPrevisto: number;
  despesas: Array<Despesa>;

  constructor(public navCtrl: NavController) {
    this.orcamentoPrevisto =  2578838120.02;
    this.despesas = [ { nome: "Administração", valor: 265920759 },
                      { nome: "Segurança Pública", valor: 24662937}];
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
        labels: ["Saúde", "Educação", "Segurança", "Cultura", "Publicidade", "Esporte"], 
        datasets: [{
          data: [30000, 40000, 100000, 2000, 800, 20000],
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
          hoverBackgroundColor: [	'rgba(255,99,132,1)','rgba(54, 162, 235, 1)',
					                        'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
					                        'rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)']
        }]
      }
    });
  }

  formatToCurrency(value: number): String {
    let valor = numeral(value).format('0,0.00').replace(/,/gi, '\.');
    let index = valor.lastIndexOf('.');
    return valor.substr(0, index) + ',' + valor.substr(index + 1);
  }
} 