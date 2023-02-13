import { FlatList, StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback, ScrollView } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWishlistItem, deleteFromWishlist } from "../redux/wishlist_Slice";
import { Cartlist } from "./CartScreen";
import AntDesign from 'react-native-vector-icons/AntDesign'


const Wishlist = (prop) => {
  const getWishlistData = useSelector(selectWishlistItem)
  const { width, height } = Dimensions.get('screen');
  const dispatch = useDispatch()


  const gotoProductDetail = (item) => {
    prop.navigation.navigate("ProductDetail", { item: item })
    console.log(item, ".........*.")
  }

  const wishlistHandler = (id) => {
    // console.log(item, ".........*.")

    dispatch(deleteFromWishlist({ id }))
  }



  return (
    <View style={{ flex: 1, backgroundColor: "#eee", justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={getWishlistData}
        renderItem={({ item }) => {

          return (
            // <Cartlist
            //   id={item?.id}
            //   image={item?.image}
            //   name={item?.name}
            //   price={item?.price}
            //   size={item?.size}
            //   descripton={item?.descripton}
            //   gotoProductDetail={() => gotoProductDetail(item)}
            // />
            <ScrollView>
              <View style={{ width: width, height: 35, backgroundColor: '#9A478D', flexDirection: "row", alignItems: "center", justifyContent:"center"}}>
                <Text style={{ color: "#fff", fontWeight: "600", fontSize: 17}}>
                  My Wishlist</Text>
              </View>
              <TouchableWithoutFeedback
                onPress={() => gotoProductDetail(item)}>
                <View
                  style={{alignSelf:"center", justifyContent: "center", alignItems: "center", height: 90, width: width / 1.05, elevation: 2, backgroundColor: '#fff', borderRadius: 5, marginVertical: 4, padding: 10, borderColor: "#D3D3D3", borderWidth: 0.5, }}>


                  <TouchableWithoutFeedback
                    onPress={() => wishlistHandler(item?.id)} >
                    <View style={{ position: "absolute", right: 7, top: 5 }}>
                      <AntDesign name="heart" size={22} color="tomato" />
                    </View>
                  </TouchableWithoutFeedback>

                  <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: "100%" }}>

                    <View
                      style={{ marginRight: 5 }}
                      activeOpacity={0.2}>
                      <Image source={{ uri: item.image }} style={{ height: 70, width: 70 }} />
                    </View>

                    <View style={{ justifyContent: 'space-between', width: "70%", height: "100%" }}>
                      <View>
                        <Text style={{ fontSize: 15, fontWeight: '500', color: '#9A478D', textAlign: "justify" }}>{item.name}</Text>

                        <Text style={{ fontSize: 13, }}>Size {item.size}</Text>
                      </View>

                      <Text style={{ fontSize: 13, fontWeight: "500", color: '#DD2326', bottom: 0, position: "absolute" }}>
                        Price: SAR {item.price}
                      </Text>


                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>

            </ScrollView>


          )
        }
        }
      />
    </View>

  );
};

export default Wishlist;

const styles = StyleSheet.create({});
