import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const PieSecondCom = (props) => {
    const { secData } = props;
    const fetchdata= (secData)=>{
        let chart = am4core.create("chartdivTwo", am4charts.PieChart);

    // Add data
    chart.data = secData;
    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'format_values';
    pieSeries.dataFields.category = 'labels';
    pieSeries.slices.template.propertyFields.fill = "color";
    chart.legend = new am4charts.Legend();
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    chart.legend.position="right";
    }
     
    useEffect(()=>{
      fetchdata(secData);
    },[secData]);

    return (
        <div id="chartdivTwo" style={{ width: "100%", height: '400px' }}></div>
    );
}

export default PieSecondCom;