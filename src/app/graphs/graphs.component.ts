import { Component, OnInit, NgZone } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  private chart: am4charts.XYChart;
  constructor(private zone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.createXYChart();
    this.createPieChart();
    this.createBarChart();
  }

  createXYChart () {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartXYdiv", am4charts.XYChart);
  
      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      // hinds the labels
      valueAxis.renderer.labels.template.disabled = true;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;
  
      this.chart = chart;
    });
  }

  createBarChart () {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      let chart = am4core.create("charBardiv", am4charts.XYChart);

      // Add data
      chart.data = [{
        "country": "Lithuania",
        "litres": 501.9,
        "units": 250
      }, {
        "country": "Czech Republic",
        "litres": 301.9,
        "units": 222
      }, {
        "country": "Ireland",
        "litres": 201.1,
        "units": 170
      }, {
        "country": "Germany",
        "litres": 165.8,
        "units": 122
      }, {
        "country": "Australia",
        "litres": 139.9,
        "units": 99
      }, {
        "country": "Austria",
        "litres": 128.3,
        "units": 85
      }, {
        "country": "UK",
        "litres": 99,
        "units": 93
      }, {
        "country": "Belgium",
        "litres": 60,
        "units": 50
      }, {
        "country": "The Netherlands",
        "litres": 50,
        "units": 42
      }];

      // Create axes
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.title.text = "Countries";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Litres sold (M)";

      // Create series
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = "litres";
      series.dataFields.categoryX = "country";
      series.name = "Sales";
      series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
      series.columns.template.fill = am4core.color("#104547"); // fill

      var series2 = chart.series.push(new am4charts.LineSeries());
      series2.name = "Units";
      series2.stroke = am4core.color("#CDA2AB");
      series2.strokeWidth = 3;
      series2.dataFields.valueY = "units";
      series2.dataFields.categoryX = "country";
    });
  }

  createPieChart () {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      let chart = am4core.create("chartPiediv", am4charts.PieChart);

      // Add data
      chart.data = [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }];

      // Add and configure Series
      let pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
    });
  }


  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
