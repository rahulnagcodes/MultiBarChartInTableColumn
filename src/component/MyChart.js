import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import mydata from "./chartdata";

const MyChart = ({ id, chartdata }) => {
  useEffect(() => {
    /* Imports */
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("mychartid" + id, am4charts.XYChart);

    // Add percent sign to all numbers
    chart.numberFormatter.numberFormat = "#.#'%'";

    // Add data
    chart.data = chartdata;

    // the following line makes value axes to be arranged vertically.
    chart.bottomAxesContainer.layout = "horizontal";
    chart.bottomAxesContainer.reverseOrder = true;

    chart.padding(0, 0, 0, 0);
    // Create axes
    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 100;
    // categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.minGridDistance = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.title.fontWeight = 800;
    valueAxis.renderer.minGridDistance = 10;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;

    valueAxis.startLocation = 0.5;
    valueAxis.endLocation = 0.5;
    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "category";
    series.dataFields.valueX = "reco";
    series.clustered = false;
    series.columns.template.height = am4core.percent(90);

    // series.tooltipText = "GDP grow in {categoryX} (2004): [bold]{valueY}[/]";

    let series2 = chart.series.push(new am4charts.ColumnSeries());
    series2.dataFields.categoryY = "category";
    series2.dataFields.valueX = "actual";
    series2.clustered = false;
    series2.columns.template.height = am4core.percent(50);

    // series2.tooltipText = "GDP grow in {categoryX} (2005): [bold]{valueY}[/]";
    chart.paddingLeft = 0;
    chart.paddingRight = 0;
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineX.disabled = true;
    chart.cursor.lineY.disabled = true;
  }, []);
  return (
    <div
      id={"mychartid" + id}
      style={{
        height: "15px",
        width: "220px",
        // backgroundColor: "red",
        padding: "0px !important",
      }}
    ></div>
  );
};

export default MyChart;
