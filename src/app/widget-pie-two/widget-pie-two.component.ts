import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-widget-pie-two',
  templateUrl: './widget-pie-two.component.html',
  styleUrls: ['./widget-pie-two.component.css']
})
export class WidgetPieTwoComponent {
  Highcharts=Highcharts
  chartOptions={}
constructor(){
  this.chartOptions={

    chart: {
      type: 'column'
  },
  title: {
    text: null
},
  subtitle: {
      text: 'Lorem Ipsum'
  },
  credits:{
    enabled:false
  },
  xAxis: {
      categories: [
          
      ]
  },
  yAxis: [{
      min: 0,
      title: {
          text: null
      }
  }, {
      title: {
          text: null
      },
      opposite: true
  }],
  legend: {
      shadow: false,
      enabled:false
  },
  tooltip: {
      shared: true
  },
  plotOptions: {
      column: {
          grouping: false,
          shadow: false,
          borderWidth: 0
      }
  },
  series:
   [{
      name: '',
      color: 'rgba(165,170,217,1)',
      data: [150, 73, 20],
      pointPadding: 0.3,
      pointPlacement: -0.2
  }, {
      name: '',
      color: 'rgba(126,86,134,.9)',
      data: [140, 90, 40],
      pointPadding: 0.4,
      pointPlacement: -0.2
  }, {
      name: '',
      color: 'rgba(248,161,63,1)',
      data: [183.6, 178.8, 198.5],
      tooltip: {
          valuePrefix: '$',
          valueSuffix: ' M'
      },
      pointPadding: 0.3,
      pointPlacement: 0.2,
      yAxis: 1
  }, {
      name: '',
      color: 'rgba(186,60,61,.9)',
      data: [203.6, 198.8, 208.5],
      tooltip: {
          valuePrefix: '$',
          valueSuffix: ' M'
      },
      pointPadding: 0.4,
      pointPlacement: 0.2,
      yAxis: 1
  }]
}
}
  }

