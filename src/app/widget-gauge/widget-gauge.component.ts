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
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
    },
    title:{
        text:'Lorem Ipsum',
        style: {
            // fontWeight: 'bold',
            color: 'gray',
            fontSize:15
        }
    },
    subtitle: {
        text: '65%',
        align: 'center',
        verticalAlign: 'middle',
        y: 40,
        style: {
            fontWeight: 'bold',
            color: 'black',
            fontSize:18
        }
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
            center: ['50%', '50%'],
            size: '110%'
        }
    },
    series: [{
        type: 'pie',
        name: '',
        innerSize: '50%',
        color:'green',
        data: [
            ['', 3.05],
            // ['', 11.97],
            // ['', 5.52],
            // ['Safari', 2.98],
            // ['IE', 1.90],
            {
                name: 'Other',
                y: 3.77,
                color: 'green',
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
}

    
  }
}

