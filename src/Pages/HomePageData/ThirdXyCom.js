import React,{useEffect} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const ThirdXyCom = (props) => {
    const{ChartData}=props;
    const FetchData=(ChartData)=>{
        let chart = am4core.create("linechartthree", am4charts.XYChart);
        //    dinamic data add in chart [chart.data=ChartData]
            chart.data = ChartData;

            if(chart.logo){
                chart.logo.disabled=true;
            }
            // Create axes
            let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.minGridDistance = 60;
            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            // Create series
            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "value";
            series.dataFields.dateX = "date";
            series.tooltipText = "{value}"
            chart.legend = new am4charts.Legend();
            series.tooltip.pointerOrientation = "left";
            chart.cursor = new am4charts.XYCursor();
    }
       
    useEffect(()=>{
      FetchData(ChartData);
    }, [ChartData]);
  return (
    <div id='linechartthree' style={{ width: "100%", height: "auto" }} ></div>
  );
}

export default ThirdXyCom