// import React, { useEffect } from 'react'
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// am4core.useTheme(am4themes_animated);

// const PieOneCom = (props) => {
//    const{chartData}= props;
//     const fetchData=(chartData)=>{
//         let chart = am4core.create("chartdivOne", am4charts.PieChart);

//         // Add data
//         chart.data = chartData;
//         // Add and configure Series
//         let pieSeries = chart.series.push(new am4charts.PieSeries());
//         pieSeries.dataFields.value = 'values';
//         pieSeries.dataFields.category = 'labels';
//         pieSeries.slices.template.propertyFields.fill = "color";
//         chart.legend = new am4charts.Legend();
//         pieSeries.labels.template.disabled = true;
//         pieSeries.ticks.template.disabled = true;
//         chart.legend.position="right";

//     }

//     useEffect(()=>{
//     fetchData(chartData);
//     },[chartData])
//   return (
//     <div id="chartdivOne" style={{width:"100%", height:"400px"}}></div>
//   );
// }

// export default PieOneCom;


// import React, { useEffect } from 'react'
// /* Imports */
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// /* Chart code */
// // Themes begin
// am4core.useTheme(am4themes_animated);
// // Themes end
// const PieOneCom = (props) => {
//     const{chartData}=props;
//     console.log("chartData is ????", chartData);

//     const fetchData= (chartData)=>{
//       let data = chartData;
//       let container = am4core.create("chartdivone", am4core.Container);
//       container.width = am4core.percent(100);
//       container.height = am4core.percent(100);
//       container.layout = "horizontal";

//       container.events.on("maxsizechanged", function () {
//           chart1.zIndex = 0;
//           separatorLine.zIndex = 1;
//           dragText.zIndex = 2;
//           chart1.zIndex = 3;
//       });

//       let chart1 = container.createChild(am4charts.PieChart);
//       chart1 .fontSize = 11;
//       chart1.hiddenState.properties.opacity = 0; // this makes initial fade in effect
//       chart1.data = data;
//       chart1.radius = am4core.percent(70);
//       chart1.innerRadius = am4core.percent(40);
//       chart1.zIndex = 1;

//       let series1 = chart1.series.push(new am4charts.PieSeries());
//       series1.dataFields.value = "values";
//       series1.dataFields.category = "labels";
//       series1.colors.step = "color";

//       series1.alignLabels = false;
//       series1.labels.template.bent = true;
//       series1.labels.template.radius = 3;
//       series1.labels.template.padding(0,0,0,0);

//       let sliceTemplate1 = series1.slices.template;
//       sliceTemplate1.cornerRadius = 5;
//       sliceTemplate1.draggable = true;
//       sliceTemplate1.inert = true;
//       sliceTemplate1.propertyFields.fill = "color";
//       sliceTemplate1.propertyFields.fillOpacity = "opacity";
//       sliceTemplate1.propertyFields.stroke = "color";
//       sliceTemplate1.propertyFields.strokeDasharray = "strokeDasharray";
//       sliceTemplate1.strokeWidth = 1;
//       sliceTemplate1.strokeOpacity = 1;

//       let zIndex = 5;

//       sliceTemplate1.events.on("down", function (event) {
//           event.target.toFront();
//           // also put chart to front
//           let series = event.target.dataItem.component;
//           series.chart.zIndex = zIndex++;
//       })

//       series1.ticks.template.disabled = true;

//       sliceTemplate1.states.getKey("active").properties.shiftRadius = 0;

//       sliceTemplate1.events.on("dragstop", function (event) {
//           handleDragStop(event);
//       })

//       // separator line and text
//       let separatorLine = container.createChild(am4core.Line);
//       separatorLine.x1 = 0;
//       separatorLine.y2 = 300;
//       separatorLine.strokeWidth = 3;
//       separatorLine.stroke = am4core.color("color");
//       separatorLine.valign = "middle";
//       separatorLine.strokeDasharray = "5,5";


//       let dragText = container.createChild(am4core.Label);
//       dragText.text = "Drag slices over the line";
//       dragText.rotation = 90;
//       dragText.valign = "middle";
//       dragText.align = "center";
//       dragText.paddingBottom = 5;

//       function handleDragStop(event) {
//           let targetSlice = event.target;
//           let dataItem1;
//              let slice1;

//           if (series1.slices.indexOf(targetSlice) != -1) {
//               slice1 = targetSlice;

//           }

//           dataItem1 = slice1.dataItem;

//           toggleDummySlice(series1);
//               series1.hideTooltip();
//       }

//       function toggleDummySlice(series) {
//           let show = true;
//           for (var i = 1; i < series.dataItems.length; i++) {
//               let dataItem = series.dataItems.getIndex(i);
//               if (dataItem.slice.visible && !dataItem.slice.isHiding) {
//                   show = false;
//               }
//           }

//           let dummySlice = series.dataItems.getIndex(0);
//           if (show) {
//               dummySlice.show();
//           }
//           else {
//               dummySlice.hide();
//           }
//       }

//       series1.events.on("datavalidated", function () {
//           let dummyDataItem = series1.dataItems.getIndex(0);
//           dummyDataItem.hide(0);
//           dummyDataItem.slice.draggable = false;
//           dummyDataItem.slice.tooltipText = undefined;
//       })
//     }

//     useEffect(()=>{
//      fetchData(chartData);
//     },[chartData]);

//   return (
//     <div id='chartdivone' style={{width:"100%", height:"500px"}}></div>
//   )
// }

// export default PieOneCom


// Third way to create a pie chart


import React, { useEffect } from 'react'
/* Imports */
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
const PieOneCom = (props) => {
  const { chartData } = props;
  const getData = (chartData) => {
    // Create chart instance
    let chart = am4core.create("chartdivOne", am4charts.PieChart);

    // Add data
    chart.data = chartData;

    // Set inner radius
    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "values";
    pieSeries.dataFields.category = "labels";
    pieSeries.slices.template.propertyFields.fill = "color";
    // pieSeries.slices.template.stroke = am4core.color("yellow");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    chart.legend = new am4charts.Legend();
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    chart.legend.position = "right";

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

  }

  useEffect(() => {
    getData(chartData);
  }, [chartData])
  return (
    <div id='chartdivOne' style={{ width: "100%", height: '400px' }}></div>
  )
}

export default PieOneCom