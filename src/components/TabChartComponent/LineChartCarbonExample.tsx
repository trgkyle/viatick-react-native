import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [3.5, 3.8, 3.1, 2.9, 2.7, 3.2],
      color: (opacity = 1) => `rgba(255, 127, 80, ${opacity})`, // optional color function
      strokeWidth: 2, // optional width of the chart line, defaults to 1
    },
  ],
};

const LineChartCarbonExample: React.FC = () => {
  return (
    <LineChart
      data={data}
      width={Dimensions.get('window').width - 20} // from react-native
      height={220}
      yAxisLabel="kg CO2"
      yAxisSuffix=""
      chartConfig={{
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(223, 83, 65, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(223, 83, 65, ${opacity})`,
      }}
      bezier
    />
  );
};

export default LineChartCarbonExample;
