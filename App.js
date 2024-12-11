import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing screens
import LoginScreen from './screens/loginscreen';
import SignInScreen from './screens/Signin';
import Service from './screens/Service';
import Map from './screens/map';
import DoctorProfile from './screens/DoctorProfile';
import DoctorList from './screens/DoctorList';
import Booking from './screens/Booking';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Service" component={Service} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
        <Stack.Screen name="DoctorList" component={DoctorList} />
        <Stack.Screen name="Booking" component={Booking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

