import {StackNavigationProp} from '@react-navigation/stack';
import {AppliancesStackParamList} from '../../navigation/stack.types';

type NotificationScreenNavigationProp = StackNavigationProp<
  AppliancesStackParamList,
  'AppliancesScreen'
>;

export type AppliancesScreenProps = {
  navigation: NotificationScreenNavigationProp;
};
