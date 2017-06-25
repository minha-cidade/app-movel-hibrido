import { Component, ViewChild, ElementRef,AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
  @ViewChild('pieCanvas') pieCanvas: ElementRef;
  pieChart: any;

  constructor(public navCtrl: NavController) { }

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
}
