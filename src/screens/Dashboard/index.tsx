import React from 'react';
import {Button, Text} from 'react-native';
import {ScreenNames} from '../../navigation/screenNames';

export function Dashboard({navigation}: any) {
  return (
    <>
      <Text>Dashboard Home</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate(ScreenNames.DashboardDetailScreen)}
      />
    </>
  );
}
