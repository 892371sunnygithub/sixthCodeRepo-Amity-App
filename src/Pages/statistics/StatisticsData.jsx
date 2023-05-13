import React from 'react'
import ColumnChartData from './ColumnChartData';
import HalfPieChartData from './HalfPieChartData';
import LineChartData from './LineChartData';
import PieOneData from './PieOneData';
import PieSecondData from './PieSecondData';
import SecHalfPieData from './SecHalfPieData';

const StatisticsData = () => {
  return (
    <div> <PieOneData /> <PieSecondData/> <ColumnChartData /> <HalfPieChartData /> <SecHalfPieData /> <LineChartData/> </div>
  )
}

export default StatisticsData;