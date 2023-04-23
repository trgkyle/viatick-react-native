import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Item = {
  id: string;
  icon: string;
  title: string;
  price: number;
};

const DATA: Item[] = [
  {
    id: '1',
    icon: 'phone',
    title: 'Same as carbon dioxide emissions from smartphones charged',
    price: 439.46,
  },
  {
    id: '2',
    icon: 'trash-can',
    title: 'Same as carbon dioxide emissions from smartphones charged',
    price: 300.32,
  },
];

const ITEM_WIDTH = 300;
const ITEM_HEIGHT = 100;
const CENTER_ITEM_WIDTH = 300;
const CENTER_ITEM_HEIGHT = 120;
const ITEM_SPACING = 10;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    marginHorizontal: ITEM_SPACING / 2,
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
  centerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: CENTER_ITEM_WIDTH,
    height: CENTER_ITEM_HEIGHT,
    marginHorizontal: ITEM_SPACING / 2,
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
  icon: {
    color: '#4E4D50',
    fontSize: 30,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '400',
  },
  price: {
    color: '#F79944',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textWrapper: {
    flex: 1,
  },
});

const CacbondioxideList = () => {
  const [centerIndex, setCenterIndex] = useState(2);
  const flatListRef = useRef<FlatList<Item>>(null);

  const onMomentumScrollEnd = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(
      contentOffset / (CENTER_ITEM_WIDTH + ITEM_SPACING),
    );
    setCenterIndex(index);
  };

  const scrollToCenterItem = () => {
    const x = centerIndex * (CENTER_ITEM_WIDTH + ITEM_SPACING);
    flatListRef.current?.scrollToOffset({offset: x, animated: false});
  };

  const renderItem = ({item, index}: {item: Item; index: number}) => {
    const isCenter = index === centerIndex;
    const itemStyle = isCenter ? styles.centerItem : styles.item;
    return (
      <View style={itemStyle}>
        <Icon name={item.icon} color="#4E4D50" size={60} />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        contentContainerStyle={{alignItems: 'center'}}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CENTER_ITEM_WIDTH + ITEM_SPACING}
        decelerationRate="fast"
        onMomentumScrollEnd={onMomentumScrollEnd}
        onLayout={scrollToCenterItem}
        getItemLayout={(data, index) => ({
          length: CENTER_ITEM_WIDTH + ITEM_SPACING,
          offset: (CENTER_ITEM_WIDTH + ITEM_SPACING) * index,
          index,
        })}
        initialNumToRender={5}
        windowSize={5}
        maxToRenderPerBatch={5}
      />
    </View>
  );
};
export default CacbondioxideList;
