import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Appbar, IconButton, List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NotificationProps} from './screen.types';

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
const NotificationScreen: React.FC<NotificationProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <IconButton
          icon={() => iconRenderItem()}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title={'Alert Notifications'} />
      </Appbar.Header>
      <ScrollView style={styles.listContainer}>
        {notifications.map(notification => (
          <List.Item
            key={notification.id}
            titleStyle={{color: '#DB3B26'}}
            title={notification.title}
            description={notification.description}
            style={styles.listItem}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default NotificationScreen;
