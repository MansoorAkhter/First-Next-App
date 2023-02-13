import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup } from '../forms/Signup';
import Login from '../forms/Login';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name='Signup' component={Signup}/>
       <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
  )
}

export default StackNav