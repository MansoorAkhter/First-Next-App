import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { ProductData1 } from '../components/ProductData'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'







const Categories1 = ({ name, image, price, size, onPress }) => {

    return (


        <View style={{ flex: 1, marginTop: 20, marginHorizontal: 5 }}>

            <View style={{ height: 320, width: 170, backgroundColor: '#fff', borderRadius: 10, elevation: 5, }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={{ uri: image }} style={{ height: 200, width: 170 }} />
                </View>

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderWidth: 1, borderColor: '#9A478D', borderRadius: 10, top: 10, marginHorizontal: 5, }}>
                    <Icon name="truck-fast-outline" size={22} color="#000" />
                    <Text style={{ color: "#000", left: -10, fontSize: 14, fontWeight: '500' }}>Free Shipping</Text>
                </TouchableOpacity>

                <View style={{ justifyContent: 'center', left: 10, marginTop: 15, paddingRight: 17 }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 14, color: '#9A478D',fontWeight:'500' }}>{name}</Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 14, color: '#000', }}>Price : SAR {price}</Text>
                    <Text style={{ fontSize: 12, color: '#DD2326',fontWeight:'500' }}>Size:  {size}</Text>

                </View>


                <TouchableOpacity
                    onPress={onPress}
                    activeOpacity={0.5}
                    style={{ height: 35, width: 35, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 10, position: 'absolute', bottom: 5, right: 10 }}>
                    <AntDesign name="plus" size={30} color="#fff" />
                </TouchableOpacity>


            </View>


        </View>

    )

}














class ProductCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    subCategories(item) {

        console.log("item", item);
        this.props.navigation.navigate('ProductDetail', { item: item, })
    };




    render() {

        const renderCategories1 = ({ item }) => {

            return (
                <Categories1
                    item={item}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    descripton={item.descripton}
                    size={item.size}


                    onPress={() => {
                        this.subCategories(item)
                    }
                    }


                />
            )
        }

        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
        

                    <View style={{ flexDirection: 'row',height: '10%', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#9A478D', borderTopRightRadius: 40, borderBottomLeftRadius: 40 }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <AntDesign name="arrowleft" size={25} color="#fff" style={{
                                left: -90
                            }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff' }}>PRODUCT</Text>
                    </View>

                <View style={{marginBottom:80}}>
                    <FlatList
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={ProductData1.id}
                        data={ProductData1}
                        renderItem={renderCategories1}
                    />
                </View>

            </View>
        )
    }
}

export default ProductCategories