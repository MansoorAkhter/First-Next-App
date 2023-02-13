import { View, Text, TouchableOpacity, Image, Dimensions, ScrollView, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Search from '../components/Search'
import { NavService } from '../config/index'



const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const AccountScreen = (props) => {
  const navigation = useNavigation();
  return (
    <>
      <Search />
      <ScrollView
        pagingEnabled={false}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: '#fff' }}
        contentContainerStyle={{ paddingBottom: 65 }}
      >
        <View style={{ width: width / 1.1, height: height, alignSelf: "center" }}>

          <View style={{ width: "100%", justifyContent: "center", alignItems: "center", marginVertical: 20 }}>
            <Image source={require("../assets/ezgif.com-gif-maker-13.jpg")} style={{ height: 120, width: "100%", borderRadius: 5 }} />
          </View>

          <View style={{ backgroundColor: "#fff", elevation: 3, width: "100%", height: 100, borderRadius: 5, alignItems: "center", justifyContent: "flex-end", paddingVertical: 10, marginVertical: 15 }}>

            <Text style={{ color: "#000", fontSize: 13, fontWeight: "400", marginLeft: -50, marginBottom: 15 }}>Login to myour account or register a new one!</Text>

            <TouchableOpacity style={{ backgroundColor: "#702963", width: "90%", height: 40, borderRadius: 5, justifyContent: "center", alignItems: "center" }}
            onPress={()=> navigation.navigate('Login')}
            >
             <Text style={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>Login or Register</Text>
            </TouchableOpacity>

          </View>



          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('LanguageScreen')}>
            <View style={styles.moreButtonsContainer}>
              <MaterialCommunityIcons name="earth" size={25} color="#000" />
              <Text style={styles.moreButtonsText}>Language</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.moreButtonsContainer}>
            <Ionicons name="person-outline" size={25} color="#000" />
              <Text style={styles.moreButtonsText}>Profile</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Orders')}>
            <View style={styles.moreButtonsContainer}>
            <MaterialCommunityIcons name="shopping-outline" size={25} color="#000" />
              <Text style={styles.moreButtonsText}>Orders</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Wishlist')}>
            <View style={styles.moreButtonsContainer}>
              <Icon name="heart" size={25} color="#000" />
              <Text style={styles.moreButtonsText}>Wishlist</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Home')}>
            <View style={styles.moreButtonsContainer}>
              <MaterialIcons name="card-giftcard" size={25} color="#000" />
              <Text style={styles.moreButtonsText}>My Points</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Home')}>
            <View style={styles.moreButtonsContainer}>
              <AntDesign name="customerservice" size={25} color="#000" />
              <Text style={styles.moreButtonsText}>Customer Service</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Home')}>
            <View style={styles.moreButtonsContainer}>
              <MaterialIcons name="info-outline" size={25} color="#000" />
              <Text style={styles.moreButtonsText}>About us</Text>
            </View>
          </TouchableWithoutFeedback>
          
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Home')}>
            <View style={styles.moreButtonsContainer}>
              <MaterialIcons name="format-list-bulleted" size={25} color="#000" />
              <Text style={styles.moreButtonsText}>Terms & Conditions</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Home')}>
            <View style={styles.moreButtonsContainer}>
              <EvilIcons name="lock" size={30} color="#000" />
              <Text style={styles.moreButtonsText}>Privacy Policy</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  moreButtonsContainer: {
    height: 45, width: "100%", flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: "#fff", marginTop: 10, paddingHorizontal: 15, borderRadius: 5, borderColor: "#D3D3D3", borderWidth: 0.5
  },
  moreButtonsText: {
    fontSize: 16, fontWeight: '400', marginLeft: 15, color: "#000"
  }
});
