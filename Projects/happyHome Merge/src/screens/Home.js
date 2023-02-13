import React, { Component, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, Dimensions, StyleSheet, Animated, } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import 'react-native-gesture-handler';
import * as data from '../components/Data';
import { DEALS } from '../components/Data';
import { DEALS1 } from '../components/Data';
import { LatestProduct } from '../components/Data';
import { HealthProduct } from '../components/Data';
import { FreshAndBeverage } from '../components/Data';
import { BlOG } from '../components/Data';
import Slider from '../components/Slider';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Axios, { constant } from '../axios/Axios';
import Search, { LocationBar } from '../components/Search';
import { getBrandCategories } from '../redux/APIs'
import { Categories, Deal, Deal1, Latest, Health, Blog, Beverage } from '../components/HomeComponents';


const { width, height } = Dimensions.get('screen')

const ListFooterComp = (prop) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 5 }}>
      <TouchableOpacity
        onPress={prop.gotoScreen}>
        <View style={{ height: "100%", width: 35, justifyContent: "center" }}>
          <MaterialCommunityIcons name="chevron-double-right" size={40} color="#000" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const Home = (props) => {
  //  Arrow Top reference 
  // const scrollView = React.createRef();

  //  const onMoveUp=()=>{
  //   scrollView.current?.scrollTo({
  //     y: 0,
  //     animated: true,
  //   })
  // }

  // // Slider Images
  const images = [
    require('../assets/1.png'),
    require('../assets/2.png'),
    require('../assets/13.png'),
  ]

  const scrollY = new Animated.Value(0)
  const diffClamp = Animated.diffClamp(scrollY, 0, 25);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 25],
    outputRange: [0, -25]
  })
  const [BrandData, setBrandData] = useState()


  const get = async () => {
    const data = await getBrandCategories()
    setBrandData(data.slice(0, 16))
  }

  console.log("BrandData", BrandData)

  useEffect(() => {
    get()
  }, [])

  return (

    <View style={{ flex: 1, height: height, backgroundColor: '#fff' }}>
      {/* SEARCH BAR */}
      <View style={{ zIndex: 999 }}>
        <Search />
        <LocationBar />
      </View>
      <View
        style={{
          position: "absolute",
          top: 95,
          left: 0,
          right: 0,
        }}
      >

        <Animated.View
          style={{
            transform: [{ translateY: translateY }], zIndex: 1
          }} >
          {/* DELIVERY TIME */}
          <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", height: 25, width: width, backgroundColor: "#D8BFD9", paddingHorizontal: 10 }}>

            <Text style={{ fontSize: 12, color: '#000', fontWeight: '400', }}>Next Delivery</Text>

            <MaterialCommunityIcons name='truck-delivery-outline' color="#000" size={20} style={{ marginHorizontal: 5 }} />

            <Text style={{ fontSize: 12, color: '#000', fontWeight: '400', }}>60 mins</Text>
          </View>
        </Animated.View>
      </View>

      <ScrollView
        // ref={scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20 }}
        onScroll={(e) => {
          scrollY.setValue(e.nativeEvent.contentOffset.y)
        }}
      >

        {/* Home Slider  */}
        <View style={{
          justifyContent: 'center', alignItems: 'center',
          width: width, height: height / 5,
          backgroundColor: "#eee"
        }}>
          <Slider images={images} />
        </View>
        {/* Home Slider  */}

        {/* CATEGORIES */}
        <View style={{ marginBottom: 15 }}>
          <FlatList
            numColumns={4}
            keyExtractor={data?.id}
            data={BrandData}
            renderItem={({ item }) =>
              <Categories
                item={item}
                name={item.name}
                image={item.image}
                onPress={() =>
                  props.navigation.navigate('Product')} />}
          />
        </View>
        {/* CATEGORIES */}

        {/* Deal */}
        <View style={{ height: 260, width: width, marginBottom: 10, backgroundColor: '#fff', justifyContent: "center", alignItems: "center" }}>

          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={DEALS}
            keyExtractor={DEALS.id}
            renderItem={({ item }) =>
              <Deal item={item} image={item.image} />
            }
          />

          <FlatList
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            data={DEALS1}
            keyExtractor={DEALS1.id}
            renderItem={({ item }) =>
              <Deal1 item={item} image={item.image} />
            }
          />
        </View>
        {/* Deal */}

        {/* Latest Products */}
        <View style={{ height: 55, width: width, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Product')}
            style={{ borderBottomWidth: 1, borderColor: '#808080', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 70, width: 250 }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000', }}>LATEST</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#9A478D', }}> PRODUCTS</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: width, marginBottom: 20, justifyContent: "center", alignItems: "center" }}>
          <Image source={require('../assets/grocery.jpg')}
            style={styles.bannnerStyle} />

          <Image source={require('../assets/ezgif.com-gif-maker.jpg')}
            style={styles.bannnerStyle} />

          <Image source={require('../assets/ezgif.com-gif-maker-9.jpg')} style={styles.bannnerStyle} />
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={LatestProduct.id}
          data={LatestProduct}
          renderItem={({ item }) =>
            <Latest
              item={item}
              Desc={item.Desc}
              Sale={item.Sale}
              image={item.image}
              Price={item.Price}
              KindOfOffer={item.KindOfOffer}
            // onPress={}
            />
          }
          contentContainerStyle={{ paddingVertical: 15 }}
          ListFooterComponent={() =>
            <ListFooterComp gotoScreen={() =>
              props.navigation.navigate('Product')} />
          }
        />
        {/* Latest Products */}

        {/* HEALTH & DIET */}
        <View style={{ width: width, marginBottom: 10, marginTop: 10, backgroundColor: '#fff' }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Product')}
            style={{ borderBottomWidth: 1, borderColor: '#808080', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 70 }}>
            <Text style={{ fontSize: 27, fontWeight: 'bold', color: '#000', }}>HEALTH & DIET</Text>
            <Text style={{ fontSize: 27, fontWeight: 'bold', color: '#9A478D', left: 5 }}>PRODUCTS</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: width, marginBottom: 20, justifyContent: "center", alignItems: "center" }}>
          <Image source={require('../assets/dummy/healthBanner1.jpg')} style={{ height: 150, width: "95%", marginVertical: 10, borderRadius: 8 }} />

          <Image source={require('../assets/dummy/healthBanner2.jpg')} style={{ height: 150, width: "95%", borderRadius: 8 }} />

          <Image source={require('../assets/dummy/healthBanner3.jpg')} style={{ height: 150, width: "95%", marginVertical: 10, borderRadius: 8 }} />

          <Image source={require('../assets/dummy/healthBanner4.jpg')} style={{ height: 150, width: "95%", borderRadius: 8 }} />
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={HealthProduct.id}
          data={HealthProduct}
          renderItem={({ item }) =>
            <Health
              item={item}
              Sale={item.Sale}
              image={item.image}
              Desc={item.Desc}
              KindOfOffer={item.KindOfOffer}
              Price={item.Price}
            />}
          contentContainerStyle={{ paddingVertical: 15 }}
          ListFooterComponent={() =>
            <ListFooterComp gotoScreen={() =>
              props.navigation.navigate('Product')} />
          }
        />
        {/* HEALTH & DIET */}

        {/* SOFT DRINKS */}
        <View style={{ width: width, marginBottom: 10 }}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Product')} style={{ borderBottomWidth: 1, borderColor: '#808080', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 50 }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#000', }}>SOFT DRINKS &</Text>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#9A478D' }}> BEVERAGES</Text>
          </TouchableOpacity>
        </View>

        <View style={{ width: width, marginBottom: 20, justifyContent: "center", alignItems: "center" }}>

          <Image source={require('../assets/ezgif.com-gif-maker-7-1536x530.jpg')} style={styles.bannnerStyle} />

          <Image source={require('../assets/new-01.png')}
            style={styles.bannnerStyle} />
        </View>

        <View style={{ height: 300, width: width, marginBottom: 20, backgroundColor: '#fff' }}>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={FreshAndBeverage.id}
            data={FreshAndBeverage}
            renderItem={({ item }) =>
              <Beverage
                item={item}
                Sale={item.Sale}
                image={item.image}
                name={item.name}
                Desc={item.Desc}
                Size={item.Size}
                Origin={item.Origin}
                KindOfOffer={item.KindOfOffer}
                Price={item.Price}
              />
            }
            ListFooterComponent={() =>
              <ListFooterComp gotoScreen={() =>
                props.navigation.navigate('Product')} />
            }
          />
        </View>
        {/* SOFT DRINKS */}


        {/* Our Blogs */}
        <View style={{ alignItems: "center" }}>
          <View style={{ borderBottomWidth: 1, width: 150, borderColor: '#808080', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000', }}>OUR</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#9A478D' }}> BLOGS</Text>
          </View>
        </View>

        <View style={{ height: 300, width: width, marginBottom: 80 }}>

          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={BlOG}
            keyExtractor={BlOG.id}
            pagingEnabled={true}
            renderItem={({ item }) =>
              <Blog
                item={item}
                image={item.image}
                name={item.name}
                Desc={item.Desc}
              />}
          />
        </View>
      </ScrollView>
      {/* Our Blogs */}

      {/* Go on Top */}
      {/* <TouchableOpacity
          onPress={() => onMoveUp()}
          style={{ height: 40, width: 40, right: 10, bottom: 60, backgroundColor: '#9A478D', position: 'absolute', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
          <AntDesign name="arrowup" size={20} color="#fff" />
        </TouchableOpacity> */}
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  bannnerStyle: {
    height: 110, width: '95%',
    marginBottom: 10,
    borderRadius: 8,
    resizeMode: "contain"
  }
});
