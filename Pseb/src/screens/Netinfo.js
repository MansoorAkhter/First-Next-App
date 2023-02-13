import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {ASSETS} from '../assets';
import {useNavigation} from '@react-navigation/native';

const Netinfo = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground style={styles.noNetwork} source={ASSETS.gradientBG}>
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.goBack()}>
        <Image source={ASSETS.back_arrow} style={styles.arrowIcon} />
      </TouchableOpacity>
      <Image source={ASSETS.appLogo} style={styles.appLogo} />
      <Image source={ASSETS.netDisconnected} style={styles.noNetIcon} />
      <Text style={styles.message}>
        No internet connection. Make sure that Wi-Fi or Mobile Data is turned
        on, then try again.
      </Text>
    </ImageBackground>
  );
};

export default Netinfo;

const styles = StyleSheet.create({
  noNetwork: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 15,
  },
  noNetIcon: {
    tintColor: 'grey',
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  message: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'center',
  },
  appLogo: {
    width: 152,
    height: 42.3,
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
  },
  arrowIcon: {
    width: 23,
    height: 23,
  },
  arrowBack: {position: 'absolute', top: 25, left: 20},
});
