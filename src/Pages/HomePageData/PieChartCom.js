import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);

const PieChartCom = (props) => {
  const {ChartData}=props;
  const GetChartData=(ChartData)=>{
    let chart = am4core.create("chartdivhome", am4charts.PieChart);
    // disable to chart logo
    if(chart.logo){
        chart.logo.disabled=true;
    }
    
    chart.data=ChartData;
    chart.innerRadius = am4core.percent(50);
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "values";
    pieSeries.dataFields.category = "labels";
    pieSeries.slices.template.propertyFields.fill = "color";
    // pieSeries.slices.template.stroke = am4core.color("yellow");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    // chart.legend = new am4charts.Legend();
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    // chart.legend.position = "right";
    

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

  }

  useEffect(()=>{
    GetChartData(ChartData);
  }, [ChartData])
  return (
    <div id='chartdivhome' style={{ width: "100%", height: '325px' }}></div>
  )
}

export default PieChartCom