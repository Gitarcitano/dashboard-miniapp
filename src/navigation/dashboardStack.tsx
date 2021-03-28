import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ScreenNames} from './screenNames';
import {MainStackParams} from './navigation';
import {Dashboard} from '../screens/Dashboard';
import {DashboardDetails} from '../screens/DashboardDetails';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator<MainStackParams>();

export const DashboardStack: React.FC = () => (
  <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName={ScreenNames.DashboardScreen}>
      <Stack.Screen name={ScreenNames.DashboardScreen} component={Dashboard} />
      <Stack.Screen
        name={ScreenNames.DashboardDetailScreen}
        component={DashboardDetails}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
