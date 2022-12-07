import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { ProductData } from '../components/ProductData'
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons//AntDesign'




const Categories1 = ({ name, image, onPress }) => {

    return (

        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9} style={{ marginBottom: 10, marginHorizontal: 5, marginVertical: 10 }}>
            <Card style={{ borderRadius: 10, paddingTop: 10, backgroundColor: '#9A478D', elevation: 5, shadowColor: '#171717' }}>

                <Card.Cover source={{ uri: image }}
                    style={{ height: 150, width: 160, top: -12, paddingBottom: 2 }}
                />


                <Card.Content>
                    <Title style={{
                        textAlign: 'center', fontWeight: '400',
                        color: '#fff', fontSize: 16
                    }}>{name}</Title>

                </Card.Content>
            </Card>
        </TouchableOpacity>
    )

}














class SubCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    subCategories() {
        console.log("categories----working")
        this.props.navigation.navigate('Product')
    }

    render() {

        const renderCategories1 = ({ item }) => {

            return (
                <Categories1
                    item={item}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    onPress={() => {
                        // this.props.navigation.navigate('ProductCategories')
                        // console.log("this.props",this.props)
                        this.subCategories()
                    }
                    }


                />
            )
        }

        return (
            <View style={{ flex:1,backgroundColor: '#fff', }}>
                <View style={{ flexDirection: 'row', height: '10%', width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#9A478D', borderTopRightRadius: 40, borderBottomLeftRadius: 40 }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <AntDesign name="arrowleft" size={25} color="#fff" style={{
                            left: -40
                        }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff' }}>SUB CATEGORIES</Text>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', margin: 10, marginBottom: 90, }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        keyExtractor={ProductData.id}
                        data={ProductData}
                        renderItem={renderCategories1}


                    />

                </View>
            </View>
        )
    }
}

export default SubCategories