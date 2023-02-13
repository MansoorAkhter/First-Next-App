import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ProductData1 } from '../components/ProductData'
import { useSelector, useDispatch } from 'react-redux'
import { selectCartItem } from '../redux/cartSlice'
import { addToCart, deleteToCart, updateCart } from '../redux/cartSlice'
import InstantAdd from '../components/InstantAdd'
import { LocationBar } from '../components/Search'

const { width, height } = Dimensions.get('screen');

const CartScreen = (props) => {
  const getCartData = useSelector(selectCartItem)
  // console.log(getCartData, "===getCartData===")

  const CartItems = ({ item }) => {
    // <View style={{ backgroundColor: "#fff", width:width, alignItems:"center", marginVertical:10 }}>
    // <Text>Grocery</Text>
    // </View>
    return (
      <View style={{ alignItems: "center" }}>
        <Cartlist
          item={item}
          id={item?.id}
          size={item?.size}
          name={item?.name}
          price={item?.price}
          image={item?.image}
          quantity={item?.quantity}
          descripton={item?.descripton}
        />
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      <View
        style={{
          height: 50,
          backgroundColor: '#9A478D',
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row"
        }}>

        <TouchableOpacity
          style={{ position: "absolute", left: 10 }}
          onPress={() => {
            props.navigation.goBack()

          }}>
          <AntDesign name="arrowleft" size={25} color="#fff" />
        </TouchableOpacity>


        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>
          MY CART</Text>
      </View>
      <LocationBar />
      <ScrollView
        contentContainerStyle={{ paddingBottom: 190 }}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={{ color: "#000", fontWeight: "600", fontSize: 15, marginLeft: 7, marginTop: 15 }}>Items related to you cart</Text>
          <InstantAdd />
        </View>

        {/* Cart Flatlist*/}
        <View style={{ width: width / 1.02, backgroundColor: "#fff", paddingVertical: 5, borderRadius: 5, alignSelf: "center" }}>
          <Text style={{ color: "#000", fontWeight: "600", fontSize: 14, marginLeft: 20 }}>Grocery</Text>
          <FlatList
            data={getCartData}
            keyExtractor={getCartData?.id}
            renderItem={CartItems}
            showsVerticalScrollIndicator={false}
          />
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
            <Text style={{ fontWeight: "300", color: "#000", fontSize: 12 }}>Subtotal</Text>
            <Text style={{ fontWeight: "600", color: "#000", fontSize: 12 }}>SAR 45.00</Text>
          </View>
        </View>

        <View>
          <Text style={{ color: "#000", fontWeight: "600", fontSize: 15, marginLeft: 7, marginTop: 15 }}>Frequenlty bought together</Text>
          <InstantAdd />
          <Text style={{ color: "#000", fontWeight: "600", fontSize: 15, marginLeft: 7 }}>Recently viewed items</Text>
          <InstantAdd />
        </View>

      </ScrollView>

      {/* Check-Out  */}
      <View style={styles.checkoutContainer}>
        <View style={styles.checkoutWrapper}>

          <View style={{ justifyContent: "flex-start" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#000", fontWeight: "700", fontSize: 16 }}>Subtotal</Text>
              <Text style={{ color: "#5a5a5a", fontSize: 13, fontWeight: "600", marginLeft: 5 }}>(2 item)</Text>
            </View>
            <Text style={{ color: "#000", fontSize: 10, fontWeight: "300" }}>Delivery fees will be calculated at checkout</Text>
          </View>

          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Text style={{ color: "#000", fontWeight: "700", fontSize: 16 }}>SAR 255.00</Text>
            <Text style={{ color: "#000", fontSize: 10, fontWeight: "300" }}>VAT Inclusive</Text>
          </View>

        </View>

        {/* Checkout button */}
        <TouchableOpacity activeOpacity={0.8}
          onPress={() => props.navigation.navigate("PlaceOrder")}>
          <View style={styles.checkoutBTN}>
            <Text style={styles.checkoutBTNname}>CHECKOUT</Text>
          </View>
        </TouchableOpacity>

      </View>
      {/* Check-Out  */}
    </View>
  )
}

export default CartScreen

//// CartList Comp
export const Cartlist = ({
  item, id, image, name, price, size, descripton, quantity, gotoProductDetail }) => {
  const getCartData = useSelector(selectCartItem)
  const dispatch = useDispatch()
  const [itemQuantity, setItemQuantity] = useState(quantity)
  const [getQuantity, setGetQuantity] = useState()
  // const getSingleItemQuantity = useSelector(state => selectCartItem(state, id))
  // console.log(parseInt(itemQuantity), "*****")

  const addToCartHandler = () => {
    setItemQuantity(itemQuantity + 1)

    if (itemQuantity >= 1) {
      dispatch(updateCart())
    } else {
      setTimeout(() => {
        dispatch(addToCart({ id, name, image, price, size, descripton }))
      }, 500)
    }

  }

  const deleteToCartHandler = () => {
    setItemQuantity(itemQuantity - 1)

    if (itemQuantity > 1) {
      dispatch(updateCart())
    } else {
      dispatch(deleteToCart({ id }))
    }

    // if (getSingleItemQuantity.length > 0) {
    //   dispatch(deleteToCart({ id }))
    // }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("check cart item")}
    >
      <View
        style={{
          justifyContent: "center", alignItems: "center", height: 70, width: width / 1.05, backgroundColor: '#fff', marginVertical: 3, padding: 10, borderColor: "#ddd", borderRadius: 5,
          borderWidth: 0.8,
        }}>

        <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: "100%" }}>

          <TouchableOpacity
            style={{ marginRight: 5, borderColor: "#ddd", borderRadius: 5, borderWidth: 1, height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
            activeOpacity={0.7}>
            <Image source={{ uri: image }} style={{ height: 40, width: 40 }} />
          </TouchableOpacity>

          <View style={{ justifyContent: 'space-between', width: "50%", height: "100%" }}>
            <View>
              <Text style={{ fontSize: 12.5, fontWeight: '500', color: '#000', textAlign: "justify" }}>{name} Size {size}</Text>

              {/* <Text style={{ fontSize: 10, }}>Size {size}</Text> */}
            </View>

            <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "flex-end", width: "95%", position: "absolute", bottom: 0 }}>
              <Text style={{ fontSize: 12, fontWeight: "800", color: '#DD2326' }}> <Text style={{ fontWeight: "400" }}>SAR </Text>
                {parseInt(price) * itemQuantity}.00</Text>

              <Text style={{ fontSize: 12, color: "#bbb", fontWeight: "600", marginTop: 10, textDecorationLine: 'line-through' }}>SAR 45.00
              </Text>
            </View>

          </View>
        </View>

        {/* ADD & DELETE TO CART */}
        <View style={{ flexDirection: "row", padding: 10, position: "absolute", bottom: 0, right: 0, width: "38%", height: 45 }}>

          <View style={{ width: "53%", flexDirection: "row", justifyContent: "space-between" }}>
            {itemQuantity > 0 ? (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={deleteToCartHandler}
                style={{ height: 25, width: 25, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <AntDesign name="delete" size={15} color="red" />
              </TouchableOpacity>) : null}


            {itemQuantity > 0 ? (<Text style={{ color: "#000", fontSize: 16 }}>{itemQuantity}</Text>) : null}
          </View>

          <View style={{ width: "47%", alignItems: "flex-end" }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={addToCartHandler}
              style={{ height: 25, width: 25, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>

              <AntDesign name="plus" size={15} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </TouchableWithoutFeedback>
  )
}
//// CartList Comp


export const styles = StyleSheet.create({
  checkoutContainer: {
    width: width,
    height: "15%",
    bottom: 55,
    zIndex: 999,
    position: "absolute",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    paddingTop: 7
    // alignSelf: "center"
  },
  checkoutWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 0,
    paddingHorizontal: 10,
  },
  checkoutBTN: {
    backgroundColor: "#702963",
    width: width / 1.05,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  checkoutBTNname: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14
  }
})