import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, DefaultTheme, Text} from 'react-native-paper';
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

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#DF5341',
    },
  };

  return (
    <View>
      <View style={styles.buttonWrapper}>
        <Button
          mode={chartType === 'energy' ? 'contained' : 'outlined'}
          theme={theme}
          onPress={() => setChartType('energy')}>
          Energy
        </Button>
        <Button
          mode={chartType === '$ cost' ? 'contained' : 'outlined'}
          theme={theme}
          onPress={() => setChartType('$ cost')}>
          Cost
        </Button>
        <Button
          mode={chartType === 'carbon' ? 'contained' : 'outlined'}
          theme={theme}
          onPress={() => setChartType('carbon')}>
          Carbon
        </Button>
      </View>
      <View style={styles.wrapperChartContent}>
        {renderChart()}
        <View>
          <Text style={styles.chartContentTitle}>
            Comparison to previous period
          </Text>
          <View style={styles.chartContentWrapper}>
            <Text style={styles.chartContentDescriptionTitle}>Date Period</Text>
            <Text style={styles.chartContentDescriptionValue}>
              5-Feb to 28-Feb-2023
            </Text>
          </View>
          <View style={styles.chartContentWrapper}>
            <Text style={styles.chartContentDescriptionTitle}>
              Total of Previous period
            </Text>
            <Text style={styles.chartContentDescriptionValue}>259.06 kWh</Text>
          </View>
          <View style={styles.chartContentWrapper}>
            <Text style={styles.chartContentDescriptionTitle}>% change</Text>
            <Text style={[styles.chartContentDescriptionValue, {color: 'red'}]}>
              + 12.09%
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.chartContentTitle}>
            Daily Average this period
          </Text>
          <View style={styles.chartContentWrapper}>
            <Text style={styles.chartContentDescriptionTitle}>Average</Text>
            <Text style={styles.chartContentDescriptionValue}>12.10kWh</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chartContentWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  wrapperChartContent: {
    padding: 10,
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  chartContentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  chartContentDescriptionTitle: {
    fontSize: 14,
    fontWeight: '400',
  },
  chartContentDescriptionValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 5,
    borderRadius: 30,
  },
});
export default TabChartComponent;
