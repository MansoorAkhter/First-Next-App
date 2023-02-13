import { View } from 'react-native';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import Netinfo from './Netinfo';
import { useDimensions } from '@react-native-community/hooks';

const Login1 = ({ navigation }) => {
  const [netInfo, setNetInfo] = useState(false);
  const { width, height } = useDimensions().window;
  console.log(width, "===", height);

  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);

    setNetInfo(state.isConnected);
  });
  return (
    <View style={{ flex: 1 }}>
      {netInfo === true ? (
        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: 'https://app.techdestination.com/login' }}
            style={height <= 650 ? { marginTop: height / -12, marginBottom: height / -0.85 } : { marginTop: height / -16, marginBottom: -height / 0.0100 }}
            allowFileAccess={true}
            javaScriptEnabled={true}
            sharedCookiesEnabled={true}
            scalesPageToFit={true}
            cacheMode="LOAD_CACHE_ELSE_NETWORK"
            cacheEnabled
            originWhitelist={['*']}
            startInLoadingState
            showsVerticalScrollIndicator={false}
            onError={() =>
              alert('Something went wrong \n Please Try Again Later !')
            }
          />
          {height >= 785 ? (<View style={{ width: width, height: 55, backgroundColor: "#E0F2F2", position: "absolute", bottom: 0 }} />) : null}
        </View>

      ) : (
        <Netinfo />
      )}

      {/* #E0F2F2 */}
    </View>
  );
};

export default Login1;
