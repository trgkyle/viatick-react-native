import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Appbar, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NotificationProps} from '../HomePage/screen.types';

const iconRenderItem = () => (
  <Icon name="arrow-back" size={24} color={'#000'} />
);
const FeedbackScreen: React.FC<NotificationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <IconButton
          icon={() => iconRenderItem()}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title={'Give us your feedback'}
          style={styles.content}
          titleStyle={styles.title}
        />
      </Appbar.Header>
      <ScrollView style={styles.listContainer}></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -40,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listItem: {
    backgroundColor: '#E8E6E9',
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
});

export default FeedbackScreen;
