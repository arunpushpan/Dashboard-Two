import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-widget-pie',
  templateUrl: './widget-pie.component.html',
  styleUrls: ['./widget-pie.component.css']
})
export class WidgetPieComponent {
  Highcharts=Highcharts
  chartOptions={}
constructor(){
  this.chartOptions={
        
    chart: {
        width: null,
        height:null,
    // padding: [5, 5, 5, 5],
        type: 'spline'
    },
    title:{
        text:'Lorem Ipsum',
        style: {
            // fontWeight: 'bold',
            color: 'gray',
            fontSize:15
        }
    },
    // subtitle: {
    //     text: 'Lorem Ipsum'
    // },
    credits:{
enabled:false
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
            enabled: false
        },
       
    },
    yAxis: {
      
        labels: {
            enabled: false
        },
        title:false
      
      
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 6,
                lineColor: '#FF0000',
                lineWidth: 1,
            }
        }
    },
    series: [{
        name:'',
        
        marker: {
            symbol: 'diamond',
            fillColor: "#FFA500"
           
        },
        data: [5.2, 5.7, 8.7, 13.9, 18.2, 21.4, 25.0, {
            y: 26.4,
          
            accessibility: {
                description: 'Sunny symbol, this is the warmest point in the chart.'
            }
        }, 22.8, 17.5, 12.1, 7.6]

    }, ]
}

}
}




