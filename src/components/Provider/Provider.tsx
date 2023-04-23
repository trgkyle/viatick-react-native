import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text} from 'react-native-paper';
import {IproviderData} from '../../constants/mockData';

const Provider = ({data}: {data: IproviderData}) => {
  return (
    <>
      <TouchableOpacity style={styles.card}>
        <Image source={data.imagePath} style={styles.logo} />
        <Text style={styles.cardTitle}>{data.name}</Text>
        <Text style={styles.cardText}>SGD {data.price}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '31%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 5,
    marginVertical: 5,
    padding: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: 'bold',
    color: '#DB3B26',
  },
  logo: {
    width: '50%',
    height: 40,
    resizeMode: 'contain',
  },
});

export default Provider;
