import { StyleSheet, Text, View, Modal, Button, ImageBackground, ScrollView, Pressable, } from 'react-native'
import React, { useState } from 'react'
import Svg, { G, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const PlanDetail = (props) => {
    const navigation = useNavigation();
    const [weightProgress, setWeightProgress] = useState(true);

    const { id, planName, img, orderID, paymentStatus, planDuration, calories, created, date, deliveryPkp } = props.route.params.data;

    return (

        <ScrollView showsVerticalScrollIndicator={false}>

            <ImageBackground
                source={img}
                resizeMode="cover"
                style={{ flex: 1, height: 350, padding: 10, }}
            >
                {/* GO-Back Icon */}
                <Pressable onPress={() => navigation.goBack()}
                    style={{
                        width: 40,
                        height: 40,
                        padding: 12,
                        elevation: 15,
                        borderRadius: 7,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fff",
                    }}>
                    <Svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#c40000" height="25" width="25" xmlns="http://www.w3.org/2000/svg"
                        style="color: rgb(196, 0, 0);"><Path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></Path></Svg>
                </Pressable>
            </ImageBackground>


            {/* Center Heading */}
            <View style={{ alignItems: "center", alignSelf: "center", backgroundColor: "#F3F3F3", width: "100%", padding: 5 }}>
                <Text style={{
                    color: "#000", fontWeight: '700', fontSize: 25, marginBottom: 5
                }}>{planName}</Text>

                <View style={{ flexDirection: "row", alignItems: "center", marginLeft: -5 }}>

                    <Svg stroke="" fill="#DE2248" stroke-width="0" viewBox="0 0 24 24" color="crimson" height="24" width="24" xmlns="http://www.w3.org/2000/svg" style="color: crimson;"><Path fill="none" d="M0 0h24v24H0z"></Path><Path d="M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59-1.81-1.37-2-3.34-1.84-4.75.06-.52-.62-.77-.91-.34C4.69 10.16 4 11.84 4 14.37c.38 5.6 5.11 7.32 6.81 7.54 2.43.31 5.06-.14 6.95-1.87 2.08-1.93 2.84-5.01 1.72-7.69zm-9.28 5.03c1.44-.35 2.18-1.39 2.38-2.31.33-1.43-.96-2.83-.09-5.09.33 1.87 3.27 3.04 3.27 5.08.08 2.53-2.66 4.7-5.56 2.32z"></Path></Svg>


                    <Text style={{ color: "#DE2248", fontWeight: "600" }}>
                        {calories} Calories/Day
                    </Text>
                </View>
            </View>



            {/* CHART AREA */}
            <View style={{ marginTop: 35, paddingHorizontal: 15 }}>
                <Text style={{ alignSelf: "center", fontWeight: "700", color: "grey", fontSize: 13 }}>
                    Your Weight Progress</Text>

                <View style={{ marginTop: 20 }}>
                    <View style={{
                        flexDirection: "row", alignSelf: 'center', alignItems: "center", marginBottom: 5
                    }}>
                        {/* PINK BOX BUTTON */}
                        <Pressable style={{ backgroundColor: "#FFB1C1", width: 40, height: 15, borderWidth: 3, borderColor: "#FF6384", marginRight: 5 }}
                            onPress={() => setWeightProgress(weightProgress === true ? false : true)}></Pressable>
                        <Text style={{ fontSize: 12, textDecorationLine: weightProgress === false ? "line-through" : null }}>
                            Weight Progress (KG)
                        </Text>
                    </View>

                    <View style={{ backgroundColor: "lightgrey", height: 200, }}></View>


                    <View style={{ marginTop: 40, marginBottom: 50 }}>
                        <View style={styles.orderDetail}>
                            <Text style={styles.rightText}>Created:</Text>
                            <Text style={styles.leftText}>{created}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.rightText}>Order ID:</Text>
                            <Text style={styles.leftText}>{orderID}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.rightText}>Plan Duration</Text>
                            <Text style={styles.leftText}>{planDuration}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.rightText}>Delivery/Pickup</Text>
                            <Text style={styles.leftText}>{deliveryPkp}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.rightText}>Payment Status</Text>
                            <Text style={styles.leftText}>{paymentStatus}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default PlanDetail

const styles = StyleSheet.create({

    orderDetail: {
        justifyContent: "space-between", flexDirection: "row", marginBottom: 2
    },
    rightText: { color: "#000", fontWeight: "700" },
    leftText: { color: "#000", fontSize: 13 }
})