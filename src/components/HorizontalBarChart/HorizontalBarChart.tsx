import React from 'react';
import {View} from 'react-native';
import HorizontalBarChartComponent from './HorizontalBarChartComponent';

const data = [
  {label: 'Your', value: 30, color: 'red'},
  {label: 'Avg', value: 50, color: 'gray'},
  {label: 'Efficient', value: 70, color: 'green'},
];

const HorizontalBarChart = () => {
  return (
    <View>
      <HorizontalBarChartComponent data={data} />
    </View>
  );
};

export default HorizontalBarChart;
