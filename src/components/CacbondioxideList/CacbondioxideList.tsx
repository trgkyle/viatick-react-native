import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

type Item = {
  id: string;
  title: string;
};

const DATA: Item[] = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  {id: '4', title: 'Item 4'},
  {id: '5', title: 'Item 5'},
];

const ITEM_WIDTH = 140;
const ITEM_HEIGHT = 100;
const CENTER_ITEM_WIDTH = 200;
const CENTER_ITEM_HEIGHT = 200;
const ITEM_SPACING = 10;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: '#ccc',
    marginHorizontal: ITEM_SPACING / 2,
    borderRadius: 10,
  },
  centerItem: {
    width: CENTER_ITEM_WIDTH,
    height: CENTER_ITEM_HEIGHT,
    backgroundColor: 'red',
    marginHorizontal: ITEM_SPACING / 2,
    borderRadius: 10,
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
        <Text>{item.title}</Text>
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
