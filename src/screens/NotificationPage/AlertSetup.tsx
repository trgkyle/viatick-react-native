import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Appbar, IconButton, List, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NotificationProps} from '../HomePage/screen.types';
import {Dimensions} from 'react-native';
export type Notification = {
  id: number;
  title: string;
  description: string;
};

const notifications: Notification[] = [
  {
    id: 1,
    title: 'Appliance Fault',
    description: 'Water Heater showing high energy load than usual',
  },
  {
    id: 2,
    title: 'Warning',
    description:
      'Your energy use increased significantly this month than last month',
  },
  {
    id: 3,
    title: 'Fault',
    description: 'Air con is showing heavy load than usual',
  },
  {
    id: 4,
    title: 'Fault',
    description: 'Air con is showing heavy load than usual',
  },
  {
    id: 5,
    title: 'Warning',
    description: 'Appliance ABC is not working',
  },
  {
    id: 6,
    title: 'Warning',
    description: 'Appliance ABC is not working',
  },
  {
    id: 7,
    title: 'Warning',
    description: 'Appliance ABC is not working',
  },
  {
    id: 8,
    title: 'Warning',
    description: 'Appliance ABC is not working',
  },
  {
    id: 9,
    title: 'Warning',
    description: 'Appliance ABC is not working',
  },
];

const iconRenderItem = () => (
  <Icon name="arrow-back" size={24} color={'#000'} />
);

const AlertSetupScreen: React.FC<NotificationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <IconButton
          icon={() => iconRenderItem()}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title={'Alert Setup'}
          style={styles.content}
          titleStyle={styles.title}
        />
      </Appbar.Header>
      <ScrollView style={styles.listContainer}>
        {notifications.map((notification, index) => (
          <View style={styles.itemWrapper} key={index}>
            <List.Item
              titleStyle={{color: '#DB3B26'}}
              title={notification.title}
              description={notification.description}
              style={styles.listItem}
            />
            <Switch style={styles.switchStyle} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const widthScreen = Dimensions.get('window').width;

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
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
    flexShrink: 9,
    width: widthScreen - 100,
  },
  switchStyle: {
    flexShrink: 1,
  },
});

export default AlertSetupScreen;
