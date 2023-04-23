import {StackNavigationProp} from '@react-navigation/stack';
import {AppliancesStackParamList} from '../../navigation/stack.types';

type AppliancesScreenNavigationProp = StackNavigationProp<
  AppliancesStackParamList,
  'AppliancesScreen'
>;

export type AppliancesScreenProps = {
  navigation: AppliancesScreenNavigationProp;
};
