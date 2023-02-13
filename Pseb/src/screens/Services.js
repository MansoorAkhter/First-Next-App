
import { View } from 'react-native';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import Netinfo from './Netinfo';
import { useDimensions } from '@react-native-community/hooks';

const Services = ({ navigation }) => {
  const [netInfo, setNetInfo] = useState(false);
  const { width, height } = useDimensions().window;

  console.log(netInfo, '==netInfo==');
  console.log(width, "===", height);


  // // Check Net Connectivity
  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);

    setNetInfo(state.isConnected);
  });
  return (
    <View style={{ flex: 1 }}>
      {netInfo === true ? (
        <WebView
          source={{ uri: 'https://app.techdestination.com/marketplace_public' }}
          style={height <= 650 ? { marginBottom: -height / 1.4, marginTop: height / -0.131 } : { marginBottom: -height / 1.7, marginTop: height / -0.17 }}
          javaScriptEnabled={true}
          cacheMode="LOAD_CACHE_ELSE_NETWORK"
          cacheEnabled
          scalesPageToFit
          startInLoadingState
          sharedCookiesEnabled={true}
          showsVerticalScrollIndicator={false}
          onError={() =>
            alert('Something went wrong \n Please Try Again Later !')
          }
          allowFileAccess={true}
          originWhitelist={['*']}
        />
      ) : (<Netinfo />
      )}
    </View>
  );
};

export default Services;