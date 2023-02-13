import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TextInput } from 'react-native-paper';

const PlaceOrder = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}
            contentContainerStyle={{ padding: 15, paddingBottom: 83 }}
        >
            {/* address container */}
            <View style={styles.container}>
                <Image source={require("../assets/map-location-pin.jpg")} style={{ width: 45, height: 45, borderRadius: 5 }} />

                <View style={{ marginLeft: 7, width: "85%" }}>
                    <Text style={{ color: "#000", fontWeight: "600", fontSize: 13 }}>
                        Mansoor Akhter</Text>
                    <Text style={{ color: "#000", fontWeight: "400", fontSize: 11 }}>
                        D1- Block-8, Main Chaudhry Khaliq-uz-Zaman Road, Clifton
                    </Text>
                </View>
            </View>

            {/* Shipment container */}
            <View style={{ marginTop: 25 }}>
                <Text
                    style={{ color: "#000", fontWeight: "600", fontSize: 14, marginBottom: 10 }}>
                    2 shipments from Happy Home
                </Text>
                <View style={{ backgroundColor: "#fff", elevation: 7, paddingVertical: 15, paddingHorizontal: 10, borderRadius: 5 }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }}>
                        <Text style={{ color: "#000", fontSize: 12, fontWeight: "600" }}>Shipment 1 of 2</Text>
                        <Text style={{ color: "grey", fontSize: 12, fontWeight: "600" }}>4 items</Text>
                    </View>

                    <View style={{ backgroundColor: "#DA70D666", borderRadius: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 35 }}>

                        <MaterialCommunityIcons name='truck-delivery-outline' color="#000" size={20} style={{ marginLeft: 15 }} />

                        <Text style={[styles.textBlack, { marginLeft: -111 }]}>Standard Delivery</Text>

                        <Pressable style={{ width: 75, height: 35, justifyContent: "center", alignItems: "center" }} 
                        android_ripple={{ color: '#fff', borderless: true}}>
                            <Text style={{ color: "#9A478D", fontWeight: "600", fontSize: 12 }}>CHANGE</Text>
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                        <Text style={[styles.textBlack, { fontWeight: "300" }]}>Delivery cost:</Text>
                        <Text style={styles.textBlack}>SAR 25.00</Text>
                    </View>

                    <View style={{ width: 45, height: 45, borderRadius: 5, borderWidth: 1, borderColor: "#ddd", marginTop: 10, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require("../assets/sofri.jpg")} style={{ width: 35, height: 35, borderRadius: 5 }} />
                    </View>
                </View>
            </View>

            {/* Payment Methodes */}
            <View style={{ marginTop: 20 }}>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }}>
                    <Text style={[styles.textBlack, { fontSize: 15 }]}>Payment Methodes</Text>
                    <Text style={{ color: "grey", fontSize: 12 }}>
                        <MaterialCommunityIcons name='lock' color="grey" size={14} style={{ margin: 15 }} />

                        Secure Payment</Text>
                </View>

                <View style={{ borderColor: "#9A478D", borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, paddingVertical: 15 }}>
                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                        <FontAwesome name='credit-card' color="#000" size={17} style={{ marginRight: 5 }} />
                        <Text style={[styles.textBlack, { fontSize: 13 }]}>
                            Add New Credit or Debit Card
                        </Text>
                    </View>
                    <View>
                        <TextInput
                            label="Card number"
                            // value={text}
                            // onChangeText={text => setText(text)}
                            activeUnderlineColor="#9A478D"
                            textContentType="creditCardNumber"
                            keyboardType="numeric"
                        />
                        <Image source={require("../assets/visa.png")}
                            style={{ position: "absolute", right: 32, top: 20, width: 25, height: 17 }} />
                        <Image source={require("../assets/mastercard.png")} style={{
                            position: "absolute", right: 5, top: 20,
                            width: 25, height: 17
                        }} />
                    </View>

                    <View
                        style={{ flexDirection: "row", justifyContent: "space-between" }}
                    >
                        <TextInput
                            label="Expirey date"
                            // value={text}
                            // onChangeText={text => setText(text)}
                            style={{ width: "70%", borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                            activeUnderlineColor="#9A478D"
                        />

                        <TextInput
                            label="CVV"
                            // value={text}
                            // onChangeText={text => setText(text)}
                            style={{ width: "29%", borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                            activeUnderlineColor="#9A478D"
                            keyboardType="numeric"


                        />
                        <Image source={require("../assets/cvv.png")} style={{
                            position: "absolute", right: 20, top: 23,
                            width: 20, height: 17
                        }} />

                    </View>
                    <TextInput
                        label="Name on card"
                        // value={text}
                        // onChangeText={text => setText(text)}
                        activeUnderlineColor="#9A478D"
                        style={{ borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                    />
                </View>
            </View>

        </ScrollView>
    );
};

export default PlaceOrder;

const styles = StyleSheet.create({
    container: { flexDirection: "row", backgroundColor: "#fff", padding: 5, borderRadius: 5, elevation: 3 },
    textBlack: { color: "#000", fontSize: 12, fontWeight: "600" }
});
