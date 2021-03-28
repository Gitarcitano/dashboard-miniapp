import {ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreenNames} from './screenNames';

export type BaseStackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> = StackNavigationProp<ParamList, RouteName>;

export type MainStackParams = {
  [ScreenNames.DashboardScreen]: undefined;
  [ScreenNames.DashboardDetailScreen]: undefined;
};
