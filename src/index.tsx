import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstPage from './First';
import SecondPage from './Second';
import ThirdPage from './Third';

const Tab = createBottomTabNavigator();
import { FunctionsProvider } from './contexts/functionsContext';

export const ComplicatedModal = ({ onFinish = () => {} }): JSX.Element => {
  return (
    <FunctionsProvider onFinish={onFinish}>
      <Tab.Navigator>
        <Tab.Screen name="FIRST" component={FirstPage} />
        <Tab.Screen name="SECOND" component={SecondPage} />
        <Tab.Screen name="THIRD" component={ThirdPage} />
      </Tab.Navigator>
    </FunctionsProvider>
  );
};
