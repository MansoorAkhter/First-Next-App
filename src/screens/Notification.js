import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const Notification = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <View
        style={{
          height: '30%',
          backgroundColor: '#9A478D',
          flexDirection: 'row',


        }}>
        <TouchableOpacity onPress={() => props.navigation.openDrawer()} >
          <Icon name="menu" size={35} color="#fff" style={{ paddingLeft: 10, top: 10 }} />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 20, top: -82}}>
          <Text style={{ fontSize: 25, color: '#fff' }}>NOTIFICATIONS</Text>
        </View>

      </View>



    </View>
  )
}

export default Notification