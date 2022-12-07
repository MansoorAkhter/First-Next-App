import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons//AntDesign'

const Forgot = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection:'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: '15%',
          backgroundColor: '#9A478D',
          borderBottomLeftRadius: 60,
        }}>

        <TouchableOpacity
          onPress={() => props.navigation.goBack()}>
          <AntDesign name="arrowleft" size={20} color="#fff" style={{
            left: -35
          }} />
        </TouchableOpacity>

        <Text style={{
          fontSize: 30,
          fontFamily: 'SemiBold',
          alignSelf: 'center',
          color: '#fff',
        }}>Forgot Password</Text>

      </View>


      <View onPress={() => props.navigation.navigate('Login')}
        style={{ justifyContent: 'center', top: 50, paddingLeft: 40 }}>
        <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Forgot password ?</Text>
        <Text style={{ fontSize: 14, fontWeight: '500', color: '#A9A9A9', top: 10 }}>Enter Your Email and We'll Send You a Resend Link</Text>
      </View>



      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 25,
          borderBottomWidth: 2,
          marginTop: 100,
          paddingHorizontal: 10,
          borderColor: "#9A478D",
          borderRadius: 20,
          paddingVertical: 5
        }}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#000"
          style={{ paddingHorizontal: 10 }}
        />
      </View>


      <TouchableOpacity
        style={{
          marginHorizontal: 55,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 60,
          backgroundColor: '#9A478D',
          paddingVertical: 10,
          borderRadius: 23,
        }} onPress={() => props.navigation.navigate('ResetPassword')}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'SemiBold',
            fontSize: 18,
          }}>
          Forgot Password
        </Text>
      </TouchableOpacity>




    </View>
  )
}

export default Forgot