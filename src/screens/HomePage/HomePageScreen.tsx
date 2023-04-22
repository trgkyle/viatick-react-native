import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import HeaderLogo from '../../components/Logo/LogoHeader';
import DateRangePicker from '../../components/DatePicker/DateRangePicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {HomeScreenProps} from './screen.types';
import CacbondioxideList from '../../components/CacbondioxideList/CacbondioxideList';

const HomePage: React.FC<HomeScreenProps> = ({navigation}) => {
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
      <ScrollView contentContainerStyle={styles.container}>
        <DateRangePicker />
        <View style={styles.viewWrapper}>
          <View style={styles.card}>
            <View style={styles.cardImage} />
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Your consumption data</Text>
            <View style={styles.consumptionDataWrapper}>
              <View style={styles.consumptionData}>
                <Icon name="lightning-bolt" size={30} color={'#000000'} />
                <Text style={styles.consumptionDataText}>8.35 kWh</Text>
              </View>
              <View style={styles.consumptionData}>
                <Icon name="currency-usd" size={30} color={'#D8D6D9'} />
                <Text style={styles.consumptionDataText}>2.61 SGD</Text>
              </View>
            </View>
            <View style={styles.providerWrapper}>
              <Text style={styles.providerTitle}>Select your provider</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Comparison to the similar Condominium household in NEA study
            </Text>
            <Text style={styles.cardText}>Difference: -20.63 %</Text>
          </View>
          <CacbondioxideList />
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card 4</Text>
            <Text style={styles.cardText}>Some text goes here...</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card 5</Text>
            <Text style={styles.cardText}>Some text goes here...</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card 5</Text>
            <Text style={styles.cardText}>Some text goes here...</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card 5</Text>
            <Text style={styles.cardText}>Some text goes here...</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Card 5</Text>
            <Text style={styles.cardText}>Some text goes here...</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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

export default HomePage;
