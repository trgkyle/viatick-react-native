import React from 'react';
import {Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [200, 250, 300, 280, 260, 290],
      color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // optional color function
      strokeWidth: 2, // optional width of the chart line, defaults to 1
    },
  ],
};

const LineChartEnergyExample: React.FC = () => {
  return (
    <LineChart
      data={data}
      width={Dimensions.get('window').width - 20} // from react-native
      height={220}
      yAxisLabel="kWh"
      yAxisSuffix=""
      chartConfig={{
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(223, 83, 65, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(223, 83, 65, ${opacity})`,
        style: {
          borderRadius: 16,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default LineChartEnergyExample;
