import React from 'react';
import {Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional color function
      strokeWidth: 2, // optional width of the chart bars, defaults to 1
    },
  ],
};

const BarChartExample: React.FC = () => {
  return (
    <BarChart
      data={data}
      width={Dimensions.get('window').width - 20} // from react-native
      height={220}
      yAxisLabel="$"
      yAxisSuffix="k"
      chartConfig={{
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(223, 83, 65, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(223, 83, 65, ${opacity})`,
      }}
      verticalLabelRotation={-30}
    />
  );
};

export default BarChartExample;
