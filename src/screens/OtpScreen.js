import { View, Text, } from 'react-native'
import React from 'react';
// import OTPTextInput from 'react-native-otp-input';
import OTPTextView from 'react-native-otp-textinput';



const OtpScreen = () => {

    
  return (
  
          <OTPTextView textInputStyle={{
            borderColor:'#fff',
            borderWidth:1,
            borderRadius:10,
            backgroundColor:'#fff',

          }} 
              tintColor={'#9A478D'}
              offTintColor={'#fff'}
                          
          />
  
  )
}

export default OtpScreen