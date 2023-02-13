import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { BottomTab } from '../components/Data'
import { useSelector } from 'react-redux'
import { selectCartItem, selectCartItemWithID } from '../redux/cartSlice'



const CustomBottomNavigator = () => {
  const [activeColor, setActiveColor] = useState(0)
  const navigation = useNavigation();
  const getCartItemsQuantity = useSelector(state => selectCartItem(state))

  // console.log(activeColor,"###")

  return (
    <View style={styles.tabWrapper}>

      <View style={styles.tabContainer}>

        {BottomTab.map((item, index) => {
          {/* console.log(index, "===", item) */}

          return (<TouchableOpacity
            style={styles.tabBTNcontainer}
            activeOpacity={0.6}
            onPress={() => {
              navigation.navigate(item?.name),
                setActiveColor(index)
            }}>

            {/* CART BADGE */}
            {item?.name === "Cart" && getCartItemsQuantity?.length > 0 ? (<View style={styles.cartBadge}>
              <Text style={styles.badgeText}>{getCartItemsQuantity?.length}</Text>
            </View>) : null}
            {/* CART BADGE */}

            {/* Tab Icon & Text */}
            {activeColor != index ? (<Image source={item?.icon_solid}
              style={styles.active} />) : (<Image source={item?.icon_outline}
                style={styles.active} />)}
            <Text style={{ color: "#fff", fontSize: 12, marginTop: 3 }}>{item?.name}</Text>
            {/* Tab Icon & Text */}

            {/* TAB ICON */}
            {/* {item.icon === null ? <Image source={require('../assets/Category.png')}
            style={activeColor === index ? [styles.active] : [styles.unActive]} /> : <MaterialCommunityIcons name={item?.icon} size={25} color={activeColor === index ? "#000" : "#fff"} />} */}
            {/* TAB ICON */}

            {/* TAB TEXT */}
            {/* <Text style={activeColor === index ? { color: '#000' } : { color: "#fff" }}>{item?.name}</Text> */}
            {/* TAB TEXT */}

          </TouchableOpacity>)
        })}

      </View>
    </View>
  )
}

export default CustomBottomNavigator;

const styles = StyleSheet.create({
  tabWrapper: {
    flex: 1, justifyContent: 'center', alignItems: 'center', position:"absolute", bottom:0
  },
  tabContainer: {
    width: '100%', height: 57, backgroundColor: '#9A478D', flexDirection: 'row',
  },
  tabBTNcontainer: {
    width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 5
  },
  active: {
    height: 23, width: 23, tintColor: "#fff", marginTop:-5, marginBottom:5
  },
  unActive: {
    height: 25, width: 25, tintColor: "#fff"
  },
  cartBadge: {
    width: 15, height: 15, borderRadius: 50, backgroundColor: "yellow", justifyContent: "center", alignItems: "center",
    position: "absolute", zIndex: 999, top:0, right:19,  alignSelf:"center"
  },
  badgeText: {
    color: "#000", fontSize: 10, fontWeight: "500", marginBottom: 2
  }
})