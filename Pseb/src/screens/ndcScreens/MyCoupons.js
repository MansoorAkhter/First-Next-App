import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { G, Path, Rect, Svg, SvgUri } from 'react-native-svg';
import { ASSETS } from '../../assets';

const MyCoupons = () => {
    const { width, height } = Dimensions.get("window")

    return (
        <View style={{ flex: 1, backgroundColor: "#F9F9F9", alignItems: "center" }}>

            <View
                style={{
                    width: width / 1.4, height: 90, backgroundColor: "#fff", borderRadius: 7, marginVertical: 1, marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 12
                }}>


                <Image source={require("./assets/fitness_time.jpg")}
                    style={{ width: 100, height: 60 }} />
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "#000" }}>NDC App</Text>
                    <Text style={{ color: "#EC171F", fontSize: 20 }}>
                        CDW35AT</Text>
                    <Text style={{ color: "#000", fontSize: 10 }}>Valid until 20-12-2022</Text>
                </View>
            </View>
            <View
                style={{
                    width: width / 1.4, height: 90, backgroundColor: "#fff", borderRadius: 7, marginVertical: 1, marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 12
                }}>


                <Image source={require("./assets/fitness_time.jpg")}
                    style={{ width: 100, height: 60 }} />
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "#000" }}>NDC App</Text>
                    <Text style={{ color: "#EC171F", fontSize: 20 }}>
                        CDW35AT</Text>
                    <Text style={{ color: "#000", fontSize: 10 }}>Valid until 20-12-2022</Text>
                </View>
            </View>
            <View
                style={{
                    width: width / 1.4, height: 90, backgroundColor: "#fff", borderRadius: 7, marginVertical: 1, marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 12
                }}>


                <Image source={require("./assets/fitness_time.jpg")}
                    style={{ width: 100, height: 60 }} />
                <View style={{ alignItems: "center" }}>
                    <Text style={{ color: "#000" }}>NDC App</Text>
                    <Text style={{ color: "#EC171F", fontSize: 20 }}>
                        CDW35AT</Text>
                    <Text style={{ color: "#000", fontSize: 10 }}>Valid until 20-12-2022</Text>
                </View>
            </View>
        </View>
    )
}

export default MyCoupons