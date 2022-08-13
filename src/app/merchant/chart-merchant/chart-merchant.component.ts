import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-merchant',
  templateUrl: './chart-merchant.component.html',
  styleUrls: ['./chart-merchant.component.css']
})
export class ChartMerchantComponent implements OnInit {
  chart: any;

  constructor() { }

  ngOnInit(): void {
    this.showChart();
  }

  /*--------------  bar chart 11 amchart start ------------*/

  showChart() {
    console.log('vao chart khong?!')
    // @ts-ignore
    chart = AmCharts.makeChart("ambarchart4", {
      "type": "serial",
      "theme": "light",
      "marginRight": 70,
      "dataProvider":
        [{
        "country": "January",
        "visits": 3025,
        "color": "#8918FE"
      }, {
        "country": "February",
        "visits": 1882,
        "color": "#7474F0"
      }, {
        "country": "March",
        "visits": 1809,
        "color": "#C5C5FD"
      }, {
        "country": "April",
        "visits": 1322,
        "color": "#952FFE"
      }, {
        "country": "May",
        "visits": 1122,
        "color": "#7474F0"
      }, {
        "country": "June",
        "visits": 1114,
        "color": "#CBCBFD"
      }, {
        "country": "July",
        "visits": 984,
        "color": "#FD9C21"
      }, {
        "country": "August",
        "visits": 711,
        "color": "#0D8ECF"
      }, {
        "country": "September",
        "visits": 665,
        "color": "#0D52D1"
      }, {
        "country": "October",
        "visits": 580,
        "color": "#2A0CD0"
      }, {
        "country": "November",
        "visits": 443,
        "color": "#8A0CCF"
      }, {
        "country": "December",
        "visits": 441,
        "color": "#9F43FE"
      }],
      "valueAxes": [{
        "axisAlpha": 0,
        "position": "left",
        "title": false
      }],
      "startDuration": 1,
      "graphs": [{
        "balloonText": "<b>[[category]]: [[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
      }],
      "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
      },
      "categoryField": "country",
      "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 45
      },
      "export": {
        "enabled": false
      }

    });
  }

/*--------------  bar chart 11 amchart END ------------*/
}
