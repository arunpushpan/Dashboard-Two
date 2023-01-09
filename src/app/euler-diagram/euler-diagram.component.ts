import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-euler-diagram',
  templateUrl: './euler-diagram.component.html',
  styleUrls: ['./euler-diagram.component.css']
})
export class EulerDiagramComponent {
  Highcharts=Highcharts
  chartOptions={}
constructor(){
  this.chartOptions={
    chart: {
      plotBackgroundColor: null,
    width: 200,
    // height: 300,
    type: 'pie',
    style: {
        'float': 'left',
        
    }
  },
  title: {
      text: '50%',
      align: 'center',
      verticalAlign: 'middle',
      y: 18
  },
  credits:{
    enabled:false
},
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          dataLabels: {
              enabled: true,
              distance: -50,
              style: {
                  fontWeight: 'bold',
                  color: 'white'
                  
              }
          },
          startAngle: -180,
          endAngle: 180,
          center: ['50%', '47%'],
          size: '60%'
      }
  },
  series: [{
      type: 'pie',
      name: '',
      innerSize: '50%',
      data: [
          ['', 5.05],
          // ['', 11.97],
          // ['', 5.52],
          // ['Safari', 2.98],
          // ['IE', 1.90],
          {
              name: 'Other',
              y: 3.77,
              dataLabels: {
                  enabled: false
              }
          }
      ]
  }]
}


}
}
