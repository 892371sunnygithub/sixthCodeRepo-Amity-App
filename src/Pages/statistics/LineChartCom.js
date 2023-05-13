import React, { useEffect } from 'react'
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
const LineChartCom = (props) => {
    const{chartData}= props;
    const getData=(chartData)=>{
        let chart = am4core.create("chartdivLine", am4charts.XYChart);



chart.data = chartData;

let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.ticks.template.disabled = true;
categoryAxis.renderer.line.opacity = 0;
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 50;
categoryAxis.dataFields.category = "date";
categoryAxis.startLocation = 0.1;
categoryAxis.endLocation = 0.9;


let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
valueAxis.renderer.line.opacity = 0;
valueAxis.renderer.ticks.template.disabled = true;
valueAxis.min = 0;

let lineSeries = chart.series.push(new am4charts.LineSeries());
lineSeries.dataFields.categoryX = "date";
lineSeries.dataFields.valueY = "value";
lineSeries.tooltipText = "date: {valueY.value}";
lineSeries.fillOpacity = 0.5;
lineSeries.strokeWidth = 3;
lineSeries.propertyFields.stroke = "lineColor";
lineSeries.propertyFields.fill = "lineColor";

let bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
bullet.circle.radius = 6;
bullet.circle.fill = am4core.color("#fff");
bullet.circle.strokeWidth = 3;

chart.cursor = new am4charts.XYCursor();
chart.cursor.behavior = "panX";
chart.cursor.lineX.opacity = 0;
chart.cursor.lineY.opacity = 0;

chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.bottomAxesContainer;



}
      
    useEffect(()=>{
      getData(chartData);
    },[chartData])
  return (
    <div id='chartdivLine' style={{width:"100%", height:"400px",}}></div>
  );
}

export default LineChartCom;