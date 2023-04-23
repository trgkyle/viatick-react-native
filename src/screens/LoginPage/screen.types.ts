import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/stack.types';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};
