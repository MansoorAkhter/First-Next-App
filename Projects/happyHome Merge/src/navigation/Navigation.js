// In App.js in a new project
import * as React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Forgot from '../screens/ForgotScreen';
import Home from '../screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notification from '../screens/Notification';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CartScreen from '../screens/CartScreen';
import AccountScreen from '../screens/AccountScreen';
import AboutUs from '../screens/AboutUs';
import SubCategories from '../screens/SubCategories';
import Product from '../screens/Product';
import ProductDetail from '../screens/ProductDetail';
import ResetPassword from '../screens/ResetPassword';
import OtpScreen from '../screens/OtpScreen';
import OnBoardingScreen from '../components/OnBoardingScreen';
import Category from '../screens/Category';
import Deals from '../screens/Deals';
import CustomDrawerNavigator from '../screens/CustomDrawerNavigator';
import Orders from '../screens/Orders';
import LanguageScreen from '../screens/LanguageScreen';
import ProductCategory from '../screens/ProductCategory';
import Wishlist from '../screens/Wishlist';
import PlaceOrder from '../screens/PlaceOrder';
import Profile from '../screens/Profile';






const Drawer = createDrawerNavigator();
// const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

// function TabNav() {

//   return (
//     // <Tab.Navigator barStyle={{
//     //   backgroundColor: '#9A478D',
//     //   height: 50,
//     //   width: "100%",
//     //   alignItems: "center",
//     //   justifyContent: 'center',
//     // }}>


//     //   <Tab.Screen options={{
//     //     tabBarLabel: "Home",
//     //     tabBarIcon: ({focused }) =>{

//     //        return(
//     //       <View style={{ justifyContent: "center", alignItems: "center" }}>
//     //         <Icon name="home" size={25} color={focused ? "#000000" : "#ffffff"} />
//     //       </View>

//     //     )}
//     //   }} name="Home Screen" component={Home}/>


//     //   <Tab.Screen options={{

//     //     tabBarLabel: "Category",
//     //     tabBarIcon: ({ focused }) => (
//     //       // <MaterialIcons name="category" size={25} color={focused ? "#000000" : "#ffffff"} />
//     //       <Image source={require('../assets/Category.png')} style={{ height: 25, width: 25,
//     //       tintColor: focused ? "#000000" : "#ffffff" }} />

//     //     ),}} name="Category" component={Category} />


//     //   <Tab.Screen options={{

//     //     tabBarLabel: "Deals",
//     //     tabBarIcon: ({focused }) => (
//     //       <AntDesign name="tagso" size={25} color={focused ? "#000000" : "#ffffff"} />


//     //     ),}} name="Deal" component={Deals} />



//     //   <Tab.Screen options={{
//     //     tabBarLabel: "Cart",
//     //     tabBarIcon: ({focused }) => (
//     //       <EvilIcons name="cart" size={28} color={focused ? "#000000" : "#ffffff"} />

//     //     ),}} name="Cart" component={CartScreen} />



//     //   <Tab.Screen options={{

//     //     tabBarLabel: "Account",
//     //     tabBarIcon: ({focused }) => (
//     //       <Icon name="user" size={25} color={focused ? "#000000" : "#ffffff"} />
//     //     ),

//     //   }} name="Account" component={AccountScreen} />

//     // </Tab.Navigator>

//   )

// }





// function DrawerNav() {
//   return (
//     <Drawer.Navigator drawerContent={props => <CustomDrawerNavigator {...props} />}

//       screenOptions={{
//         headerShown: false,
//         drawerActiveBackgroundColor: '#fff',
//         drawerActiveTintColor: '#000',
//         drawerInactiveTintColor: '#000',
//         drawerLabelStyle: { marginLeft: -20, fontFamily: 'Roboto-Medium', fontSize: 15 },
//       }}>

//       <Drawer.Screen name="Home" component={Home} options={{
//         drawerIcon: ({ color }) => (
//           <Icon name="home" size={25} color={color} />
//         )
//       }} />
//       <Drawer.Screen name="Notify" component={Notification} options={{
//         drawerIcon: ({ color }) => (
//           <AntDesign name="bells" size={25} color={color} />
//         )
//       }} />
//       <Drawer.Screen name="About" component={AboutUs} options={{
//         drawerIcon: ({ color }) => (
//           <Feather name="info" size={25} color={color} />
//         )
//       }} />
//       <Drawer.Screen name="Category" component={Category} options={{
//         drawerIcon: ({ color }) => (
//           <MaterialIcons name="category" size={25} color={color} />
//         )
//       }} />


//     </Drawer.Navigator>
//   );
// }


function Navigation() {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }} >
      {/* <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} /> */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SubCategories" component={SubCategories} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      {/* Bottom, Screens  */}
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Deal" component={Deals} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="More" component={AccountScreen} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="ProductCategory" component={ProductCategory} />
      {/* More */}
      <Stack.Screen name="Wishlist" component={Wishlist} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}

export default Navigation;