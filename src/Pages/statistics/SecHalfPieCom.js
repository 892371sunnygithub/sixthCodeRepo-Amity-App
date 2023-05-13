
import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
const SecHalfPieCom = (props) => {
    const{chartData}=props;
    const getChartData = (chartData) => {
    let chart = am4core.create("chartdivsechalfpie", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = chartData;

    chart.radius = am4core.percent(70);
    chart.innerRadius = am4core.percent(40);
    chart.startAngle = -90;
    chart.endAngle = 80;
    
    

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "lodge";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = true;
    series.slices.template.inert = true;
    series.alignLabels = false;

    
    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;
    // series.labels.template.disabled = true;
    // series.ticks.template.disabled = true;

    chart.legend = new am4charts.Legend();
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
    chart.legend.position = "right";

    chart.legend.maxHeight = 150;
    chart.legend.scrollable = true;

    // chart.legend = new am4charts.Legend();

  }

  useEffect(() => {
    getChartData(chartData);
  }, [chartData]);
  return (
    <div id='chartdivsechalfpie' style={{width:'100%', height:"400px", }}></div>
  )
}

export default SecHalfPieCom;