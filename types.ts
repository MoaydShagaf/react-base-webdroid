import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

export type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
};

export type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};
