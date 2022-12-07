// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Forgot from '../screens/ForgotScreen';
import Home from '../screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notification from '../screens/Notification';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather'
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import AboutUs from '../screens/AboutUs';
import SubCategories from '../screens/SubCategories';
import Product from '../screens/Product';
import ProductDetail from '../screens/ProductDetail';
import ResetPassword from '../screens/ResetPassword';
import OtpScreen from '../screens/OtpScreen';
import Stater from '../screens/Stater';
import OnBoardingScreen from '../components/OnBoardingScreen';



const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

function TabNav() {
  return (
    <Tab.Navigator barStyle={{
      backgroundColor: '#9A478D',
      height: 30,
      width: "100%",
      alignItems: "center",
      justifyContent: 'center',

    }}>


      <Tab.Screen options={{

        tabBarLabel: "",
        tabBarIcon: ({ color, focused }) => (
          <Icon
            name="home"
            size={25}
            color={focused === true ? "#000000" : "#ffffff"} />

        ),




      }} name="Home Screen" component={Home} />




      <Tab.Screen options={{

        tabBarLabel: "",
        tabBarIcon: ({ color, focused }) => (
          <Icon name="bell" size={25} color={focused === true ? "#000000" : "#ffffff"} />

        ),


      }} name="Notification" component={Notification} />





      <Tab.Screen options={{

        tabBarLabel: "",
        tabBarIcon: ({ color, focused }) => (
          <Icon name="shopping-cart" size={25} color={focused === true ? "#000000" : "#ffffff"} />


        ),

        //tabBarIndicatorStyle: { backgroundColor: 'red' }
      }} name="Cart" component={CartScreen} />



      <Tab.Screen options={{

        tabBarLabel: "",
        tabBarIcon: ({ color, focused }) => (
          <Icon name="user" size={25} color={focused === true ? "#000000" : "#ffffff"} />
        ),

      }} name="Account" component={AccountScreen} />

    </Tab.Navigator>
  )

}


function DrawerNav() {
  return (
    <Drawer.Navigator  screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor:'#9A478D',
      drawerActiveTintColor: "#fff",
      

       drawerStyle: {
        backgroundColor: '#EEEEEE',
        elevation: 10,
        borderBottomRightRadius:50,
        borderTopRightRadius:10,
        width:220,
      },
      
    }}>
     
  
      
      <Drawer.Screen name="Home" component={TabNav} options={{
        headerShown: false
      }} />
      <Drawer.Screen name="Notify" component={Notification} options={{
        headerShown: false
      }} />
      <Drawer.Screen name="About" component={AboutUs} options={{
        headerShown: false
      }} />



    </Drawer.Navigator>
  )
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        
        {
          headerShown: false
      
        }
      }>
    
   
        <Stack.Screen name="starter" component={Stater} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen}/>
        <Stack.Screen name="Home1" component={DrawerNav} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ProductCategories" component={SubCategories} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

export default Navigation;