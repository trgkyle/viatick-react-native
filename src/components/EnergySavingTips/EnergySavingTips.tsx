import React, {useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Dimensions} from 'react-native';
import {View} from 'react-native';
import {dataSavingTips} from '@constants/mockData';

const width = Dimensions.get('window').width - 20;
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotPress = (index: number) => {
    setCurrentIndex(index);
    // carouselRef.current?.snapToItem(index);
  };

  const renderDot = (index: number) => {
    return (
      <TouchableOpacity
        key={index}
        style={[
          styles.dot,
          currentIndex === index ? styles.activeDot : styles.inactiveDot,
        ]}
        onPress={() => handleDotPress(index)}
      />
    );
  };

  return (
    <>
      <Carousel
        loop
        width={width}
        height={width / 2}
        data={dataSavingTips}
        onSnapToItem={handleDotPress}
        renderItem={({item}) => (
          <View style={styles.wrapper}>
            <Icon name={item.icon} color="#4E4D50" size={60} />
            <View style={styles.textWrapper}>
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.tip}>{item.tip}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.pagination}>
        {dataSavingTips.map((item, index) => renderDot(index))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginVertical: 20,
    borderRadius: 16,
    paddingLeft: 20,
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  },
  text: {
    color: '#F79944',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 10,
  },
  tip: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '400',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    marginBottom: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#DB3B26',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});
export default App;
