import { StyleSheet, Text, View, Dimensions, Image, FlatList, Pressable, Modal, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RedeemData } from './dummyData'

const Redeem = () => {
    const { width, height } = Dimensions.get("window")


    // ================
    const [modalVisible, setModalVisible] = useState(false);

    const modalOpener = () => {
        setModalVisible(true)
    }
    // =================
    return (
        <View style={{ flex: 1, backgroundColor: "#fff", marginTop: 20 }}>

            <FlatList
                data={RedeemData}
                contentContainerStyle={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}
                renderItem={({ item }) => {
                    return (

                        <Pressable
                            onPress={() => setModalVisible(true)}
                            style={{
                                backgroundColor: "#fff", height: 120,
                                width: width / 2.5, elevation: 10, borderRadius: 7, padding: 10,
                                alignItems: "center",
                                margin: 10
                            }}>

                            <Image source={item.img} style={{ height: 75, width: "100%", borderRadius: 7 }} />

                            <Text style={{ color: "grey", fontWeight: "600", fontSize: 17, top: 6 }}>{item.name}</Text>
                        </Pressable>

                    )
                }}
            />

            {/* MODAL */}
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
            >
                <TouchableOpacity activeOpacity={1} style={{ backgroundColor: '#000000aa', height: "100%" }} onPress={() => setModalVisible(false)} />

                <View style={{
                    height: '75%',
                    marginTop: 'auto',
                    backgroundColor: '#fff',
                    borderTopEndRadius: 25,
                    borderTopStartRadius: 25,
                }}>
                    <View style={{
                        backgroundColor: "#61CE70", height: 70,
                        borderTopEndRadius: 25,
                        borderTopStartRadius: 25,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        {/* Top-Line */}
                        <View style={{
                            width: "40%", height: 3,
                            backgroundColor: "#fff",
                            borderRadius: 10, top: -9
                        }} />

                        <Text style={{
                            color: "#fff", fontSize: 25, fontWeight: "500", bottom:-4
                        }}>Coupons</Text>
                    </View>

                    {/* COUPON */}
                    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: 30 }}>

                        <Pressable
                            onPress={() => console.log("COUPON CLICKED")}
                            style={{
                                backgroundColor: "#fff", width: 100, height: 70, elevation: 10, borderRadius: 7, justifyContent: "center", alignItems: "center", marginTop: 30,
                                marginHorizontal: 15
                            }}>
                            <Text style={{
                                color: "#000", fontSize: 20,
                                textAlign: "center"
                            }}>
                                250{'\n'}SR</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => console.log("COUPON CLICKED")}
                            style={{
                                backgroundColor: "#fff", width: 100, height: 70, elevation: 10, borderRadius: 7, justifyContent: "center", alignItems: "center", marginTop: 30,
                                marginHorizontal: 15
                            }}>
                            <Text style={{
                                color: "#000", fontSize: 20, textAlign: "center"
                            }}>
                                250{'\n'}SR</Text>
                        </Pressable>

                    </View>

                </View>
            </Modal>
        </View>

    )
}

export default Redeem

const styles = StyleSheet.create({})