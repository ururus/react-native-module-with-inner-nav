import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstPage from './First';
import SecondPage from './Second';
import ThirdPage from './Third';

const Tab = createBottomTabNavigator();
import { FunctionsProvider } from './contexts/functionsContext';

// @ts-ignore
export const ComplicatedModal = ({ navigator }): JSX.Element => {
  return (
    <FunctionsProvider navigator={navigator}>
      <Tab.Navigator>
        <Tab.Screen name="FIRST" component={FirstPage} />
        <Tab.Screen name="SECOND" component={SecondPage} />
        <Tab.Screen name="THIRD" component={ThirdPage} />
      </Tab.Navigator>
    </FunctionsProvider>
  );
};
