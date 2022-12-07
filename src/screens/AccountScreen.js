import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const AccountScreen = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View
        style={{
          height: '35%',
          backgroundColor: '#9A478D',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50



        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()} >
            <Icon name="menu" size={35} color="#fff" style={{ paddingLeft: 10, top: 10 }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialCommunityIcons name="account-outline" size={30} color="#fff" style={{ paddingRight: 10, top: 10 }} />
          </TouchableOpacity>

        </View>




        <View style={{ justifyContent: 'center', alignItems: 'center' }}>


          <View style={{ justifyContent: 'center', alignItems: 'center', height: 120, width: 120, backgroundColor: '#fff', borderRadius: 50, borderWidth: 2, borderColor: '#fff' }}>
            <Image source={require('../assets/profile.jpg')}

              style={{ width: 115, height: 115, borderRadius: 50 }}
            />

          </View>



          <Text style={{ fontSize: 18, color: '#fff', paddingVertical: 5 }}>M.K Connects</Text>
          <Text style={{ fontSize: 13, color: '#fff', paddingHorizontal: 80, textAlign: 'center', paddingVertical: 5 }}>Work hard In Silence Let Your Succes Be The Note</Text>

        </View>

      </View>





      <ScrollView
        pagingEnabled={false}
        showsVerticalScrollIndicator={false}>


        <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#9A478D', marginHorizontal: 20, }}>

          <View style={{ height: 70, width: 350, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>

            <MaterialCommunityIcons name="view-dashboard-edit-outline" size={25} color="#000" style={{ left: -15 }} />

            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Dashboard</Text>
            <TouchableOpacity>
              <Icon name="arrow-right" size={30} color="#000" style={{ left: -13 }} />
            </TouchableOpacity>

          </View>


          <View style={{ height: 70, width: 350, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <EvilIcons name="cart" size={25} color="#000" style={{ left: -25 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Orders</Text>
            <TouchableOpacity>
              <Icon name="arrow-right" size={30} color="#000" style={{ left: -5 }} />
            </TouchableOpacity>
          </View>



        </View>


        {/* 2nd Portion */}




        <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: '#9A478D', marginTop: 20, marginBottom: 50, marginHorizontal: 20 }}>

          <View style={{ height: 70, width: 350, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
            <Image source={require('../assets/subscription.png')} style={{ height: 25, width: 25, left: 5 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Subscriptions</Text>
            <TouchableOpacity>
              <Icon name="arrow-right" size={30} color="#000" style={{ left: -36 }} />
            </TouchableOpacity>
          </View>

          <View style={{ height: 70, width: 350, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Image source={require('../assets/Download.png')} style={{ height: 25, width: 25 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Downloads</Text>
            <TouchableOpacity>
              <Icon name="arrow-right" size={30} color="#000" style={{ left: -32 }} />
            </TouchableOpacity>
          </View>

          <View style={{ height: 70, width: 350, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Image source={require('../assets/Addresses.png')} style={{ height: 25, width: 25 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Addresses</Text>
            <TouchableOpacity>
              <Icon name="arrow-right" size={30} color="#000" style={{ left: -31 }} />
            </TouchableOpacity>
          </View>

          <View style={{ height: 70, width: 350, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Image source={require('../assets/Account.png')} style={{ height: 25, width: 25, left: 7 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold', }}>Account DetaiL</Text>
            <TouchableOpacity>
              <Icon name="arrow-right" size={30} color="#000" style={{ left: -36 }} />
            </TouchableOpacity>
          </View>

          <View style={{ height: 70, width: 350, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Image source={require('../assets/Logout.png')} style={{ height: 25, width: 25, left: -2 }} />
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Logout</Text>
            <TouchableOpacity>
              <Icon name="arrow-right" size={30} color="#000" style={{ left: -28 }} />
            </TouchableOpacity>
          </View>




        </View>




      </ScrollView>




    </View>
  )
}

export default AccountScreen