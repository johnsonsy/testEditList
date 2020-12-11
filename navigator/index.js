import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import TestStack from './TestStack';

const AppContainer = () => {
  return (
    <NavigationContainer>
      <TestStack />
    </NavigationContainer>
  );
};

export default AppContainer;
