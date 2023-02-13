import {
  Dimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import Netinfo from './Netinfo';

const EventsAndDel = ({navigation}) => {
  const [netInfo, setNetInfo] = useState(false);
  const {width, height} = Dimensions.get('window');

  console.log(netInfo, '==netInfo==');
  // console.log(navigation, '==navigation==');

  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);

    setNetInfo(state.isConnected);
  });
  return (
    <View style={{flex: 1}}>
      {netInfo === true ? (
        <WebView
          source={{
            uri: 'https://app.techdestination.com/events-and-delegations',
          }}
          style={{marginBottom:-height/2.2, marginTop: height/-6}}
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
        <Netinfo/>
      )}
    </View>
  );
};

export default EventsAndDel;
