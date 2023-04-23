import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface BarChartProps {
  data: {
    label: string;
    value: number;
    color: string;
  }[];
}

const HorizontalBarChartComponent: React.FC<BarChartProps> = ({data}) => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <View style={styles.container}>
      {data.map(item => (
        <View style={styles.barContainer} key={item.label}>
          <Text style={styles.label}>{item.label}</Text>
          <View
            style={[
              styles.bar,
              {
                width: `${(item.value / maxValue) * 50}%`,
                backgroundColor: item.color,
              },
            ]}
          />
          <Text style={styles.value}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    // paddingHorizontal: 16,
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
    width: 70,
    // flex: 1,
    marginRight: 8,
    // width: 100,
  },
  bar: {
    height: 16,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  value: {
    marginLeft: 8,
  },
});

export default HorizontalBarChartComponent;
