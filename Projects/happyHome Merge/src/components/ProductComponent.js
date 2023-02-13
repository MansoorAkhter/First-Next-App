import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image } from "react-native";
import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign'

const ProductComponent = () => {
    const { width, heigth } = Dimensions.get("screen")

    return (
        <View style={{ left: 3 }}>
            <TouchableWithoutFeedback>
                <View
                    activeOpacity={0.5}
                    style={{
                        height: 270, width: width / 2.5,
                        backgroundColor: '#fff', borderRadius: 5,
                        overflow: 'hidden',
                        borderColor: "#ddd",
                        borderWidth: 1, marginHorizontal: 3,
                    }}>

                    <View
                        style={{ justifyContent: 'center', alignSelf: 'center' }}>
                        <Image
                            resizeMode='contain'
                            source={require("../assets/sofri.jpg")} style={{ height: 100, width: 100 }} />
                    </View>


                    <View style={{ justifyContent: 'center', marginTop: 15, alignSelf: 'flex-start', marginLeft: 10 }}>

                        <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>
                            Choco Safari with unique taste</Text>
                        <Text style={{ fontSize: 12, color: '#DD2326', marginTop: 20 }}>Price: 15 SAR</Text>

                        {/* {!KindOfOffer ? null : */}
                        <Text style={{ fontSize: 13, color: '#000', textDecorationLine: 'line-through' }}>Kind of Offer
                        </Text>
                        {/* } */}

                        {/* {Sale === "" ? */}
                        <View style={{ height: 20, width: 40, backgroundColor: '#fff', alignItems: 'center' }}>
                        </View>
                        {/* : */}
                        <View style={{ height: 20, width: 50, backgroundColor: '#F1F6F5', alignItems: 'center', alignSelf: 'flex-start' }}>
                            <Text style={{ color: '#DD2326', fontSize: 12, fontWeight: 'bold' }}>Sale</Text>
                        </View>
                        {/* } */}
                    </View>


                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{ height: 25, width: 25, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 5, position: 'absolute', bottom: 8, right: 10 }}>
                        <AntDesign name="plus" size={17} color="#fff" />
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default ProductComponent;

const styles = StyleSheet.create({});
