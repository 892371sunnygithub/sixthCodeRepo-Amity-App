import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

const ColumnChartCom = (props) => {
    // Create chart instance
    const { columnData } = props;
    const fetchData = (columnData) => {
        let chart = am4core.create("chartdivcolumn1", am4charts.XYChart);
        chart.scrollbarX = new am4core.Scrollbar();
            
        // Add data
        chart.data = columnData;

        // Create axes
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "labels";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;
        categoryAxis.renderer.labels.template.horizontalCenter = "right";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.tooltip.disabled = true;
        categoryAxis.renderer.minHeight = 110;
        
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.minWidth = 50;

        // Create series
        let series = chart.series.push(new am4charts.ColumnSeries());
        series.sequencedInterpolation = true;
        series.dataFields.valueY = "back";
        series.dataFields.categoryX = "labels";
        series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series.columns.template.fill = am4core.color("color");
           
        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;
         



        // create second series

        let series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.sequencedInterpolation = true;
        series2.dataFields.valueY = "front";
        series2.dataFields.categoryX = "labels";
        series2.tooltipText = "[{categoryX}: bold]{valueY}[/]";
        series2.columns.template.strokeWidth = 0;

        // series2.columns.template.fill = am4core.color("");


        series.tooltip.pointerOrientation = "vertical";

        series.columns.template.column.cornerRadiusTopLeft = 10;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.fillOpacity = 0.8;




        // on hover, make corner radiuses bigger
        let hoverState = series.columns.template.column.states.create("hover");
        hoverState.properties.cornerRadiusTopLeft = 0;
        hoverState.properties.cornerRadiusTopRight = 0;
        hoverState.properties.fillOpacity = 1;

        series.columns.template.adapter.add("fill", function (fill, target) {
            return chart.colors.getIndex(target.dataItem.index);
        });

        // Cursor
        chart.cursor = new am4charts.XYCursor();


    }

    useEffect(() => {
        fetchData(columnData);
    }, [columnData]);
    return (
        <div id="chartdivcolumn1" style={{ width: "100%", height: "400px" }}></div>
    )
}

export default ColumnChartCom