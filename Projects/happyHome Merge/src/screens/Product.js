import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductData1 } from '../components/ProductData'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteToCart } from '../redux/cartSlice'
import { selectCartItem, selectCartItemWithID } from '../redux/cartSlice'
import Search from '../components/Search'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { getProducts } from '../redux/APIs'
import Filter from '../components/Filter'


const { height, width } = Dimensions.get("screen")

const Categories1 = ({ item, id, name, image, price, size, descripton, onPress }) => {
    const [quantity, setQuantity] = useState(0)
    const [heartSelected, setHeartSelected] = useState(false)

    // const [itemQuantity, setItemQuantity] = useState()
    const getSingleItem = useSelector(state => selectCartItem(state, id))
    const dispatch = useDispatch()

    const getSingleItemQuantity = getSingleItem.map(item => item?.quantity)

    const addToCartHandler = () => {
        setQuantity(quantity + 1)

        setTimeout(() => {
            dispatch(addToCart({ id, name, image, size, price, descripton, quantity: quantity + 1 }))
        }, 500)
    }

    const deleteToCartHandler = () => {
        setQuantity(quantity - 1)

        if (getSingleItemQuantity.length > 0) {
            dispatch(deleteToCart({ id }))
        }
    }


    return (
        <View style={{ flex: 1, alignItems: "center" }}>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={{ height: 300, width: width / 2.15, backgroundColor: '#fff', borderRadius: 5, marginBottom: 7 }}>

                <TouchableOpacity
                    onPress={() => setHeartSelected(!heartSelected)}
                    style={{ position: "absolute", right: 10, top: 10 }}>

                    <MaterialCommunityIcons name={heartSelected ? "cards-heart" : "cards-heart-outline"} size={20} color={heartSelected ? 'red' : 'grey'} />
                </TouchableOpacity>

                <View style={{ height: "40%", justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />
                </View>

                <View style={{ height: "60%", justifyContent: 'center', marginLeft:10 }}>

                    <Text style={{ fontSize: 14, color: '#000', fontWeight: '500' }}>{name}</Text>

                    <Text style={{ fontSize: 14, color: '#000', marginVertical:5 }}>
                        SAR {price}.00</Text>

                    <Text style={{ fontSize: 12, color: '#DD2326', fontWeight: '500' }}>Size: {size}</Text>

                </View>

                {/* ADD & DELETE TO CART */}
                <View style={{ flexDirection: "row", padding: 10, position: "absolute", bottom: 0, width: "100%", height: 45 }}>

                    <View style={{ width: "53%", flexDirection: "row", justifyContent: "space-between" }}>
                        {quantity > 0 ? (
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={deleteToCartHandler}
                                style={{ height: 25, width: 25, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                                <AntDesign name="delete" size={15} color="red" />
                            </TouchableOpacity>) : null}


                        {quantity > 0 ? (<Text style={{ color: "#000", fontSize: 16 }}>{quantity}</Text>) : null}
                    </View>

                    <View style={{ width: "47%", alignItems: "flex-end" }}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={addToCartHandler}
                            style={{ height: 25, width: 25, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                            <AntDesign name="plus" size={17} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>


            </TouchableOpacity>

        </View>
    )
}


const ProductCategories = (props) => {
    const [productData, setProductData] = useState()

    const get = async () => {
        const data = await getProducts(144)
        setProductData(data)
    }

    useEffect(() => {
        get()

    }, [])

    const renderCategories1 = ({ item }) => {
        console.log("DATA", item)

        return (
            <Categories1
                item={item}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                descripton={item.descripton}
                size={item.count}
                onPress={() => props.navigation.navigate('ProductDetail', { item: item })}
            />
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff', }}>

            {/* For GoBack */}
            {/* onPress={() => this.props.navigation.goBack()}
                <AntDesign name="arrowleft" size={25} color="#fff">*/}
            <Search />
            <Filter />

            <View style={{backgroundColor: "#fff", padding: 7, zIndex: 999 }}>

                <View
                    style={{ flexDirection: 'row', }}
                >
                    <TouchableOpacity style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="motorcycle" size={20} color={'red'} />
                        <Text style={{ color: 'black', fontsize: 8 }}>NEW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, borderRadius: 5, marginHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons name="category" size={15} color={'red'} />
                        <Text style={{ color: 'black', fontsize: 8 }}>BULK</Text>
                    </TouchableOpacity>
                </View>

            </View>


            <FlatList
                numColumns={2}
                data={productData}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 10, paddingBottom: 70, backgroundColor: "rgb(240,240,240),0%", paddingHorizontal: 5 }}
                renderItem={renderCategories1}
            />

        </View>
    )
}


export default ProductCategories