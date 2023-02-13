import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProductCollection = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#184074'}}>
      <View
        style={{
          flex: 7,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          <TouchableOpacity>
            <Ionicons name="reorder-three-sharp" size={40} color="#fff" />
          </TouchableOpacity>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity>
              <Ionicons
                name="md-chevron-back"
                size={28}
                color="#fff"
                style={{right: 90}}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                position: 'absolute',
                alignSelf: 'center',
              }}>
              Back
            </Text>
          </View>

          <TouchableOpacity>
            <Ionicons name="settings-sharp" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, bottom:25}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image
                source={require('../assets/dummyTextileLogo.png')}
                style={{width: 70, height: 47, margin: 15, tintColor:"#fff"}}
              />
            <Text style={{color: '#fff'}}>PRODUCT COLLECTION</Text>
            <Text style={{color: '#fff'}}>**********</Text>

            <Image
              source={require('../assets/dummyBedroom.jpeg')}
              style={{width: 270, height: 200, margin: 15}}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 4,
          backgroundColor: '#fff',
          justifyContent: 'space-around',
        }}>

          <View style={{}}>
            <Text>Product Table</Text>
          </View>
        </View>
    </View>
  );
};

export default ProductCollection;

const styles = StyleSheet.create({});
