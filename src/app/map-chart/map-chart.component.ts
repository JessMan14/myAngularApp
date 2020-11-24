import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_usaLow from  '@amcharts/amcharts4-geodata/usaLow';


@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.scss']
})
export class MapChartComponent implements AfterViewInit {

  constructor(private zone: NgZone) { }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {

      this.zone.runOutsideAngular(() => {
        let covid_us_total_timeline = [
          {"confirmed":1,"deaths":0,"recovered":0,"date":"2020-01-22"},
          {"confirmed":1,"deaths":0,"recovered":0,"date":"2020-01-23"},{"confirmed":2,"deaths":0,"recovered":0,"date":"2020-01-24"},
          {"confirmed":2,"deaths":0,"recovered":0,"date":"2020-01-25"},{"confirmed":5,"deaths":0,"recovered":0,"date":"2020-01-26"},
          {"confirmed":5,"deaths":0,"recovered":0,"date":"2020-01-27"},{"confirmed":5,"deaths":0,"recovered":0,"date":"2020-01-28"},
          {"confirmed":5,"deaths":0,"recovered":0,"date":"2020-01-29"},{"confirmed":5,"deaths":0,"recovered":0,"date":"2020-01-30"},
          {"confirmed":6,"deaths":0,"recovered":0,"date":"2020-01-31"},{"confirmed":8,"deaths":0,"recovered":0,"date":"2020-02-01"},
          {"confirmed":8,"deaths":0,"recovered":0,"date":"2020-02-02"},{"confirmed":11,"deaths":0,"recovered":0,"date":"2020-02-03"},
          {"confirmed":11,"deaths":0,"recovered":0,"date":"2020-02-04"},{"confirmed":12,"deaths":0,"recovered":0,"date":"2020-02-05"},
          {"confirmed":12,"deaths":0,"recovered":0,"date":"2020-02-06"},{"confirmed":12,"deaths":0,"recovered":0,"date":"2020-02-07"},
        ];
        let covid_us_timeline = [
          {"date":"2020-01-22","list":[{"confirmed":0,"deaths":0,"recovered":0,"id":"US-WY"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-WV"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-WI"},
          {"confirmed":200,"deaths":0,"recovered":0,"id":"US-WA"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-VT"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-VA"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-UT"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-TX"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-TN"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-SD"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-SC"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-RI"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-PA"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-OR"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-OK"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-OH"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-NY"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-NV"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-NM"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-NJ"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-NH"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-NE"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-ND"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-NC"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-MT"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-MS"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-MO"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-MN"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-MI"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-ME"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-MD"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-MA"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-LA"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-KY"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-KS"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-IN"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-IL"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-ID"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-IA"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-HI"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-GA"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-FL"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-DE"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-DC"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-CT"},
          {"confirmed":500,"deaths":0,"recovered":0,"id":"US-CO"},{"confirmed":700,"deaths":0,"recovered":0,"id":"US-CA"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-AZ"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-AR"},
          {"confirmed":0,"deaths":0,"recovered":0,"id":"US-AL"},{"confirmed":0,"deaths":0,"recovered":0,"id":"US-AK"}]},
        ];  
    
        let populations = {
          'US-AL': 4887871,
          'US-AK': 737438,
          'US-AZ': 7171646,
          'US-AR': 3013825,
          'US-CA': 39557045,
          'US-CO': 5695564,
          'US-CT': 3572665,
          'US-DE': 967171,
          'US-DC': 702455,
          'US-FL': 21299325,
          'US-GA': 10519475,
          'US-HI': 1420491,
          'US-ID': 1754208,
          'US-IL': 12741080,
          'US-IN': 6691878,
          'US-IA': 3156145,
          'US-KS': 2911505,
          'US-KY': 4468402,
          'US-LA': 4659978,
          'US-ME': 1338404,
          'US-MD': 6042718,
          'US-MA': 6902149,
          'US-MI': 9995915,
          'US-MN': 5611179,
          'US-MS': 2986530,
          'US-MO': 6126452,
          'US-MT': 1062305,
          'US-NE': 1929268,
          'US-NV': 3034392,
          'US-NH': 1356458,
          'US-NJ': 8908520,
          'US-NM': 2095428,
          'US-NY': 19542209,
          'US-NC': 10383620,
          'US-ND': 760077,
          'US-OH': 11689442,
          'US-OK': 3943079,
          'US-OR': 4190713,
          'US-PA': 12807060,
          'US-RI': 1057315,
          'US-SC': 5084127,
          'US-SD': 882235,
          'US-TN': 6770010,
          'US-TX': 28701845,
          'US-UT': 3161105,
          'US-VT': 626299,
          'US-VA': 8517685,
          'US-WA': 7535591,
          'US-WV': 1805832,
          'US-WI': 5813568,
          'US-WY': 577737,
          'US-PR': 3195153
        } 
      
        let numberFormatter = new am4core.NumberFormatter();
      
        let backgroundColor = am4core.color("#1e2128");
        let confirmedColor = am4core.color("#0077c8");
        let deathsColor = am4core.color("#1c5fe5");
      
        // for an easier access by key
        let colors = { confirmed: confirmedColor, deaths: deathsColor };
      
        let countryColor = am4core.color("#3b3b3b");
        let countryStrokeColor = am4core.color("#000000");
        let buttonStrokeColor = am4core.color("#ffffff");
        let countryHoverColor = am4core.color("#1b1b1b");
        let activeCountryColor = am4core.color("#0f0f0f");
      
        let currentIndex;
        let currentCountry = "United States (Total)";
      
        // last date of the data
        let lastDate = new Date(covid_us_total_timeline[covid_us_total_timeline.length - 1].date);
        let currentDate = lastDate;
      
        let currentPolygon;
      
        let countryDataTimeout;
      
        let currentType;
      
        let currentTypeName;
      
        let sliderAnimation;
      
        let perCapita = false;
    
        //////////////////////////////////////////////////////////////////////////////
        // PREPARE DATA
        //////////////////////////////////////////////////////////////////////////////
    
        // make a map of country indexes for later use
        let countryIndexMap = {};
        let list = covid_us_timeline[covid_us_timeline.length - 1].list;
        for (var i = 0; i < list.length; i++) {
          let country = list[i]
          countryIndexMap[country.id] = i;
        }
    
        // function that returns current slide
        // if index is not set, get last slide
        function getSlideData(index) {
          if (index == undefined) {
            index = covid_us_timeline.length - 1;
          }
    
          let data = covid_us_timeline[index];
    
          return data;
        } 
    
        // get slide data
        let slideData = getSlideData(undefined); // TODO
    
        // as we will be modifying raw data, make a copy
        let mapData = JSON.parse(JSON.stringify(slideData.list));
      
        // remove items with 0 values for better performance
        for (var i = mapData.length - 1; i >= 0; i--) {
          if (mapData[i].confirmed == 0) {
            mapData.splice(i, 1);
          }
        }
    
        
        let max = { confirmed: 0, deaths: 0 };
        let maxPC = { confirmed: 0, deaths: 0 };
    
        // the last day will have most
        for (var i = 0; i < mapData.length; i++) {
          let di = mapData[i];
          if (di.confirmed > max.confirmed) {
            max.confirmed = di.confirmed;
          }
          if (di.deaths > max.deaths) {
            max.deaths = di.deaths;
          }
        }
    
      //////////////////////////////////////////////////////////////////////////////
      // LAYOUT & CHARTS
      //////////////////////////////////////////////////////////////////////////////
    
      // main container
      // https://www.amcharts.com/docs/v4/concepts/svg-engine/containers/
      let container = am4core.create("chartdiv", am4core.Container);
      container.width = am4core.percent(100);
      container.height = am4core.percent(100);
      container.fontSize = "0.9em";
    
      container.tooltip = new am4core.Tooltip();
      container.tooltip.background.fill = am4core.color("#000000");
      container.tooltip.background.stroke = confirmedColor;
      container.tooltip.fontSize = "0.9em";
      container.tooltip.getFillFromObject = false;
      container.tooltip.getStrokeFromObject = false;
    
      // MAP CHART 
      // https://www.amcharts.com/docs/v4/chart-types/map/
      let mapChart = container.createChild(am4maps.MapChart);
      mapChart.height = am4core.percent(90);
      mapChart.zoomControl = new am4maps.ZoomControl();
      mapChart.zoomControl.align = "right";
      mapChart.zoomControl.marginRight = 15;
      mapChart.zoomControl.valign = "middle";
    
      // by default minus button zooms out by one step, but we modify the behavior so when user clicks on minus, the map would fully zoom-out and show world data
      mapChart.zoomControl.minusButton.events.on("hit", showWorld);
    
      // clicking on a "sea" will also result a full zoom-out
      mapChart.seriesContainer.background.events.on("hit", showWorld);
      //TODO
      //mapChart.seriesContainer.background.events.on("over", resetHover);
      mapChart.seriesContainer.background.fillOpacity = 0;
      mapChart.zoomEasing = am4core.ease.sinOut;  
    
      // https://www.amcharts.com/docs/v4/chart-types/map/#Map_data
      // you can use more accurate world map or map of any other country - a wide selection of maps available at: https://github.com/amcharts/amcharts4-geodata
      mapChart.geodata = am4geodata_usaLow;
    
      // Set projection
      // https://www.amcharts.com/docs/v4/chart-types/map/#Setting_projection
      // instead of Miller, you can use Mercator or many other projections available: https://www.amcharts.com/demos/map-using-d3-projections/
      mapChart.projection = new am4maps.projections.AlbersUsa();
      mapChart.panBehavior = "move";
    
      // Map polygon series (defines how country areas look and behave)
      let polygonSeries = mapChart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.dataFields.id = "id";
      polygonSeries.dataFields.value = "confirmedPC";
      polygonSeries.interpolationDuration = 0;
    
      polygonSeries.useGeodata = true;
      polygonSeries.nonScalingStroke = true;
      polygonSeries.strokeWidth = 0.5;
      // this helps to place bubbles in the visual middle of the area
      polygonSeries.calculateVisualCenter = true;
      polygonSeries.data = mapData;
    
      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.fill = countryColor;
      polygonTemplate.fillOpacity = 1
      polygonTemplate.stroke = countryStrokeColor;
      polygonTemplate.strokeOpacity = 0.15
      polygonTemplate.setStateOnChildren = true;
      polygonTemplate.tooltipPosition = "fixed";
    
      //TODO
      // polygonTemplate.events.on("hit", handleCountryHit);
      // polygonTemplate.events.on("over", handleCountryOver);
      // polygonTemplate.events.on("out", handleCountryOut);
    
    
      polygonSeries.heatRules.push({
        "target": polygonTemplate,
        "property": "fill",
        "min": countryColor,
        "max": countryColor,
        "dataField": "value"
      })
    
      // you can have pacific - centered map if you set this to -154.8
      mapChart.deltaLongitude = -10;
    
      // polygon states
      let polygonHoverState = polygonTemplate.states.create("hover");
      polygonHoverState.transitionDuration = 1400;
      polygonHoverState.properties.fill = countryHoverColor;
    
      let polygonActiveState = polygonTemplate.states.create("active")
      polygonActiveState.properties.fill = activeCountryColor;
    
      // Bubble series
      let bubbleSeries = mapChart.series.push(new am4maps.MapImageSeries());
      bubbleSeries.data = JSON.parse(JSON.stringify(mapData));
    
      bubbleSeries.dataFields.value = "confirmed";
      bubbleSeries.dataFields.id = "id";
    
      // adjust tooltip
      bubbleSeries.tooltip.animationDuration = 0;
      bubbleSeries.tooltip.showInViewport = false;
      bubbleSeries.tooltip.background.fillOpacity = 0.2;
      bubbleSeries.tooltip.getStrokeFromObject = true;
      bubbleSeries.tooltip.getFillFromObject = false;
      bubbleSeries.tooltip.background.fillOpacity = 0.2;
      bubbleSeries.tooltip.background.fill = am4core.color("#000000");
    
      let imageTemplate = bubbleSeries.mapImages.template;
      // if you want bubbles to become bigger when zoomed, set this to false
      imageTemplate.nonScaling = true;
      imageTemplate.strokeOpacity = 0;
      imageTemplate.fillOpacity = 0.55;
      imageTemplate.tooltipText = "{name}: [bold]{value}[/]";
      imageTemplate.applyOnClones = true;
    
      //TODO
      // imageTemplate.events.on("over", handleImageOver);
      // imageTemplate.events.on("out", handleImageOut);
      // imageTemplate.events.on("hit", handleImageHit);
    
      //TODO
      // this is needed for the tooltip to point to the top of the circle instead of the middle
      // imageTemplate.adapter.add("tooltipY", function(tooltipY, target) {
      //   return -target.children.getIndex(0).radius;
      // })
    
      // When hovered, circles become non-opaque  
      let imageHoverState = imageTemplate.states.create("hover");
      imageHoverState.properties.fillOpacity = 1;
    
      // add circle inside the image
      let circle = imageTemplate.createChild(am4core.Circle);
      // this makes the circle to pulsate a bit when showing it
      circle.hiddenState.properties.scale = 0.0001;
      circle.hiddenState.transitionDuration = 2000;
      circle.defaultState.transitionDuration = 2000;
      circle.defaultState.transitionEasing = am4core.ease.elasticOut;
      // later we set fill color on template (when changing what type of data the map should show) and all the clones get the color because of this
      circle.applyOnClones = true;
    
      // heat rule makes the bubbles to be of a different width. Adjust min/max for smaller/bigger radius of a bubble
      bubbleSeries.heatRules.push({
        "target": circle,
        "property": "radius",
        "min": 3,
        "max": 30,
        "dataField": "value"
      })
    
      // when data items validated, hide 0 value bubbles (because min size is set)
      bubbleSeries.events.on("dataitemsvalidated", function() {
        bubbleSeries.dataItems.each((dataItem) => {
          let mapImage = dataItem.mapImage;
          let circle = mapImage.children.getIndex(0);
          if (mapImage.dataItem.value == 0) {
            circle.hide(0);
          }
          else if (circle.isHidden || circle.isHiding) {
            circle.show();
          }
        })
      })
    
      // this places bubbles at the visual center of a country
      imageTemplate.adapter.add("latitude", function(latitude, target) {
        let polygon = polygonSeries.getPolygonById(target.dataItem.id);
        if (polygon) {
          target.disabled = false;
          return polygon.visualLatitude;
        }
        else {
          target.disabled = true;
        }
        return latitude;
      })
    
      imageTemplate.adapter.add("longitude", function(longitude, target) {
        let polygon = polygonSeries.getPolygonById(target.dataItem.id);
        if (polygon) {
          target.disabled = false;
          return polygon.visualLongitude;
        }
        else {
          target.disabled = true;
        }
        return longitude;
      })
    
      // END OF MAP  
    
      // top title
      let title = mapChart.titles.create();
      title.fontSize = "1.5em";
      title.text = "COVID-19 U.S. Spread Data";
      title.align = "left";
      title.horizontalCenter = "left";
      title.marginLeft = 20;
      title.paddingBottom = 10;
      title.fill = am4core.color("#ffffff");
      title.y = 20;
  
    
    
      // buttons & chart container
      let buttonsAndChartContainer = container.createChild(am4core.Container);
      buttonsAndChartContainer.layout = "vertical";
      buttonsAndChartContainer.height = am4core.percent(45); // make this bigger if you want more space for the chart
      buttonsAndChartContainer.width = am4core.percent(100);
      buttonsAndChartContainer.valign = "bottom";
    
      // country name and buttons container
      let nameAndButtonsContainer = buttonsAndChartContainer.createChild(am4core.Container)
      nameAndButtonsContainer.width = am4core.percent(100);
      nameAndButtonsContainer.padding(0, 10, 5, 20);
      nameAndButtonsContainer.layout = "horizontal";
    
      // name of a country and date label
      let countryName = nameAndButtonsContainer.createChild(am4core.Label);
      countryName.fontSize = "1.1em";
      countryName.fill = am4core.color("#ffffff");
      countryName.valign = "middle";
    
    
      // buttons container (confirmed/deaths)
      let buttonsContainer = nameAndButtonsContainer.createChild(am4core.Container);
      buttonsContainer.layout = "grid";
      buttonsContainer.width = am4core.percent(100);
      buttonsContainer.x = 10;
      buttonsContainer.contentAlign = "right";
  
    
    
/*         // bubble size slider
        let sizeSlider = container.createChild(am4core.Slider);
        sizeSlider.orientation = "vertical";
        sizeSlider.height = am4core.percent(12);
        sizeSlider.marginLeft = 25;
        sizeSlider.align = "left";
        sizeSlider.valign = "top";
        sizeSlider.verticalCenter = "middle";
        sizeSlider.opacity = 0.7;
        sizeSlider.start = 0.5;
        sizeSlider.background.fill = am4core.color("#ffffff");
        sizeSlider.adapter.add("y", function(y, target) {
          return container.pixelHeight * (1 - buttonsAndChartContainer.percentHeight / 100) * 0.25;
        })
    
        sizeSlider.startGrip.background.fill = confirmedColor;
        sizeSlider.startGrip.background.fillOpacity = 0.8;
        sizeSlider.startGrip.background.strokeOpacity = 0;
        sizeSlider.startGrip.icon.stroke = am4core.color("#ffffff");
        sizeSlider.startGrip.background.states.getKey("hover").properties.fill = confirmedColor;
        sizeSlider.startGrip.background.states.getKey("down").properties.fill = confirmedColor;
        sizeSlider.horizontalCenter = "middle";
    
    
        sizeSlider.events.on("rangechanged", function() {
          sizeSlider.startGrip.scale = 0.75 + sizeSlider.start;
          bubbleSeries.heatRules.getIndex(0).max = 30 + sizeSlider.start * 100;
          circle.clones.each(function(clone) {
            clone.radius = clone.radius;
          })
        }) */
    
      
        let sizeLabel = container.createChild(am4core.Label);
        sizeLabel.text = "max bubble size *";
        sizeLabel.fill = am4core.color("#ffffff");
        sizeLabel.rotation = 90;
        sizeLabel.fontSize = "10px";
        sizeLabel.fillOpacity = 0.5;
        sizeLabel.horizontalCenter = "middle";
        sizeLabel.align = "left"
        sizeLabel.paddingBottom = 40;
        sizeLabel.tooltip.setBounds({ x: 0, y: 0, width: 200000, height: 200000 })
        sizeLabel.tooltip.label.wrap = true;
        sizeLabel.tooltip.label.maxWidth = 300;
        sizeLabel.tooltipText = "Some states have so many cases that bubbles for states with smaller values often look the same even if there is a significant difference between them. This slider can be used to increase maximum size of a bubble so that when you zoom in to a region with relatively small values you could compare them anyway."
        sizeLabel.fill = am4core.color("#ffffff");
    
        sizeLabel.adapter.add("y", function(y, target) {
          return container.pixelHeight * (1 - buttonsAndChartContainer.percentHeight / 100) * 0.25;
        })
    
      
        let filterLabel = container.createChild(am4core.Label);
        filterLabel.text = "filter max values *";
        filterLabel.rotation = 90;
        filterLabel.fontSize = "10px";
        filterLabel.fill = am4core.color("#ffffff");
        filterLabel.fontSize = "0.8em";
        filterLabel.fillOpacity = 0.5;
        filterLabel.horizontalCenter = "middle";
        filterLabel.align = "left"
        filterLabel.paddingBottom = 40;
        filterLabel.tooltip.label.wrap = true;
        filterLabel.tooltip.label.maxWidth = 300;
        filterLabel.tooltipText = "This filter allows to remove states with many cases from the map so that it would be possible to compare states with smaller number of cases."
        filterLabel.fill = am4core.color("#ffffff");
    
        filterLabel.adapter.add("y", function(y, target) {
          return container.pixelHeight * (1 - buttonsAndChartContainer.percentHeight / 100) * 0.7;
        })
    
    
       

    
     
      // BUTTONS
      // create buttons
      let confirmedButton = addButton("confirmed", confirmedColor);
      let deathsButton = addButton("deaths", deathsColor);
    
      let buttons = { confirmed: confirmedButton, deaths: deathsButton };
    
      // add button
      function addButton(name, color) {
        let button = buttonsContainer.createChild(am4core.Button)
        button.label.valign = "middle"
        button.label.fill = am4core.color("#ffffff");
        button.label.fontSize = "11px";
        button.hide();
        button.background.cornerRadius(30, 30, 30, 30);
        button.background.strokeOpacity = 0.3
        button.background.fillOpacity = 0;
        button.background.stroke = buttonStrokeColor;
        button.background.padding(2, 3, 2, 3);
        button.states.create("active");
        button.setStateOnChildren = true;
    
        let activeHoverState = button.background.states.create("hoverActive");
        activeHoverState.properties.fillOpacity = 0;
    
        let circle = new am4core.Circle();
        circle.radius = 8;
        circle.fillOpacity = 0.3;
        circle.fill = buttonStrokeColor;
        circle.strokeOpacity = 0;
        circle.valign = "middle";
        circle.marginRight = 5;
        button.icon = circle;
    
        // save name to dummy data for later use
        button.dummyData = name;
    
        let circleActiveState = circle.states.create("active");
        circleActiveState.properties.fill = color;
        circleActiveState.properties.fillOpacity = 0.5;
    
        button.events.on("hit", handleButtonClick);
    
        return button;
      }
    
      // handle button clikc
      function handleButtonClick(event) {
        // we saved name to dummy data
        changeDataType(event.target.dummyData);
      }
    
      // change data type (confirmed/deaths)
      function changeDataType(name) {
        currentType = name;
        currentTypeName = name;
        if (name != "deaths") {
          currentTypeName += " cases";
        }
    
        bubbleSeries.mapImages.template.tooltipText = "[bold]{name}: {value}[/] [font-size:10px]\n" + currentTypeName;
    
        // make button active
        let activeButton = buttons[name];
        activeButton.isActive = true;
        // make other buttons inactive
        for (var key in buttons) {
          if (buttons[key] != activeButton) {
            buttons[key].isActive = false;
          }
        }
        // tell series new field name
        bubbleSeries.dataFields.value = name;
        polygonSeries.dataFields.value = name + "PC";
    
        bubbleSeries.dataItems.each(function(dataItem) {
          dataItem.setValue("value", dataItem.dataContext[currentType]);
        })
    
        polygonSeries.dataItems.each(function(dataItem) {
          dataItem.setValue("value", dataItem.dataContext[currentType + "PC"]);
          dataItem.mapPolygon.defaultState.properties.fill = undefined;
        })
    
    
        // change color of bubbles
        // setting colors on mapImage for tooltip colors
        bubbleSeries.mapImages.template.fill = colors[name];
        bubbleSeries.mapImages.template.stroke = colors[name];
        // first child is circle
        bubbleSeries.mapImages.template.children.getIndex(0).fill = colors[name];
      
        // update heat rule's maxValue
        bubbleSeries.heatRules.getIndex(0).maxValue = max[currentType];
        polygonSeries.heatRules.getIndex(0).maxValue = maxPC[currentType];
        if (perCapita) {
          polygonSeries.heatRules.getIndex(0).max = colors[name];
          //TODO
          //updateCountryTooltip();
        }
      }
    
      // what happens when a country is rolled-over
      function rollOverCountry(mapPolygon) {
        //TODO
        //resetHover();
        if (mapPolygon) {
          mapPolygon.isHover = true;
    
          // make bubble hovered too
          let image = bubbleSeries.getImageById(mapPolygon.dataItem.id);
          if (image) {
              //TODO
            //image.dataItem.dataContext.name = mapPolygon.dataItem.dataContext.name;
            image.isHover = true;
          }
        }
      }
      // what happens when a country is rolled-out
      function rollOutCountry(mapPolygon) {
        let image = bubbleSeries.getImageById(mapPolygon.dataItem.id)
    
        //TODO
        //resetHover();
        if (image) {
          image.isHover = false;
        }
      }
    
      // rotate and zoom
      function rotateAndZoom(mapPolygon) {
        polygonSeries.hideTooltip();
        let animation = mapChart.animate([{ property: "deltaLongitude", to: -mapPolygon.visualLongitude }, { property: "deltaLatitude", to: -mapPolygon.visualLatitude }], 1000)
        animation.events.on("animationended", function() {
          mapChart.zoomToMapObject(mapPolygon, getZoomLevel(mapPolygon));
        })
      }
    
      // calculate zoom level (default is too close)
      function getZoomLevel(mapPolygon) {
        let w = mapPolygon.polygon.bbox.width;
        let h = mapPolygon.polygon.bbox.width;
        // change 2 to smaller walue for a more close zoom
        return Math.min(mapChart.seriesWidth / (w * 2), mapChart.seriesHeight / (h * 2))
      }
    
      // show world data
      function showWorld() {
        currentCountry = "World";
        currentPolygon = undefined;
        //TODO
        //resetHover();
    
        if (countryDataTimeout) {
          clearTimeout(countryDataTimeout);
        }
    
        // make all inactive
        polygonSeries.mapPolygons.each(function(polygon) {
          polygon.isActive = false;
        })
    
        updateCountryName();
       }
    
        // updates country name and date
        function updateCountryName() {
          countryName.text = currentCountry + ", " + mapChart.dateFormatter.format(currentDate, "MMM dd, yyyy");
        }
    
      
        //update map data
        function updateMapData(data) {
          //modifying instead of setting new data for a nice animation
          bubbleSeries.dataItems.each(function(dataItem) {
            //TODO
            // dataItem.dataContext.confirmed = 0;
            // dataItem.dataContext.deaths = 0;
          })
         }
    
        
        // capitalize first letter
        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
    
        function handleImageOver(event) {
          rollOverCountry(polygonSeries.getPolygonById(event.target.dataItem.id));
        }
    
        function handleImageOut(event) {
          rollOutCountry(polygonSeries.getPolygonById(event.target.dataItem.id));
        }

        function handleCountryOver(event) {
          rollOverCountry(event.target);
        }
    
        function handleCountryOut(event) {
          rollOutCountry(event.target);
        }
    
        function resetHover() {
          polygonSeries.mapPolygons.each(function(polygon) {
            polygon.isHover = false;
          })
    
          bubbleSeries.mapImages.each(function(image) {
            image.isHover = false;
          })
        }
    
    
        // set initial data and names
        updateCountryName();
        changeDataType("confirmed");
    

        });   
    });
  }

  ngOnInit(): void {
  }

}
