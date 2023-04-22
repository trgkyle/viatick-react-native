import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import BarChartExample from './BarChartExample';
import LineChartCarbonExample from './LineChartCarbonExample';
import LineChartEnergyExample from './LineChartEnergyExample';

type ChartType = 'energy' | '$ cost' | 'carbon';

const TabChartComponent: React.FC = () => {
  const [chartType, setChartType] = useState<ChartType>('energy');

  const renderChart = () => {
    switch (chartType) {
      case 'energy':
        return <LineChartEnergyExample /* chart data for energy */ />;
      case '$ cost':
        return <BarChartExample /* chart data for cost */ />;
      case 'carbon':
        return <LineChartCarbonExample /* chart data for carbon footprint */ />;
      default:
        return null;
    }
  };

  return (
    <View>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          mode={chartType === 'energy' ? 'contained' : 'outlined'}
          onPress={() => setChartType('energy')}>
          Energy
        </Button>
        <Button
          style={styles.button}
          mode={chartType === '$ cost' ? 'contained' : 'outlined'}
          onPress={() => setChartType('$ cost')}>
          Cost
        </Button>
        <Button
          style={styles.button}
          mode={chartType === 'carbon' ? 'contained' : 'outlined'}
          onPress={() => setChartType('carbon')}>
          Carbon
        </Button>
      </View>
      {renderChart()}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 5,
    borderRadius: 30,
  },
  button: {
    borderColor: '#fff',
  },
});
export default TabChartComponent;
