import { View, Text, Dimensions, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import CategorySLider from '../components/CategorySLider'
import Icon from 'react-native-vector-icons/Feather'
import Search, { LocationBar } from '../components/Search';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const Category = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {/* <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
        <Icon name="menu" size={35} color="#fff" style={{ paddingLeft: 10, top: 10 }} />
      </TouchableOpacity> */}

      <Search />
      {/* <LocationBar /> */}
      <CategorySLider />
    </View>
  )
}

export default Category