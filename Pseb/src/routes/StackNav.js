import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useLinkProps } from '@react-navigation/native';
// import Login from '../screens/Login';
import StartScreen from '../screens/StartScreen';
import Articles from '../screens/Articles';
import EventsAndDel from '../screens/EventsAndDel';

import AppStore from '../screens/AppStore';
import Notification from '../screens/Notification';
import TechLead from '../screens/TechLead';
import Login1 from '../screens/Login1';
import SearchResults from '../screens/SearchResults';

// NDC SCREENS
import Plans from '../screens/ndcScreens/Plans';
import PlanDetail from '../screens/ndcScreens/PlanDetail';
import Redeem from '../screens/ndcScreens/Redeem';
import MyCoupons from '../screens/ndcScreens/MyCoupons';
import History from '../screens/ndcScreens/History';
import Clinic from '../screens/ndcScreens/clinic/Clinic';
import AboutDoctor from '../screens/ndcScreens/clinic/AboutDoctor';
import BookAppointment from '../screens/ndcScreens/clinic/BookAppointment';
import NewAppointment from '../screens/ndcScreens/clinic/NewAppointment';
import AvailableDietitians from '../screens/ndcScreens/clinic/AvailableDietitians';
import TestLogin from '../screens/ndcScreens/TestLogin';
import Services from '../screens/Services';



const Stack = createNativeStackNavigator();

const StackNav = (props) => {

  return (
    <Stack.Navigator
      // initialRouteName={getData === "mansoor@gmail.com" ? "Articles" : "StartScreen"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'vertical',
        animation: 'slide_from_bottom',
      }}>
   
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="Articles" component={Articles} />
      <Stack.Screen name="EventsAndDel" component={EventsAndDel} />
      <Stack.Screen name="AppStore" component={AppStore} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="TechLead" component={TechLead} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Login1" component={Login1} />
      <Stack.Screen name="SearchResults" component={SearchResults} />

      {/* NDC */}
      <Stack.Screen name="Redeem" component={Redeem} />
      <Stack.Screen name="MyCoupons" component={MyCoupons} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Clinic" component={Clinic} />
      <Stack.Screen name="AboutDoctor" component={AboutDoctor}
        initialParams={props?.route?.params}
      />
      <Stack.Screen name="BookAppointment" component={BookAppointment}
        initialParams={props?.route?.params}
      />
      <Stack.Screen name="NewAppointment" component={NewAppointment} />
      <Stack.Screen name="AvailableDietitians" component={AvailableDietitians} />

      <Stack.Screen name="TestLogin" component={TestLogin} />
      <Stack.Screen name="Plans" component={Plans} />
      <Stack.Screen name="PlanDetail" component={PlanDetail}
        initialParams={props?.route?.params}

      />
    </Stack.Navigator>
  );
};

export default StackNav;
