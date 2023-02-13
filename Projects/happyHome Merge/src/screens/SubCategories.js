import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import { ProductData } from '../components/ProductData'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons//AntDesign'
import Search from '../components/Search';



const { width, height } = Dimensions.get("window")
const Categories1 = ({ name, image, onPress }) => {

    return (

        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={{ alignItems: "center" }}>

            <View style={{ width: width / 2.3, height: 200, backgroundColor: "#fff", margin: 10, elevation: 7, borderColor:"#eee", borderWidth:1, borderRadius: 5,  overflow:"hidden"}}>

                <View style={{ width: "100%", height: "75%", justifyContent:"center", alignItems:"center"}}>
                    <Image source={{ uri: image }} 
                    style={{ height: 120, width: 120, }}/>
                </View>

                <View style={{ width: "100%", height: "25%",
                 backgroundColor: "#eee", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{
                       fontWeight: '700',
                        color: '#000', fontSize: 15
                    }}>{name}</Text>
                 </View>

            </View>

        </TouchableOpacity>
    )
}


class SubCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const renderCategories1 = ({ item }) => {
            return (
                <Categories1
                    item={item}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    onPress={() => this.props.navigation.navigate('Product')} />
            )
        }

        return (
            <View style={{ flex: 1, backgroundColor: '#fff', }}>
                <Search />
                <View style={{ alignItems: "center" }}>
                    <FlatList
                        numColumns={2}
                        data={ProductData}
                        keyExtractor={ProductData.id}
                        renderItem={renderCategories1}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 130, paddingTop: 7 }}
                    />
                </View>
            </View>
        )
    }
}

export default SubCategories