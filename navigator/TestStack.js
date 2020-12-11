import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Ascreen from '../Ascreen';
import Bscreen from '../Bscreen';

const Stack = createStackNavigator();

const TestStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}}>
      <Stack.Screen name="Ascreen" component={Ascreen} />
      <Stack.Screen name="Bscreen" component={Bscreen} />
    </Stack.Navigator>
  );
};

export default TestStack;
