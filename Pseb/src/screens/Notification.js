import {
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {ASSETS, COLOR} from '../assets';

const Notification = () => {
  return (
    <ImageBackground
      source={ASSETS.NotificationBG}
      resizeMode="cover"
      style={{flex: 1}}>
      <Image source={ASSETS.techDes_logo} style={styles.logo} />

      <View style={{marginTop: 35}}>
        <Text style={styles.notificationHeading}>Notification</Text>

        <View style={styles.notifContainer}>
          <Pressable
            android_ripple={{color: COLOR.SECONDARY, borderless:true}}
            style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.notificationText}>
              New Notification for Text Event
            </Text>
          </Pressable>
        </View>

        <View style={styles.notifContainer}>
          <Pressable
            android_ripple={{color: COLOR.SECONDARY, borderless:true}}
            style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.notificationText}>
              New Notification for Text Event
            </Text>
          </Pressable>
        </View>

        <View style={styles.notifContainer}>
          <Pressable
            android_ripple={{color: COLOR.SECONDARY, borderless:true}}
            style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.notificationText}>
              New Notification for Text Event
            </Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Notification;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 50,
    marginVertical: 15,
    alignSelf: 'center',
  },
  notificationHeading: {
    fontSize: 30,
    color: COLOR.PRIMARY,
    fontWeight: '700',
    paddingLeft: 15,
    marginBottom: 25,
  },
  notifContainer: {
    height: 50,
    width: '100%',
    backgroundColor: COLOR.PRIMARY,
    justifyContent: 'center',
    marginBottom: 2,
  },
  notificationText: {
    color: '#fff',
    fontSize: 18,
    marginLeft:15
  },
  pressedItem: {
    opacity: 0.5,
  },
});
