import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css']
})
export class WidgetChartComponent {
  Highcharts=Highcharts
  chartOptions={}
constructor(){
  this.chartOptions={
    chart: {
      type: 'spline',
      scrollablePlotArea: {
          minWidth: 600,
          scrollPositionX: 1
      },
      title: {
        text: ''
    },
    // legend: {
    //     enabled: false
    // }
  },
 
  xAxis: {
      type: 'datetime',
      labels: {
          overflow: 'justify',
          enabled:false
      },
      
  },
  yAxis: {
    labels: {
        
        enabled: true
    }, title:{
        text:''},
      minorGridLineWidth: 0,
      gridLineWidth: 0,
      alternateGridColor: null,
      plotBands: [{ // Light air
          from: 0.3,
          to: 1.5,
          color: 'rgba(0,0,0,0)',
          label: {
               text: '',
              style: {
                  color: '#FFA500'
              }
          }
      }, { // Light breeze
          from: 1.5,
          to: 3.3,
          color: 'rgba(0, 0, 0, 0)',
          label: {
               text: '',
              style: {
                  color: '#FFA500'
              }
          }
      }, { // Gentle breeze
          from: 3.3,
          to: 5.5,
          color: 'rgba(0,0,0,0)',
          label: {
               text: '',
              style: {
                  color: '#FFA500'
              }
          }
      }, { // Moderate breeze
          from: 5.5,
          to: 8,
          color: 'rgba(0, 0, 0, 0)',
          label: {
              text: '',
              style: {
                  color: '#FFA500'
              }
          }
      }, { // Fresh breeze
          from: 8,
          to: 11,
          color: 'rgba(0,0,0,0)',
          label: {
              // text: 'Fresh breeze',
              style: {
                  color: '#FFA500'
              }
          }
      }, { // Strong breeze
          from: 11,
          to: 14,
          color: 'rgba(0, 0, 0, 0)',
          label: {
           //   text: 'Strong breeze',
              style: {
                  color: '#606060'
              }
          }
      }, { // High wind
          from: 14,
          to: 15,
          color: 'rgba(0,0,0,0)',
          label: {
            //  text: 'High wind',
              style: {
                  color: '#606060'
              }
          }
      }]
  },
  tooltip: {
      valueSuffix: ' m/s'
  },
  plotOptions: {
      spline: {
          lineWidth: 4,
          states: {
              hover: {
                  lineWidth: 5
              }
          },
          marker: {
              enabled: false
          },
          pointInterval: 3600000, // one hour
          pointStart: Date.UTC(2022, 5, 13, 0, 0, 0)
      }
  },
  series: [{
    name: '',
      data: [
          4.5, 5.1, 4.4, 3.7, 4.2, 5.0, 4.3, 4, 5, 4.9,
          4.8, 4.6, 3.9, 3.8, 2.7, 3.1, 2.6, 3.3, 3.8,
          4.1, 1, 1.9, 3.2, 3.8, 4.2]

  }, {
       name: '',
      // data: [
      //     0.1, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.4,
      //     0.1, 0, 0.2, 0.3, 0, 0, 0, 0, 0, 0.1,
      //     0.1, 0.1, 0, 0.1, 0, 0, 0]
  }],
  navigation: {
      menuItemStyle: {
          fontSize: '10px'
      }
  },
  credits: {
    enabled: false
  },
}
  }
}

