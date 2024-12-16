// src/navigation/OnboardingStack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './OnboardingScreen';

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
