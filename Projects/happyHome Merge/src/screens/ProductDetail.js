import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image, ActivityIndicator, Dimensions } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import Slider from '../components/Slider';
import ProductSlider from '../components/ProductSlider';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteToCart } from '../redux/cartSlice'
import { selectCartItem, selectCartItemWithID } from '../redux/cartSlice'
import Search, { LocationBar } from '../components/Search';
import ProductComponent from "../components/ProductComponent"
import { Checkbox } from 'react-native-paper';
// const [quantity, setQuantity] = useState(0)
// const [itemQuantity, setItemQuantity] = useState()
// const getSingleItemQuantity = useSelector(state => selectCartItem(state, id))
// const dispatch = useDispatch()

// { id, name, image, size, price, descripton, quantity: quantity + 1 }

const { height, width } = Dimensions.get("screen")

const ProductDetail = (props) => {
  const dispatch = useDispatch()
  const [images, setImages] = useState([])
  const [checked, setChecked] = React.useState(false);

  const { descripton, id, name, image, price, region, size } = props?.route?.params?.item

  const addToCartHandler = () => {
    dispatch(addToCart({ id, name, image, price, size, descripton, quantity: 1 }))

    setTimeout(() => {
      props.navigation.navigate("Cart")
    }, 300)
  }

  useEffect(() => {
    setImages(image)
  }, [image])

  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      {/* 
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}>
        <AntDesign name="arrowleft" size={25} color="#fff" style={{
          left: -60
        }} />
      </TouchableOpacity> */}
      <Search />
      <LocationBar />

      <ScrollView
        style={{ flex: 1, backgroundColor: "#F5F5F5" }}
        contentContainerStyle={{ paddingBottom: 110 }}
        showsVerticalScrollIndicator={false}
      >

        {/* IMAGE SLIDER */}
        <View style={{ alignItems: 'center', width: width, alignSelf: "center", backgroundColor: "#fff", padding: 15, }}>

          <View style={{ width: "100%", height: 150, alignItems: "center", marginTop: 10, marginBottom: 20 }}>
            <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />
            {/* <Slider images={{"images" : image}} /> */}
          </View>

          <View style={{ position: "absolute", right: 10, top: 10 }}>
            <MaterialCommunityIcons name="heart-outline" size={20} color="#aaa" style={{ marginBottom: 9 }} />
            <MaterialCommunityIcons name="share-variant-outline" size={20} color="#aaa" />
          </View>

          <View style={{ width: "100%" }}>
            <Text style={{ color: "grey", fontWeight: "300", marginBottom: 5 }}>More From <Text style={{ color: '#9A478D', fontWeight: "500" }}>Nestle</Text></Text>

            <Text style={[styles.textStyle, { fontSize: 15 }]}>{name}</Text>
            <Text style={[styles.textStyle, { fontSize: 15 }]}>SAR {price}.00
              <Text style={{ color: "#aaa", fontWeight: "300", fontSize: 10 }}>  (Inc.VAT)</Text>
            </Text>

            {/* Delivery time */}
            <View style={{ backgroundColor: "#eee", borderRadius: 5, flexDirection: "row", alignItems: "center", height: 35, marginVertical: 15 }}>

              <MaterialCommunityIcons name='truck-delivery-outline' color="#000" size={20} style={{ marginLeft: 15 }} />

              <Text style={{ fontWeight: "300", fontSize: 12, color: "#000", marginHorizontal: 10 }}>
                Standard Delivery
              </Text>
              <Text style={[styles.textStyle, { fontSize: 12 }]}>
                Tomorrow 10 AM - 11 PM
              </Text>

            </View>

            <Text style={{ color: "#aaa", fontWeight: "300", fontSize: 13 }}>Sold & Delivered by Happy Home</Text>

            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <MaterialCommunityIcons name="map-marker-outline" size={16} color="#000" style={{ marginRight: 5 }} />
              <Text style={{ color: "#000", fontWeight: "300", fontSize: 13 }}>
                Origin - </Text>
              <Text style={{ color: "#000", fontWeight: "600", fontSize: 13 }}>
                Pakistan</Text>
            </View>

          </View>
        </View>

        {/* INGREDIENTS */}
        <View style={{ backgroundColor: "#fff", padding: 15, marginTop: 8 }}>
          <Text style={styles.textStyle}>INGREDIENTS</Text>
          <Text style={styles.liteText}>Carbonated water . sugar . color . phosphoric acid . caffeine . emulsifier . natural flavor</Text>
        </View>

        {/* Description */}
        <View style={{ backgroundColor: "#fff", padding: 15, marginTop: 8 }}>
          <Text style={styles.textStyle}>DESCRIPTION</Text>
          <Text style={styles.liteText}>{descripton}</Text>
        </View>

        {/* Frequently bought together */}
        <View style={{ backgroundColor: "#fff", padding: 15, marginTop: 8 }}>
          <Text style={[styles.textStyle, { marginBottom: 8, fontSize: 15, }]}>Frequently bought together</Text>

          <View style={{ borderColor: "#ddd", borderWidth: 1, borderRadius: 5, padding: 5 }}>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Checkbox
                uncheckedColor='#ccc'
                color='#9A478D'
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
              <Image source={require("../assets/sofri.jpg")}
                style={{ width: 45, height: 45, marginHorizontal: 10 }} />

              <View style={{ justifyContent: "center", height: 50, width: "72%" }}>
                <Text style={{ color: "#000", fontWeight: "300", fontSize: 13 }}>
                  Choco Safari by dark chocolate</Text>

                <View style={{flexDirection:"row"}}>
                  <Text style={[styles.textStyle, { color: '#DD2326' }]}>
                    SAR 15.00 </Text>
                  <Text style={{ fontSize: 12, fontWeight: "300", color: "#aaa", textDecorationLine: "line-through", marginLeft:5 }}>25.00 SAR</Text>
                </View>

              </View>

            </View>

          </View>
        </View>

        {/*  Recently Viewed Items */}
        <View style={{ backgroundColor: "#fff", paddingTop: 15, marginTop: 8 }}>
          <Text style={[styles.textStyle, { marginLeft: 15 }]}>
            Recently Viewed Items
          </Text>
          <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            style={{ width: width, flexDirection: "row" }} contentContainerStyle={{ paddingVertical: 10, paddingRight: 6 }}>
            <ProductComponent />
            <ProductComponent />
            <ProductComponent />
          </ScrollView>
        </View>

      </ScrollView>

      {/* add to cart button */}
      <View style={{ backgroundColor: "#fff", paddingHorizontal: 15, paddingVertical: 8, position: "absolute", bottom: 55, width: width, borderWidth: 1, borderColor: "#ddd" }}>
        <TouchableOpacity
          onPress={addToCartHandler}
          activeOpacity={0.7}
          style={{ backgroundColor: "#702963", padding: 7, borderRadius: 5, justifyContent: "center", alignItems: "center" }}>
          <Text style={[styles.textStyle, { color: "#fff" }]}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}


export default ProductDetail

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 13, color: '#000', fontWeight: "600",
  },
  liteText: {
    color: "#000", fontWeight: "300", fontSize: 12, marginTop: 8
  }
});
