import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View, FlatList, ScrollView, Animated, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { FreshAndBeverage, LatestProduct } from '../components/Data'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteToCart } from '../redux/cartSlice'
import { addToWishlist, deleteFromWishlist } from '../redux/wishlist_Slice'
import { selectCartItem, selectCartItemWithID } from '../redux/cartSlice'
import Axios from '../axios/Axios'
import Search, { LocationBar } from '../components/Search'
import { RadioButton } from 'react-native-paper'
import GestureRecognizer from 'react-native-swipe-gestures'
import Filter from '../components/Filter'

const { width, height } = Dimensions.get("window")

const ProductComp = ({ id, name, price, image, size, descripton, opener }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { width, height } = Dimensions.get("screen")
    const [value, setValue] = useState('first');
    const [myWish, setMyWish] = useState(false);

    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(0)
    const getSingleItemQuantity = useSelector(state => selectCartItem(state, id))


    const addToCartHandler = () => {
        setQuantity(quantity + 1)

        // console.log(id, name, image, price, size, descripton, "quantity>>>",quantity, "<<<<<<<<")
        setTimeout(() => {
            dispatch(addToCart({ id, name, image, price, size, descripton, quantity: quantity + 1 }))

        }, 500)
    }

    const deleteToCartHandler = () => {
        setQuantity(quantity - 1)
        if (getSingleItemQuantity.length > 0) {
            dispatch(deleteToCart({ id }))
        }
    }

    const wishlistHandler = () => {
        if (myWish === false) {
            setMyWish(true)
            dispatch(addToWishlist({ id, name, image, price, size, descripton }))
        } else {
            setMyWish(false)
            dispatch(deleteFromWishlist({ id }))
        }
    }

    return (
        <View style={styles.main}>
            <TouchableOpacity style={styles.productContainer}>
                <TouchableWithoutFeedback
                    onPress={wishlistHandler} >
                    <View style={{ position: "absolute", right: 7, top: 5 }}>
                        {myWish === false ? (<AntDesign name="hearto" size={18} color="#bbb" />) :
                            (<AntDesign name="heart" size={18} color="tomato" />)}
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.porductWrpr}>
                    <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                </View>

                <View style={{ height: "55%", paddingHorizontal: 10 }}>
                    <Text style={styles.productName}>{name}</Text>
                    {/* 
                    <Text style={styles.productPrice}>SAR {price}
                        <Text style={{ color: "grey", fontWeight: "400", fontSize: 12 }}>/Piece</Text>
                    </Text> */}
                    <View>
                        <Text style={[styles.productPrice, { color: "red", marginTop: 10 }]}>
                            SAR {price}
                            <Text style={{ fontWeight: "400", fontSize: 12 }}>/Piece</Text>
                        </Text>

                        <Text style={{ color: "#000", fontWeight: "300", fontSize: 10, textDecorationLine: "line-through", marginVertical: 5 }}>SAR {price}</Text>

                        <View style={{ backgroundColor: "#FFE6EE", width: 45, height: 15, alignItems: "center" }}>
                            <Text style={[styles.productPrice, { color: "red", fontSize: 10 }]}>11%OFF
                            </Text>
                        </View>
                    </View>


                    <Text style={{ color: "grey", fontWeight: "400", fontSize: 12, marginTop: 10 }}>Size: {size}</Text>


                    {/* ADD & DELETE TO CART */}
                    <View style={styles.addToCartContainer}>
                        <View>
                            {quantity > 0 ? (
                                <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() => deleteToCartHandler()
                                    }
                                    style={styles.deleteBTN}>
                                    <AntDesign name="delete" size={13} color="red" />
                                </TouchableOpacity>) : null}
                        </View>

                        <View>
                            {quantity > 0 ? (<TouchableOpacity onPress={() => setModalVisible(true)}>
                                <Text style={{ color: "#9A478D", fontSize: 14 }}>{quantity} <AntDesign name="down" size={12} color="#9A478D" /></Text>
                            </TouchableOpacity>) : null}
                        </View>

                        <View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={addToCartHandler}
                                style={styles.addBTN}>
                                <AntDesign name="plus" size={15} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>


            {/*Set Qauntity Modal with Swipe gesture */}
            <GestureRecognizer
                onSwipeUp={() => setModalVisible(true)}
                onSwipeDown={() => setModalVisible(false)}
            >
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    transparent={true}
                >
                    <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#000000aa', height: height, opacity: 0.80 }}
                    // onPress={() => setModalVisible(false)} 
                    />

                    <View style={{
                        height: '55%',
                        marginTop: 'auto',
                        backgroundColor: '#fff',
                        borderTopEndRadius: 20,
                        borderTopStartRadius: 20,
                    }}>
                        <View style={{
                            height: 40,
                            borderTopEndRadius: 25,
                            borderTopStartRadius: 25,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            {/* Top-Line */}
                            <View style={{
                                width: "30%", height: 5,
                                backgroundColor: "#ddd",
                                borderRadius: 10, top: -5
                            }} />
                        </View>

                        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>

                            <RadioButton.Group onValueChange={newValue => {
                                setValue(newValue),
                                    setModalVisible(false)
                            }} value={value} >

                                <View style={{ flexDirection: "row", alignItems: "center", width: width, justifyContent: "space-between", paddingHorizontal: 10 }}>

                                    <View style={{ flexDirection: "row", alignItems: "center" }}>

                                        <RadioButton value="first" color='#9A478D' uncheckedColor='grey' />
                                        <Text style={[{ fontSize: 15, fontWeight: "400" }, value === "first" ? { color: "#9A478D" } : { color: '#000' }]}>
                                            1 Piece
                                        </Text>
                                    </View>

                                    <Text style={[{ fontSize: 15, fontWeight: "600" }, value === "first" ? { color: "#9A478D" } : { color: '#000' }]}>SAR 15.00</Text>
                                </View>

                                <View style={{ flexDirection: "row", alignItems: "center", width: width, justifyContent: "space-between", paddingHorizontal: 10 }}>

                                    <View style={{ flexDirection: "row", alignItems: "center" }}>

                                        <RadioButton value="second" color='#9A478D' uncheckedColor='grey' />
                                        <Text style={[{ fontSize: 15, fontWeight: "400" }, value === "second" ? { color: "#9A478D" } : { color: '#000' }]}>
                                            2 Piece</Text>
                                    </View>

                                    <Text style={[{ fontSize: 15, fontWeight: "600" }, value === "second" ? { color: "#9A478D" } : { color: '#000' }]}>SAR 30.00</Text>
                                </View>
                            </RadioButton.Group>

                        </View>
                    </View>
                </Modal>
            </GestureRecognizer>

        </View>)
}

