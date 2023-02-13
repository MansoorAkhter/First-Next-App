import { StyleSheet, Text, TextInput, View, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { width } = Dimensions.get("screen")

const Search = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.searchContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("Home")}>
          <Image source={require("../assets/logo.png")} style={{ height: 32, width: 25 }} />
        </TouchableWithoutFeedback>

        <View style={styles.searchWrapper}>
          <Icon name="search" size={25} color="#grey" style={{ left: 5, }} />
          <TextInput placeholder='Search for products' placeholderTextColor='#000' style={styles.searchInput} />
        </View>
      </View>
      {/* <LocationBar /> */}
    </>
  )
}

export default Search

export const LocationBar = () => {
  return (
    <>
      {/* LOCATION BAR*/}
      <TouchableWithoutFeedback
        onPress={() => alert("Pin Location on Google Map")}>
        <View style={styles.locationContainer}>

          <View style={styles.locationWrapper}>
            <MaterialIcons name='location-on' color="#fff" size={20} />
            <Text style={styles.locationAddress}>
              Address: 17 Princess Road, London</Text>
          </View>

          <MaterialIcons name='arrow-drop-down' color="#fff" size={30} />
        </View>
      </TouchableWithoutFeedback>
      {/* LOCATION BAR*/}
    </>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    width: width, height: 60, backgroundColor: "#9A478D", justifyContent: "space-evenly", alignItems: "center", paddingBottom: 10,
    flexDirection: "row", 
    zIndex:999
  },
  searchWrapper: {
    flexDirection: 'row', backgroundColor: '#fff', width: 300, height: 36, borderRadius: 40, alignItems: 'center'
  },
  searchInput: {
    width: '90%', left: 5, fontSize: 13, paddingVertical: 5, paddingLeft: 10, borderRadius: 40, fontWeight: "300", color: "#000"
  },
  locationContainer: {
    height: 35,
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#702963",
 },
  locationWrapper: {
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
  },
  locationAddress: { fontSize: 12, color: '#fff', fontWeight: '400', marginLeft: 5 }
})