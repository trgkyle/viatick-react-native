import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import DateRangePicker from '@components/DatePicker/DateRangePicker';
import {HomeScreenProps} from '@screens/HomePage/screen.types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ChartPageScreen: React.FC<HomeScreenProps> = () => {
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
        <Appbar.Content
          title={'Appliances'}
          style={styles.content}
          titleStyle={styles.title}
        />
        <Appbar.Action icon="equalizer" />
      </Appbar.Header>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <DateRangePicker />
        <View>
          <Text>Total Appliances: 7</Text>
          <TouchableOpacity style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon
                  name="air-conditioner"
                  size={50}
                  color={'#000'}
                  style={styles.iconStyle}
                />
              </View>
              <View>
                <Text style={styles.cardTitle}>Air Conditioning</Text>
                <Text style={styles.cardText}>Air Conditioning</Text>
              </View>
            </View>
            <Text style={styles.cardPrice}>40.04 SGD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon
                  name="water-boiler"
                  size={50}
                  color={'#000'}
                  style={styles.iconStyle}
                />
              </View>
              <View>
                <Text style={styles.cardTitle}>Water Heater</Text>
                <Text style={styles.cardText}>Water Heater</Text>
              </View>
            </View>
            <Text style={styles.cardPrice}>20.78 SGD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon
                  name="fridge"
                  size={50}
                  color={'#000'}
                  style={styles.iconStyle}
                />
              </View>
              <View>
                <Text style={styles.cardTitle}>Refrigerator</Text>
                <Text style={styles.cardText}>Refrigerator</Text>
              </View>
            </View>
            <Text style={styles.cardPrice}>10.21 SGD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon
                  name="washing-machine"
                  size={50}
                  color={'#000'}
                  style={styles.iconStyle}
                />
              </View>
              <View>
                <Text style={styles.cardTitle}>Washing Machine</Text>
                <Text style={styles.cardText}>Washing Machine</Text>
              </View>
            </View>
            <Text style={styles.cardPrice}>3.22 SGD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon
                  name="stove"
                  size={50}
                  color={'#000'}
                  style={styles.iconStyle}
                />
              </View>
              <View>
                <Text style={styles.cardTitle}>Electric Stove</Text>
                <Text style={styles.cardText}>Electric Stove</Text>
              </View>
            </View>
            <Text style={styles.cardPrice}>1.42 SGD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon
                  name="toaster-oven"
                  size={50}
                  color={'#000'}
                  style={styles.iconStyle}
                />
              </View>
              <View>
                <Text style={styles.cardTitle}>Microwave Oven</Text>
                <Text style={styles.cardText}>Microwave Oven</Text>
              </View>
            </View>
            <Text style={styles.cardPrice}>0.28 SGD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Icon
                  name="chair-rolling"
                  size={50}
                  color={'#000'}
                  style={styles.iconStyle}
                />
              </View>
              <View>
                <Text style={styles.cardTitle}>Massage chair</Text>
                <Text style={styles.cardText}>Massage chair</Text>
              </View>
            </View>
            <Text style={styles.cardPrice}>0.03 SGD</Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  cardPrice: {
    color: '#DB3B26',
    fontWeight: 'bold',
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
  iconStyle: {
    textAlign: 'center',
    borderColor: '#ED9D92',
    padding: 5,
    borderWidth: 5,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default ChartPageScreen;
