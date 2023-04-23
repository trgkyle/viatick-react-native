import {StackNavigationProp} from '@react-navigation/stack';
import {SettingsStackParamList} from '../../navigation/stack.types';

type SettingsScreenNavigationProp = StackNavigationProp<
  SettingsStackParamList,
  'SettingsScreen'
>;

export type SettingsScreenProps = {
  navigation: SettingsScreenNavigationProp;
};
