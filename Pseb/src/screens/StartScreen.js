import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Modal
} from 'react-native';
import React from 'react';
import Search from '../components/Search';
import { ASSETS, COLOR } from '../assets';
import { useNavigation } from '@react-navigation/native';
import Notification from './Notification';

const StartScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={ASSETS.whyPakBanner}
        resizeMode="cover"
        style={{ flex: 1, height: height }}>
        <Image source={ASSETS.techDes_logo} style={styles.logo} />
        {/* Notification Icon */}
        {/* <TouchableOpacity
          style={styles.bellicon}
        >
          <Image source={ASSETS.bell_icon} style={styles.pngIcons} />
        </TouchableOpacity> */}

        <View style={{ marginTop: 0 }}>

          {/* <Text style={styles.heading}>Tech Destination</Text> */}

          <View style={{ alignItems: 'center' }}>
            <Search />
          </View>
          <View style={styles.homeIconsContainer}>
            <HomeIcon name="Articles" component="Articles" />
            <HomeIcon name="Events & Delegation" component="EventsAndDel" />
            <HomeIcon name="App Store" component="AppStore" />
            <HomeIcon name="Company" component="Login1" />
            <HomeIcon name="Techleads" component="TechLead" />
            <HomeIcon name="Services" component="Services" />
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default StartScreen;

const { width, height } = Dimensions.get('screen');

export const HomeIcon = prop => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.homeIconWrapper}
      onPress={() => navigation.navigate(prop?.component)}>
      <Text style={styles.homeIconText}>{prop.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 50,
    marginVertical: 15,
    alignSelf: 'center',
  },
  heading: {
    color: COLOR.PRIMARY,
    fontSize: 17,
    alignSelf: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: '#0004',
  },
  pngIcons: {
    height: 30,
    width: 30,
    tintColor: '#72A3B0',
  },
  bellicon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  homeIconWrapper: {
    backgroundColor: COLOR.PRIMARY,
    width: width / 2.5,
    height: height / 5,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 4,
    },
    shadowOpacity: 1.0,
    shadowRadius: 1.46,
    elevation: 15,
  },
  homeIconText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  homeIconsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
