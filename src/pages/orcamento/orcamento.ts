import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as numeral from 'numeral';
import { Chart } from 'chart.js';

import { Despesa } from '../../models/despesa.model';

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
    this.despesas = [ { nome: "Saúde", valor: 900531814 },
                      { nome: "Educação", valor: 416950010 },
                      { nome: "Administração", valor: 265920759 },
                      { nome: "Urbanismo", valor: 249420207 },
                      { nome: "Previdência Social", valor: 233341919 },
                      { nome: "Habitação", valor: 147003000 },
                      { nome: "Encargos Especiais", valor: 85067579 },
                      { nome: "Transporte", valor: 57064000 },
                      { nome: "Assistência Social", valor: 33808700 },
                      { nome: "Segurança Pública", valor: 24662937 },
                      { nome: "Gestão Ambiental", valor: 18768500 },
                      { nome: "Cultura", valor: 18217000 },
                      { nome: "Comunicações", valor: 13965000 },
                      { nome: "Comércio e Serviços", valor: 7160500 },
                      { nome: "Ciência e Tecnologia", valor: 2559040 },
                      { nome: "Outros", valor: 104397155 }];
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
        labels: ["Saúde", "Educação", "Administração", "Urbanismo", "Previdência Social", "Habitação",
                 "Encargos Especiais", "Transporte", "Assistência Social", "Segurança Pública", "Gestão Ambiental", "Cultura",
                 "Comunicações", "Comércio e Serviços", "Ciência e Tecnologia", "Outros"],
        datasets: [{
          data: [900531814, 416950010, 265920759, 249420207, 233341919, 147003000, 85067579, 57064000,
                 33808700, 24662937, 18768500, 18217000, 13965000,7160500 , 2559040,104397155],
          backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(233, 30, 99, 0.6)',
                            'rgba(156, 39, 176, 0.6)', 'rgba(205, 220, 57, 0.6)', 'rgba(230, 81, 0, 0.6)',
                            'rgba(121, 85, 72, 0.6)', 'rgba(255, 23, 68, 0.6)', 'rgba(170, 0, 255, 0.6)',
                            'rgba(63, 81, 181, 0.6)', 'rgba(255, 193, 7, 0.6)', 'rgb(245, 245, 245)'],
          hoverBackgroundColor: [	'rgba(255,99,132,1)','rgba(54, 162, 235, 1)',
					                        'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
                                  'rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)', 'rgba(233, 30, 99, 1)',
                                  'rgba(156, 39, 176, 1)', 'rgba(205, 220, 57, 1)', 'rgba(230, 81, 0, 1)',
                                  'rgba(121, 85, 72, 1)', 'rgba(255, 23, 68, 1)',  'rgba(170, 0, 255, 1)',
                                  'rgba(63, 81, 181, 1)', 'rgba(255, 193, 7, 1)', 'rgb(245, 245, 245)']
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
