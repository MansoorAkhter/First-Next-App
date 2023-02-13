import { Text, View, ImageBackground, TouchableOpacity, StyleSheet, Image, Button, Modal, TouchableWithoutFeedback, Pressable } from 'react-native';
import React, { useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import Netinfo from './Netinfo';
import { ASSETS } from '../assets';

const Articles = ({ navigation }) => {
  const [netInfo, setNetInfo] = useState(false);

  console.log(netInfo, '==netInfo==');

  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);

    setNetInfo(state.isConnected);
  });

  return (
    <View style={{ flex: 1 }}>
      {netInfo === true ? (
        <ImageBackground style={styles.noNetwork} source={ASSETS.gradientBG}>

          <TouchableOpacity
            style={styles.arrowBack}
            onPress={() => navigation.goBack()}>
            <Image source={ASSETS.back_arrow} style={styles.arrowIcon} />
          </TouchableOpacity>

          <Image source={ASSETS.appLogo} style={styles.appLogo} />
          <Text style={styles.message}>Coming soon...</Text>
           </ImageBackground>
      ) : (
        <Netinfo />
      )}
    </View>
  );
};

export default Articles;


const styles = StyleSheet.create({
  noNetwork: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 15,
  },
  appLogo: {
    width: 152,
    height: 42.3,
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
  },
  message: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  arrowIcon: {
    width: 23,
    height: 23,
  },
  arrowBack: { position: 'absolute', top: 25, left: 20 },
})