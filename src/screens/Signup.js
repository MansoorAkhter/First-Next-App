import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Modal
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign'
const { height, width } = Dimensions.get('screen');
import OTPTextView from 'react-native-otp-textinput';

import OtpScreen from './OtpScreen';

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setotp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [hidepassword, setHidePassword] = useState(true);
  const [confirmhidepassword, setConfirmHidePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidName, setCheckValidName] = useState(false);
  const [checkValidpassword, setCheckValidPassword] = useState(false);
  const [checkValidconfirmpassword, setCheckValidConfirmPassword] = useState(false);
  const [isModalVisible, setisModalVisible] = useState(false);






  const handlecheckconfirmpassword = () => {
    let Namere = /^[a-zA-Z0-9]+$/;
    let Emailre = /\S+@\S+\.\S+/;
    let passwordre = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (passwordre.test(password) && password != '' && Namere.test(name) && Emailre.test(email) && email != '' && name != '') {

      if (password == confirmpassword) {

        // props.navigation.navigate('Home')
        // setCheckValidConfirmPassword(false);
        setisModalVisible(true)
      }
      else {

        setCheckValidConfirmPassword(true);
      }

      // setCheckValidPassword(false);

    }
    else {
      setCheckValidPassword(true);
      setCheckValidName(true);
      setCheckValidEmail(true);
    }




  }

  console.log(name, email, password);


  return (
    <View style={{ flex: 1, height: height }}>
      <ScrollView style={{ flex: 1, }}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'SemiBold',
                alignSelf: 'center',
                color: '#fff',
              }}>
              SIGN UP
            </Text>
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('.././assets/B-logo.png')}
              style={{ width: 200, height: 200 }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 55,
              borderBottomWidth: 2,
              marginTop: -10,
              paddingHorizontal: 10,
              borderColor: "#9A478D",
              borderRadius: 20,
              paddingVertical: 10,
              marginVertical: 10
            }}>
            <TextInput
              placeholder="User Name"
              placeholderTextColor="#000"
              style={{ paddingHorizontal: 10 }}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          {checkValidName ? <Text style={styles.textfailed1}>Wrong format username</Text> : <Text></Text>}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginHorizontal: 55,
              borderBottomWidth: 2,
              marginTop: -20,
              paddingHorizontal: 10,
              borderColor: "#9A478D",
              borderRadius: 20,
              paddingVertical: 5
            }}>
            <TextInput
              placeholder="Email"
              placeholderTextColor="#000"
              style={{ paddingHorizontal: 10 }}
              value={email} onChancls
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          {checkValidEmail ? <Text style={styles.textfailed}>Wrong format email</Text> : <Text></Text>}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-around',
              marginHorizontal: 55,
              borderBottomWidth: 2,
              marginTop: 5,
              borderColor: "#9A478D",
              borderRadius: 20,
            }}>
            <TextInput
              secureTextEntry={hidepassword}
              placeholder="Password"
              placeholderTextColor="#000"
              style={{ left: -30 }}
              value={password}
              onChangeText={(text) => setPassword(text)}

            />
            <Icon name='eye' size={18}
              onPress={() => setHidePassword(!hidepassword)}
            />
          </View>
          {checkValidpassword ? <Text style={styles.textfailed2}>Wrong format Password</Text> : <Text></Text>}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-around',
              marginHorizontal: 55,
              borderBottomWidth: 2,
              paddingHorizontal: 20,
              borderColor: "#9A478D",
              borderRadius: 20,
              paddingVertical: 5,

            }}>
            <TextInput
              secureTextEntry={confirmhidepassword}
              placeholder="Confirm password"
              placeholderTextColor="#000"
              style={{ left: -20 }}
              value={confirmpassword}
              onChangeText={(text) => setConfirmPassword(text)}
            />
            <Icon name='eye' size={18}
              onPress={() => setConfirmHidePassword(!confirmhidepassword)}
            />
          </View>
          {checkValidconfirmpassword ? <Text style={styles.textfailed2}> Confirm Password Wrong</Text> : <Text></Text>}

          <TouchableOpacity
            style={{
              marginHorizontal: 55,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              backgroundColor: '#9A478D',
              paddingVertical: 10,
              borderRadius: 23,
            }}

            onPress={() => handlecheckconfirmpassword()}>

            <Text
              style={{
                color: 'white',
                fontFamily: 'SemiBold',
                fontSize: 18,
              }}>
              Register
            </Text>

          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}
            style={{ justifyContent: 'center', alignItems: 'center', top: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Already have an account?</Text>
          </TouchableOpacity>




        </View>



      </ScrollView>



      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setisModalVisible(false)}>

        <View style={{
          width: width,
          height: 250,
          backgroundColor: "#9A478D",
          borderTopLeftRadius: 80,
          borderTopRightRadius: 80,
          position: 'absolute',
          bottom: 0,
          elevation: 10,
          justifyContent: 'center',
          alignItems: 'center',


        }}>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
            <Icon name="lock" size={21} color="white" />
            <Text style={{ fontSize: 17, color: '#fff', marginLeft: 10 }}>Confirm Your Mobile Number</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <OTPTextView
              onChangeText={(text) => {
                props.navigation.navigate('Home1')
              }}
              textInputStyle={{
                borderColor: '#fff',
                borderWidth: 1,
                borderRadius: 10,
                backgroundColor: '#fff',

              }}
              tintColor={'#9A478D'}
              offTintColor={'#fff'}



            />
          </View>

        </View>


      </Modal>

    </View>
  );
};

export default Signup;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: height

  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15%',
    backgroundColor: '#9A478D',
    borderBottomLeftRadius: 60,
  },


  textfailed: {
    color: '#F5333F',
    fontSize: 16,
    textAlign: 'center',
    left: 55
  },
  textfailed1: {
    color: '#F5333F',
    fontSize: 16,
    textAlign: 'center',
    left: 40,
    top: -10
  },
  textfailed2: {
    color: '#F5333F',
    fontSize: 16,
    textAlign: 'center',
    left: 40,
    top: -1
  },


});