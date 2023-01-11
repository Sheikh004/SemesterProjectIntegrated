import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../screens/Chat';
import List2 from '../screens/List2';
import { LoginScreen, SignupScreen, ForgotPasswordScreen } from '../screens';
import  HomeScreen  from '../screens/HomeScreen';
const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
       <Stack.Screen name='Home' component={HomeScreen} />
      
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
      <Stack.Screen name='List2' component={List2} />
      <Stack.Screen name='Chat' component={Chat} />
      
    </Stack.Navigator>
  );
};
