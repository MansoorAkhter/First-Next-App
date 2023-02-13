import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLOR} from '../assets/assets';
import {ASSETS} from '../assets';

const {width, height} = Dimensions.get('window');

const Login = ({navigation}) => {
  return (
    <>
      <ImageBackground
        source={ASSETS.login_Bg}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: 'center',
          width: width,
          height: height,
        }}>
        {/* Login */}
        <ScrollView style={{marginTop: 40}}>
          {/* LOGO */}
          <View style={{alignItems: 'center', marginBottom: 30}}>
            <Image source={ASSETS.techDes_logo} style={styles.logo} />
          </View>

          {/* Login Heading */}
          <View style={styles.loginHeadContainer}>
            <Text style={styles.loginHeading}>Login your Account</Text>
          </View>

          {/* INFO TEXT */}
          <View style={styles.infoTextWrapper}>
            <Text style={styles.infoText}>
              Please fill in the following details{'\n'}to start your
              registration process.
            </Text>
          </View>

          {/* INPUTS */}
          <View style={styles.inputsWrapper}>
            <TextInput
              placeholder="Enter Email..."
              style={styles.loginInputs}
            />
            <TextInput
              placeholder="Enter Password..."
              style={styles.loginInputs}
            />

            <Text style={styles.forgetPswd}>Forget Password?</Text>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate('StartScreen')}>
              <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      {/* LOGO */}
      <View style={styles.fadeLogo}>
        <Image
          source={ASSETS.techDes_logo}
          style={[styles.logo, {opacity: 0.5}]}
        />
      </View>
      </ImageBackground>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginContainer: {
    flex: 1,
  },
  loginHeadContainer: {
    alignSelf: 'center',
  },
  loginHeading: {
    fontSize: 35,
    fontWeight: '700',
    color: COLOR.PRIMARY,
    margin: 20,
  },
  infoText: {
    color: COLOR.PRIMARY,
    alignSelf: 'center',
  },
  infoTextWrapper: {
    width: '60%',
    alignSelf: 'center',
    marginBottom: 40,
  },
  inputsWrapper: {
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginInputs: {
    borderColor: COLOR.PRIMARY,
    borderWidth: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    fontSize: 15,
    width: '100%',
  },
  forgetPswd: {
    color: COLOR.PRIMARY,
    fontSize: 15,
    marginTop: 10,
    fontWeight: '600',
  },
  loginBtn: {
    backgroundColor: COLOR.PRIMARY,
    width: '30%',
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 5,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  fadeLogo: {
    flex:1,
    alignItems: 'center',
    marginBottom: -30,
    bottom: 0,
    right: 20,
    alignSelf:"flex-end"
  },
});
