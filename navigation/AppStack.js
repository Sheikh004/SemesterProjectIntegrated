import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen,SignupScreen, ForgotPasswordScreen } from '../screens';
import  HomeScreen  from '../screens/HomeScreen';
import Chat from '../screens/Chat';
import List2 from '../screens/List2';
const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
     
      <Stack.Screen name='Home' component={HomeScreen} />
    
      <Stack.Screen name='Chat' component={Chat} />
      <Stack.Screen name='Signup' component={SignupScreen} />
      <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
      <Stack.Screen name='List2' component={List2} />
      
    </Stack.Navigator>
  );
};
