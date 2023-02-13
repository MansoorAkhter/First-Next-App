import { Dimensions, View } from 'react-native';
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import Netinfo from './Netinfo';

const TechLead = ({ navigation }) => {
  const [netInfo, setNetInfo] = useState(false);
  console.log(netInfo, '==netInfo==');

  const {width, height} = Dimensions.get('window');

  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);

    setNetInfo(state.isConnected);
  });

  return (
    <View style={{ flex: 1 }}>
      {netInfo === true ? (
        <WebView
          source={{ uri: 'https://techleads.techdestination.com/' }}
          style={{ marginBottom: -height/1.45 }}
          cacheMode="LOAD_CACHE_ELSE_NETWORK"
          cacheEnabled
          startInLoadingState
          sharedCookiesEnabled={true}
          showsVerticalScrollIndicator={false}
          onError={() =>
            alert('Something went wrong \n Please Try Again Later !')
          }
          allowFileAccess={true}
          scalesPageToFit={true}
          originWhitelist={['*']}
        />
      ) : (
        <Netinfo />
      )}
    </View>
  );
};

export default TechLead;