import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/stack.types';

type NotificationScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  'NotificationScreen',
  'TestScreen'
>;

export type HomeScreenProps = {
  navigation: NotificationScreenNavigationProp;
};
export type NotificationProps = {
  navigation: NotificationScreenNavigationProp;
};