const ProductCategory = () => {

    ////*Location Bar* Hide on Scroll Up & Show on Scroll Down
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, 35);
    const translateY = diffClamp.interpolate({
        inputRange: [0, 35],
        outputRange: [0, -35]
    })

    return (
        <View>
            <Search />

            <View style={{
                position: "absolute",
                top: 60,
                left: 0,
                right: 0,
            }}>
                <Animated.View
                    style={{
                        transform: [{ translateY: translateY }],
                        zIndex: 1
                    }}>
                    <LocationBar />
                    <Filter />
                </Animated.View>
            </View>

            <FlatList
                numColumns={2}
                data={FreshAndBeverage}
                keyExtractor={(item) => item?.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 80,
                    paddingBottom: 120,
                    paddingHorizontal: 5,
                    backgroundColor: "rgb(240,240,240),0%"
                }}
                onScroll={(e) => {
                    scrollY.setValue(e.nativeEvent.contentOffset.y)
                }}
                renderItem={({ item, index }) =>
                    <ProductComp
                        id={item.id}
                        name={item.name}
                        price={item.Price}
                        image={item.image}
                        size={item.Size}
                        descripton={item.Desc}
                    // opener={() => setModalVisible(true)}
                    />}
            />


        </View>
    )
}
export default ProductCategory


const styles = StyleSheet.create({
    main: {
        flex: 1, alignItems: "center"
    },
    productContainer: {
        width: width / 2.15,
        height: 300,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginBottom: 10,
        // elevation: 2,
        // borderColor:"#ccc",
        // borderWidth:1
    },
    porductWrpr: {
        height: "45%",
        justifyContent: "center",
        alignItems: "center"
    },
    productName: {
        color: "#000",
        fontSize: 13,
        fontWeight: "500"
    },
    productPrice: {
        color: "#000",
        fontSize: 15,
        fontWeight: "600",
    },
    addToCartContainer: {
        flexDirection: "row", position: "absolute", bottom: 10, width: "100%", justifyContent: "space-between", alignSelf: "center"
    },
    deleteBTN: {
        height: 20, width: 20, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', borderRadius: 4
    },
    addBTN: {
        height: 20, width: 20, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 4
    }
})