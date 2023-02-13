import React from 'react';
import {
    View, Text, TouchableOpacity, Image,
    Dimensions, ImageBackground, TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen')

export const Categories = ({ name, image, onPress }) => {

    return (

        <View style={{ width: width / 4, marginTop: 20 }}>
            <TouchableOpacity style={{ alignItems: 'center' }}
                onPress={onPress}>
                <View style={{
                    height: 70, width: 70,
                    backgroundColor: '#rgb(238,238,238) 0%', borderRadius: 150, justifyContent: 'center', alignItems: 'center'
                }}>
                    <Image source={{
                        uri: image,
                    }}
                        style={{ height: 55, width: 55, }} />
                </View>
                <Text style={{ fontSize: 12, textAlign: 'center', color: "#000", fontWeight: "300" }}>{name}</Text>
            </TouchableOpacity>
        </View>
    )

}

export const Deal = ({ image }) => {
    const navigation = useNavigation();

    return (
        <View style={{ alignItems: 'center', justifyContent: "center", paddingHorizontal: 5 }}>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Deal')}>
                <Image source={{
                    uri: image,
                }} style={{ width: width / 2.1, height: 120, borderRadius: 10, resizeMode: 'contain' }} />
            </TouchableWithoutFeedback>

        </View>

    )
}

export const Deal1 = ({ image }) => {
    const navigation = useNavigation();
    return (
        <View style={{ alignItems: 'center', justifyContent: "center", paddingHorizontal: 5 }}>
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Deal')}>
                <Image source={{
                    uri: image,
                }} style={{ width: width / 2.1, height: 120, borderRadius: 10, resizeMode: 'contain' }} />
            </TouchableWithoutFeedback>
        </View>
    )
}

export const Latest = ({ image, Sale, Desc, KindOfOffer, Price, }) => {
    return (
        <View style={{ left: 3, backgroundColor: '#fff', }}>
            <TouchableWithoutFeedback>
                <View
                    activeOpacity={0.5}
                    style={{
                        height: 270, width: width / 2.5, 
                        backgroundColor: '#fff', borderRadius: 5, 
                        overflow: 'hidden',
                        borderColor: "#ddd", borderWidth:1, marginHorizontal: 3,
                    }}>

                    <View
                        style={{ justifyContent: 'center', alignSelf: 'center' }}>
                        <Image
                            resizeMode='contain'
                            source={{ uri: image }} style={{ height: 100, width: 100 }} />
                    </View>


                    <View style={{ justifyContent: 'center', marginTop: 15, alignSelf: 'flex-start', marginLeft: 10 }}>

                        <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>{Desc}</Text>
                        <Text style={{ fontSize: 12, color: '#000', marginTop: 20 }}>Price:  {Price}</Text>

                        {!KindOfOffer ? null : <Text style={{ fontSize: 13, color: '#aaa', textDecorationLine: 'line-through' }}>{KindOfOffer}</Text>}

                        {Sale === "" ? <View style={{ height: 20, width: 40, backgroundColor: '#fff', alignItems: 'center' }}>
                        </View> : <View style={{ height: 20, width: 50, backgroundColor: '#F1F6F5', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text style={{ color: '#DD2326', fontSize: 12, fontWeight: 'bold', }}>{Sale}</Text>
                        </View>}

                    </View>


                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ height: 25, width: 25, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 5, position: 'absolute', bottom: 8, right: 10 }}>
                        <AntDesign name="plus" size={17} color="#fff" />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </View>

    )
}

export const Health = ({ image, Sale, Desc, KindOfOffer, Price }) => {
    return (
        <View style={{ left: 3, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback>
                <View style={{ height: 270, width: width / 2.5, backgroundColor: '#fff', borderRadius: 10, elevation: 3, overflow: 'hidden', marginHorizontal: 5 }}>

                    <View
                        style={{ justifyContent: 'center', alignSelf: 'center' }}>
                        <Image
                            resizeMode='contain'
                            source={{ uri: image }} style={{ height: 100, width: 100 }} />
                    </View>


                    <View style={{ justifyContent: 'center', marginTop: 15, alignSelf: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ fontSize: 12, color: '#000', fontWeight: 'bold' }}>{Desc}</Text>
                        <Text style={{ fontSize: 12, color: '#000', marginTop: 20 }}>Price:  {Price}</Text>
                        {!KindOfOffer ? null : <Text style={{ fontSize: 13, color: '#aaa', textDecorationLine: 'line-through' }}>{KindOfOffer}</Text>}

                        {Sale === "" ? <View style={{ height: 20, width: 40, backgroundColor: '#fff', alignItems: 'center' }}>
                        </View> : <View style={{ height: 20, width: 50, backgroundColor: '#F1F6F5', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text style={{ color: '#DD2326', fontSize: 12, fontWeight: 'bold', }}>{Sale}</Text>
                        </View>}

                    </View>


                    <View
                        style={{ height: 25, width: 25, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 10, position: 'absolute', bottom: 5, right: 10 }}>
                        <AntDesign name="plus" size={20} color="#fff" />
                    </View>


                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export const Beverage = ({ image, Sale, Desc, KindOfOffer, Price }) => {

    return (
        <View style={{ marginTop: 20, marginHorizontal: 5, backgroundColor: '#fff', }}>

            <TouchableWithoutFeedback>
                <View style={{ height: 270, width: width / 2.1, backgroundColor: '#fff', borderRadius: 10, elevation: 5, overflow: 'hidden' }}>

                    <View
                        style={{ justifyContent: 'center', alignSelf: 'center' }}>
                        <Image
                            resizeMode='contain'
                            source={{ uri: image }} style={{ height: 100, width: 100 }} />
                    </View>


                    <View style={{ justifyContent: 'center', marginTop: 15, alignSelf: 'flex-start', marginLeft: 10 }}>
                        <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>{Desc}</Text>
                        <Text style={{ fontSize: 12, color: '#000', marginTop: 20 }}>Price:  {Price}</Text>
                        {!KindOfOffer ? null : <Text style={{ fontSize: 13, color: '#aaa', textDecorationLine: 'line-through' }}>{KindOfOffer}</Text>}

                        {Sale === "" ? <View style={{ height: 20, width: 40, backgroundColor: '#fff', alignItems: 'center' }}>
                        </View> : <View style={{ height: 20, width: 50, backgroundColor: '#F1F6F5', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text style={{ color: '#DD2326', fontSize: 12, fontWeight: 'bold', }}>{Sale}</Text>
                        </View>}

                    </View>


                    <View
                        style={{ height: 25, width: 25, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 5, position: 'absolute', bottom: 5, right: 10 }}>
                        <AntDesign name="plus" size={20} color="#fff" />
                    </View>


                </View>

            </TouchableWithoutFeedback>
        </View>

    )
}

export const Blog = ({ name, Desc, image }) => {
    return (
        <>
            <View style={{ position: "absolute", width: width, zIndex: 999, alignSelf: "center", alignItems: "center", bottom: 30 }}>

                <Text style={{ fontSize: 20, fontWeight: '600', color: '#fff', textAlign: 'center', marginBottom: 20 }}>{name}</Text>

                {/* <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff', top: -35, textAlign: 'center', padding: 50 }}>{Desc}</Text> */}

                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 40, width: 120, backgroundColor: '#FED700', borderRadius: 5 }}>
                    <Text style={{ fontSize: 16, color: '#000', fontWeight: '600' }}>Read More</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: width, marginTop: 20, backgroundColor: '#000', opacity: 0.7 }}>
                <View style={{ height: 300, width: "100%", alignItems: 'center' }}>
                    <ImageBackground
                        source={image}
                        style={{ width: '100%', height: '100%', opacity: 0.6, position: 'absolute' }}>
                    </ImageBackground>
                </View>
            </View>
        </>

    )
}

export const ListFooterComp = (prop) => {
    return (
        <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 5 }}>
            <TouchableOpacity
                onPress={prop.gotoScreen()}>
                <View style={{ height: "100%", width: 35, justifyContent: "center" }}>
                    <MaterialCommunityIcons name="chevron-double-right" size={40} color="#000" />
                </View>
            </TouchableOpacity>
        </View>
    )
}