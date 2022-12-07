import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ProductData1 } from '../components/ProductData'
const { width, height } = Dimensions.get('screen');

const CartScreen = (props) => {



  const Cartlist = ({ image, name, price, size, descripton, }) => {

    return (
      <View style={{ height: 150, width: width - 20, flexDirection: 'row', alignItems: 'center', paddingRight: 120, elevation: 2, backgroundColor: '#fff', borderRadius: 10, elevation: 2, marginHorizontal: 10, marginVertical: 10 }}>
        <TouchableOpacity
          activeOpacity={0.2}>
          <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#9A478D' }}>{name}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: '#DD2326' }}>Price: SAR{price}</Text>
          <Text style={{ fontSize: 14, }}>Size {size}</Text>
          <Text style={{ fontSize: 14, }}>{descripton}</Text>

        </View>

      </View>



    )
  }







  const CardItems = ({ item }) => {

    return (
      <Cartlist
        item={item}
        image={item.image}
        name={item.name}
        price={item.price}
        descripton={item.descripton}
        size={item.size}
      />
    )
  }



  return (



    <View style={{ flex: 1 }}>
      <View
        style={{
          height: 100,
          backgroundColor: '#9A478D',
          flexDirection: 'row',
          justifyContent: 'space-between',


        }}>



        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack()

          }}>
          <AntDesign name="arrowleft" size={25} color="#fff" style={{
            paddingLeft: 15, top: 15
          }} />
        </TouchableOpacity>

        <View style={{ justifyContent: 'center', alignItems: 'center', top: 20 }}>
          <Text style={{ fontSize: 30, color: '#fff', fontWeight: 'bold' }}>MY CART</Text>
        </View>

        <TouchableOpacity>
          <Ionicons name="md-cart-outline" size={30} color="#fff" style={{ paddingRight: 10, top: 10 }} />
        </TouchableOpacity>

      </View>





      {/* Cart DATA  SHOW*/}

      <ScrollView
        showsVerticalScrollIndicator={false}
      
      >
      <View style={{marginBottom:30}}>

        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={ProductData1.id}
          data={ProductData1}
          renderItem={CardItems}
        />

        </View>

      </ScrollView>





    </View>
  )
}



export default CartScreen