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

const BarcodeReader = () => {
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

        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View style={{alignItems:"center", justifyContent:"center"}}>
            <Text style={{color: '#fff'}}>SCAN THIS QR CODE</Text>

            <Image
              source={require('../assets/barcode.png')}
              style={{width: 160, height: 160, margin: 15}}
            />
            <Text style={{color: '#fff'}}>LPD-PD-01</Text>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              bottom: -40,
            }}>
            <Text style={{color: '#fff', fontSize: 18}}>YOUR NAME</Text>
            <Text style={{color: '#fff', fontSize: 15}}>
              your-email@email.com
            </Text>
          </View>
          
        </View>
      </View>

      <View
        style={{
          flex: 4,
          backgroundColor: '#fff',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{color: '#000', alignSelf: 'center', top: 20, fontSize: 16}}>
          Can't scan the QR code?
        </Text>

        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}>
          <Image
            source={require('../assets/grslogo.jpeg')}
            style={{width: 100, height: 100, margin: 15}}
          />
          <Image
            source={require('../assets/oekeoTEX.png')}
            style={{width: 120, height: 60, margin: 15}}
          />
          <Image
            source={require('../assets/gots.jpg')}
            style={{width: 70, height: 70, margin: 15}}
          />
        </View>

        <Text style={{color: '#000', alignSelf: 'center', bottom: 10}}>
          www.libertymillslimited.com
        </Text>
      </View>
    </View>
  );
};

export default BarcodeReader;

const styles = StyleSheet.create({});
