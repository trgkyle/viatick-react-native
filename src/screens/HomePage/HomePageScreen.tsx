import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import HeaderLogo from '@components/Logo/LogoHeader';
import DateRangePicker from '@components/DatePicker/DateRangePicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreenProps} from './screen.types';
import CacbondioxideList from '@components/CacbondioxideList/CacbondioxideList';
import Provider from '@components/Provider/Provider';
import {providerData} from '@constants/mockData';
import HorizontalBarChart from '@components/HorizontalBarChart/HorizontalBarChart';
import EnergySavingTips from '@components/EnergySavingTips/EnergySavingTips';

const HomePage: React.FC<HomeScreenProps> = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <>
      <Appbar.Header style={styles.appBar}>
        <View style={styles.logoContainer}>
          <HeaderLogo />
        </View>
        <Appbar.Action
          icon="bell"
          onPress={() => {
            navigation.navigate('NotificationScreen', {
              name: 'NotificationScreen',
            });
          }}
        />
      </Appbar.Header>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <DateRangePicker />
        <View style={styles.viewWrapper}>
          <View style={styles.cardImageWrapper}>
            <View style={styles.cardImageLeft}>
              <Text style={styles.cardImageTextTitle}>Air Conditioner</Text>
              <Text style={styles.cardImageTextValue}>59%</Text>
            </View>
            <View style={styles.cardImageRight}>
              <Text style={styles.cardImageTextTitle}>Water Heater</Text>
              <Text style={styles.cardImageTextValue}>41%</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Your consumption data</Text>
            <View style={styles.consumptionDataWrapper}>
              <View style={styles.consumptionData}>
                <Icon name="lightning-bolt" size={30} color={'#fff'} />
                <Text style={styles.consumptionDataText}>8.35 kWh</Text>
              </View>
              <View style={styles.consumptionData}>
                <Icon name="currency-usd" size={30} color={'#fff'} />
                <Text style={styles.consumptionDataText}>2.61 SGD</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.providerTitleWrapper}>
              <Text style={styles.providerTitle}>Select your provider</Text>
              <Icon name="chevron-down" size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={styles.providerWrapper}>
              <View style={styles.providerCardWrapper}>
                {providerData.map((p, i) => (
                  <Provider key={i} data={p} />
                ))}
              </View>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Comparison to the similar Condominium household in NEA study
            </Text>
            <Text style={styles.cardText}>Difference: -20.63 %</Text>
            <View style={styles.horizontalBar} />
            <View>
              <HorizontalBarChart />
            </View>
          </View>
          <CacbondioxideList />
          <EnergySavingTips />
          {/* <View style={styles.card}>
          </View> */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  viewWrapper: {
    flexGrow: 1,
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
  cardImageWrapper: {
    flexDirection: 'row',
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
  cardImageLeft: {
    width: '59%',
    height: 150,
    backgroundColor: '#DF5341',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  cardImageRight: {
    width: '41%',
    height: 150,
    backgroundColor: '#555459',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  cardImageTextTitle: {
    marginLeft: 5,
    color: '#fff',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  cardImageTextValue: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
  cardTitle: {
    fontSize: 16,
    // fontWeight: 'bold',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#DB3B26',
  },
  consumptionDataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  consumptionData: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#DB3B26',
  },
  consumptionDataText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
  providerWrapper: {
    flexDirection: 'column',
    marginTop: 10,
  },
  providerCardWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    flexBasis: 3,
  },
  providerTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: -10,
  },
  horizontalBar: {
    borderWidth: 1,
    borderColor: '#E8E5E8',
  },
  providerTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#DB3B26',
  },
});

export default HomePage;
