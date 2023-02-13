import { View, Text, Dimensions, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { banner } from '../components/DealsData';
import { banner1 } from '../components/DealsData';
import Search from '../components/Search';
import ProductComponent from '../components/ProductComponent';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const Deals = (props) => {

    //  First Banners
    const Banner1 = ({ image }) => {
        return (
            <View style={{ alignItems: 'center', paddingHorizontal: 5, justifyContent: "center", height: 110, left: 3 }}>
                <TouchableOpacity
                    activeOpacity={0.4}>
                    <Image source={{
                        uri: image,
                    }} style={{ width: width / 2.14, height: 100, borderRadius: 10, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>
        )
    }

    // Second Banner 
    const Banner2 = ({ image }) => {
        return (
            <View style={{ alignItems: 'center', paddingHorizontal: 5, justifyContent: "center", height: 110, left: 3 }}>
                <TouchableOpacity
                    activeOpacity={0.4}>
                    <Image source={{
                        uri: image,
                    }} style={{ width: width / 2.14, height: 100, borderRadius: 10, resizeMode: 'contain' }} />
                </TouchableOpacity>
            </View>
        )
    }


    return (

        <>
            <Search />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60, backgroundColor:"#fff" }}
            >
                <View styles={{ flex: 1, backgroundColor: 'red' }} >

                    <View style={{ height: 90, width: '90%', marginTop: 10, alignSelf: "center", marginBottom: 5 }}>
                        <Image source={require('../assets/Dealsbanner.jpg')} style={{ height: '100%', width: '100%', borderRadius: 7, }} />
                    </View>

                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ width: width, flexDirection: "row" }} contentContainerStyle={{ paddingVertical: 10, paddingRight: 6 }}>
                        <ProductComponent />
                        <ProductComponent />
                        <ProductComponent />
                    </ScrollView>

                    <Text style={{ color: "#000", fontWeight: "700", fontSize: 15, margin: 10 }}>Special deals for you</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={banner.id}
                        data={banner}
                        renderItem={({ item }) =>
                            <Banner1
                                item={item}
                                image={item.image} />}
                    />

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        keyExtractor={banner1.id}
                        data={banner1}
                        renderItem={({ item }) =>
                            <Banner2
                                item={item}
                                image={item.image} />}
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default Deals