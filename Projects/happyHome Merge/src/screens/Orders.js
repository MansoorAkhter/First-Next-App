import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PendingOrders from './ordersScreens/PendingOrders';
import DeliveredOrders from './ordersScreens/DeliveredOrders';
import ReturnOrders from './ordersScreens/ReturnOrders';
import CancelOrders from './ordersScreens/CancelOrders';
import BuyAgain from './ordersScreens/BuyAgain';


const Tab = createMaterialTopTabNavigator();


const Orders = () => {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
    screenOptions={{
      tabBarIndicatorStyle:{backgroundColor:"#702963"},
      tabBarActiveTintColor: "#702963",
      tabBarLabelStyle: { fontSize: 10 },
      tabBarStyle: { backgroundColor: '#f5f5f5' },
    }}
  >
    <Tab.Screen
      name="Pending"
      component={PendingOrders}
      // options={{ tabBarLabel: 'Home' }}
    />
    <Tab.Screen
      name="Delivered"
      component={DeliveredOrders}
      // options={{ tabBarLabel: 'Home' }}
    />
    <Tab.Screen
      name="Return"
      component={ReturnOrders}
      // options={{ tabBarLabel: 'Updates' }}
    />
    <Tab.Screen
      name="Cancel"
      component={CancelOrders}
      // options={{ tabBarLabel: 'Profile' }}
    />
    {/* <Tab.Screen
      name="Buy Again"
      component={BuyAgain}
      // options={{ tabBarLabel: 'Profile' }}
    /> */}
  </Tab.Navigator>
  )
}

export default Orders