import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-gauge',
  templateUrl: './widget-gauge.component.html',
  styleUrls: ['./widget-gauge.component.css']
})
export class WidgetGaugeComponent {
  Highcharts=Highcharts
  chartOptions={}
constructor(){
  this.chartOptions={

    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      }
  },
 
  title: {
      text: ''
  },
  subtitle: {
      text: 'Lorem Ipsum'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }
  },
  series: [{
      type: 'pie',
      name: '',
      data: [
          ['Samsung', 23],
          ['Apple', 18],
          {
              name: 'xiaomi',
              y: 12,
              sliced: true,
              selected: false
          },
          ['Oppo*', 9],
          ['Vivo', 8],
          ['Others', 30]
      ]
  }],
  credits: {
    enabled: false
  }
}

    
  }
}

