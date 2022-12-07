import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, Dimensions, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, height } = Dimensions.get('screen');

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidpassword, setCheckValidPassword] = useState(false);
  const [hidepassword, setHidePassword] = useState(true);
  const [Loader, setLoader] = useState(false)



  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]??[0-9]{3}[-\s.]?[0-9]{4,6} $/m;

    setEmail(text);
    if (re.test(text) || regex.test(text) || text === '') {

      setCheckValidEmail(false);
    }
    else {
      setCheckValidEmail(true);
    }


  };


  const handlepassword = (text) => {
    let re = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/m;
    setPassword(text);
    if (re.test(text) || text === '') {

      setCheckValidPassword(false);
    }
    else {
      setCheckValidPassword(true);
    }


  };



  return (
    <ScrollView
      showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, height: height }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '15%', backgroundColor: '#9A478D', borderBottomLeftRadius: 60 }}>


          <Text
            style={{
              fontSize: 30,
              fontFamily: "SemiBold",
              alignSelf: "center",
              color: '#fff',

            }}>SIGN IN</Text>

        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

          <Image source={require('.././assets/B-logo.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderBottomWidth: 2,
          marginTop: 20,
          paddingHorizontal: 10,
          borderColor: "#9A478D",
          borderRadius: 20,
          paddingVertical: 5
        }}>

          <TextInput
            placeholder="Email"
            placeholderTextColor="#000"
            style={{ paddingHorizontal: 10 }}
            value={email}
            onChangeText={(text) => handleCheckEmail(text)}
          />


        </View>
        {checkValidEmail ? <Text style={styles.textfailed}>Wrong format email</Text> : <Text></Text>}

        <View style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'space-around',
          marginHorizontal: 55,
          borderBottomWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#9A478D",
          borderRadius: 20,
          paddingVertical: 5
        }}>

          <TextInput
            secureTextEntry={hidepassword}
            placeholder="Password"
            placeholderTextColor="#000"
            style={{ left: -35 }}
            value={password}
            onChangeText={(text) => handlepassword(text)}
          />


          <Icon name='eye' size={18}
            onPress={() => setHidePassword(!hidepassword)}

          />

        </View>
        {checkValidpassword ? <Text style={styles.textfailed}>Wrong format email</Text> : <Text></Text>}


        <TouchableOpacity
          onPress={() => {
            setLoader(true);
            setTimeout(() => {
              props.navigation.navigate('Home1')
              setLoader(false);
            }, 1000);
          }}
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            backgroundColor: "#9A478D",
            paddingVertical: 10,
            borderRadius: 23
          }}>
          {Loader === false && <Text style={{
            color: "white",
            fontFamily: "SemiBold",
            fontSize: 18
          }}>Sign In</Text>}
          {Loader == true && <ActivityIndicator size={20} color="#fff" />}
        </TouchableOpacity>




        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 20, }}>
          <View style={{ borderBottomWidth: 1, borderColor: '#A9A9A9', top: -20 }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 35, }}>Create account</Text>
            </TouchableOpacity>
          </View>


          <TouchableOpacity onPress={() => props.navigation.navigate('Forgot')} >
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Forgot password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )

}

export default Signup


const styles = StyleSheet.create({
  textfailed: {
    color: '#F5333F',
    fontSize: 16,
    textAlign: 'center',
    left: 50,
    top: 5
  }
});