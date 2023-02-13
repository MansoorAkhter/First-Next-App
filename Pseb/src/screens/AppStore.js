import { View} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import Netinfo from './Netinfo';
import { useDimensions } from '@react-native-community/hooks';

const AppStore = ({navigation}) => {
  const [netInfo, setNetInfo] = useState(false);
  const { width, height } = useDimensions().window;
  
  // const {width, height} = Dimensions.get('screen');
  console.log(netInfo, '==netInfo==');

  

  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);

    setNetInfo(state.isConnected);
  });
  return (
    <View style={{flex: 1}}>
      {netInfo === true ? (
        <WebView
          source={{uri: 'https://app.techdestination.com/marketplace_public'}}
          style={height <= 650 ? {marginBottom:-height/0.0817, marginTop: height/-11} : {marginBottom:-height/0.108, marginTop: height/-11}}
          javaScriptEnabled={true}
          cacheMode="LOAD_CACHE_ELSE_NETWORK"
          cacheEnabled
          startInLoadingState
          sharedCookiesEnabled={true}
          showsVerticalScrollIndicator={false}
          onError={() =>
            alert('Something went wrong \n Please Try Again Later !')
          }
          allowFileAccess={true}
          // scalesPageToFit={true}
          originWhitelist={['*']}
        />
      ) : (<Netinfo/>
      )}
    </View>
  );
};

export default AppStore;