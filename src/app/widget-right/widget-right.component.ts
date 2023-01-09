import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-right',
  templateUrl: './widget-right.component.html',
  styleUrls: ['./widget-right.component.css']
})
export class WidgetRightComponent {
  Highcharts=Highcharts
  chartOptions={}
constructor(){
  this.chartOptions={
   
    chart: {
      type: 'column',
      options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          viewDistance: 25,
          depth: 40
      }
  },
  credits:{
    enabled:false
  },

  title: {
      text: null
  },
  legend: {
    symbolPadding: 0,
    symbolWidth: 0,
    symbolHeight: 0,
    squareSymbol: false,
    enabled: false
},

  xAxis: {
      labels: {
          skew3d: true,
          style: {
              fontSize: '8px'
          }
      }
  },

  yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
          text: null,
          skew3d: true,
          style: {
              fontSize: '8px'
          }
      },
     
  },

  // tooltip: {
  //     headerFormat: '<b>{point.key}</b><br>',
  //     pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
  // },

  plotOptions: {
      series: {
          pointStart: 2016
      },
     
      column: {
          stacking: 'normal',
          depth: 40
      },
      
  },

  series: [{
    title:{
      enabled:false
    },
   
      name: '',
      data: [563, 567, 590, 582, 571],
      stack: 'Asia'
  }, {
      name: '',
      data: [650, 654, 643, 612, 572],
      stack: 'Europe'
  }, {
      name: '',
      data: [368, 378, 378, 367, 363],
      stack: 'Asia'
  }, {
      name: '',
      data: [564, 562, 582, 571, 533],
      stack: 'Europe'
  }]
}

}

  }


