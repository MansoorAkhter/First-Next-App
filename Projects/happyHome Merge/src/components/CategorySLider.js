import { View, Text, FlatList, Dimensions, TouchableOpacity, Image, TextInput, TouchableWithoutFeedback, ScrollView } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { CategoryData } from './CategoryDummyData'

import Icon from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const CategorySLider = () => {

    const [product, setProduct] = useState([])
    const [productName, setProductName] = useState()
    const [dropDown, setDropDown] = useState()

    const navigation = useNavigation();
    const { width, height } = Dimensions.get("window")

    // CLOSE DROPDOWN ON UNFOCUS
    useFocusEffect(useCallback(() => {
        setDropDown(null)
    }, []))

    // // Category left side 
    const CategoryView = ({ id, name, products, onPress }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        setProduct(products)
                    }}
                    style={{ height: 45, width: '90%', justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontWeight: '400', fontSize: 11 }}>{name}</Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderColor: '#ddd', width: "100%", alignSelf: 'center' }}></View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>

            <View style={{ width: width, height: height, flexDirection: "row", backgroundColor: "#FFF", }}>

                <View style={{ height: '100%', width: 90, backgroundColor: "#eee", paddingHorizontal: 7, marginRight: 8 }}>
                    <FlatList
                        data={CategoryData}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(e, i) => i}
                        renderItem={({ item, index }) => {

                            return (
                                <CategoryView
                                    item={item}
                                    id={item?.id}
                                    name={item?.name}
                                    products={item?.categoryItems}
                                />
                            )
                        }}
                    />
                </View>


                <View style={{ height: height, width: width - 110 }}>

                    {product.map((item, index) => <TouchableWithoutFeedback
                        onPress={() => {
                            setDropDown(index)
                            if (dropDown === index) {
                                setDropDown(null)
                            }
                        }} >

                        <View>

                            {/* DROP DOWN BAR */}
                            <View
                                style={{ height: 45, width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', alignItems: 'center', borderBottomColor: "#ddd", borderBottomWidth: 1, alignSelf: "center" }}>

                                <Text style={{ color: '#000', fontWeight: '400', fontSize: 12, paddingLeft: 10 }}>
                                    {item?.name}</Text>
                                <AntDesign name={dropDown === index ? 'up' : "down"} size={20} style={{ paddingRight: 20 }} />
                            </View>

                            {/* DROP LIST ITEMS */}
                            {dropDown === index ? (<View style={{ width: "100%", backgroundColor: "#fff", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent:"space-between"}}>

                                <TouchableOpacity onPress={() => navigation.navigate("ProductCategory")}
                                    style={{ width: width / 4.5, alignItems: "center", marginVertical: 10, }}
                                >
                                    <View style={{ width: 55, height: 55, backgroundColor: "#D8BFD8aa", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={require("../assets/1.png")} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <Text style={{ color: "#000", marginTop: 5, textAlign: "center", fontSize: 10 }}>Star Bucks</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate("ProductCategory")}
                                    style={{ width: width / 4.5, alignItems: "center", marginVertical: 10}}
                                >
                                    <View style={{ width: 55, height: 55, backgroundColor: "#D8BFD8aa", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={require("../assets/3.png")} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <Text style={{ color: "#000", marginTop: 5, textAlign: "center", fontSize: 10 }}>Deals</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate("ProductCategory")}
                                    style={{ width: width / 4.5, alignItems: "center", marginVertical: 10}}
                                >
                                    <View style={{ width: 55, height: 55, backgroundColor: "#D8BFD8aa", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={require("../assets/2.png")} style={{ width: 50, height: 50 }} />
                                    </View>
                                    <Text style={{ color: "#000", marginTop: 5, textAlign: "center", fontSize: 10 }}>Choco Safari</Text>
                                </TouchableOpacity>

                            </View>) : null}

                        </View>
                    </TouchableWithoutFeedback>)}

                </View>
            </View>
        </View>
    )
}

export default CategorySLider