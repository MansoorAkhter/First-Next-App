import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, Dimensions } from "react-native";
import React from "react";



const { width, height } = Dimensions.get('screen');

const OrderComponent = ({ orderNum, OrderDate, color }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => console.log("check cart item")}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between", alignItems: "center", height: 70, width: width / 1.02, backgroundColor: '#fff', padding: 10, borderColor: "#ddd", borderRadius: 5, borderWidth: 0.8,
                    alignSelf: "center", marginTop: 5
                }}>

                {/* Product Information */}
                <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", height: 55 }}>

                    <TouchableOpacity
                        style={{ marginRight: 5, borderColor: "#ddd", borderRadius: 5, borderWidth: 1, height: 50, width: 50, justifyContent: "center", alignItems: "center" }}
                        activeOpacity={0.7}>
                        <Image source={require("../../assets/sofri.jpg")} style={{ height: 40, width: 40 }} />
                    </TouchableOpacity>

                    <View style={{ justifyContent: 'space-between', width: "50%", height: "100%" }}>
                        <View>
                            <Text style={{ fontSize: 12.5, fontWeight: '500', color: '#000', textAlign: "justify" }}>Choco Safari by dark choclate</Text>

                            {/* <Text style={{ fontSize: 10, }}>Size {size}</Text> */}
                        </View>

                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "flex-end", width: "95%", position: "absolute", bottom: 0 }}>
                            <Text style={{ fontSize: 12, fontWeight: "800", color: "#000" }}> <Text style={{ fontWeight: "400" }}>SAR </Text>
                                25.00</Text>

                            <Text style={{ fontSize: 12, color: "#bbb", fontWeight: "600", marginTop: 10, textDecorationLine: 'line-through' }}>SAR 45.00
                            </Text>
                        </View>

                    </View>
                </View>

                {/* Order Num & Date */}
                <View style={{ position: "absolute", right: 10, width: "17%", height: 55, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: color, fontSize: 12, fontWeight: "600" }}>
                        {orderNum}
                    </Text>
                    <Text style={{ color: "#000", fontSize: 10, fontWeight: "400" }}>
                        {OrderDate}
                    </Text>
                </View>

            </View>

        </TouchableWithoutFeedback>
    );
};

export default OrderComponent;

const styles = StyleSheet.create({});
