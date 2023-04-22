import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Appbar} from 'react-native-paper';
import DateRangePicker from '@components/DatePicker/DateRangePicker';
import {HomeScreenProps} from '@screens/HomePage/screen.types';
import TabComponent from '@components/TabChartComponent/TabChartComponent';
const ChartPageScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content
          title={'Charts'}
          style={styles.content}
          titleStyle={styles.title}
        />
        <Appbar.Action
          icon="filter"
          onPress={() => {
            navigation.navigate('NotificationScreen', {
              name: 'NotificationScreen',
            });
          }}
        />
      </Appbar.Header>
      <ScrollView contentContainerStyle={styles.container}>
        <DateRangePicker />
        <TabComponent />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flexGrow: 1,
    marginHorizontal: 10,
  },
  viewWrapper: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  appBar: {
    backgroundColor: '#F4F2F4',
    elevation: 0,
    justifyContent: 'space-between',
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60, // Adjust this value to center the logo
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 10,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#D8D6D9',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
  },
  consumptionDataWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
  },
  consumptionData: {
    flexDirection: 'row',
    marginRight: 20,
  },
  consumptionDataText: {
    fontSize: 18,
    marginLeft: 5,
  },
  providerWrapper: {
    marginTop: 20,
    marginBottom: 10,
  },
  providerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ChartPageScreen;
