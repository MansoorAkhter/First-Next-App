import { Pressable, Text, View,  Image, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ASSETS } from '../../assets'
import { DietPlanData } from './dummyData';

const Plans = ({navigation}) => {


    return (
        <View style={{ flex: 1, backgroundColor: "#fff", marginTop: 20 }}>
            <FlatList data={DietPlanData} keyExtractor={(item, id) => id}
                renderItem={({ item }) => {
                    return (

                        <Pressable
                            onPress={()=>navigation.navigate("PlanDetail", {data:item, id:item.id})}
                            style={{
                                backgroundColor: "#fff", elevation: 10, borderRadius: 5, padding: 7, height: 70, width: "93%", flexDirection: "row", alignItems: "center", alignSelf: "center", marginVertical: 5
                            }}>

                            <Image source={item?.img} style={{ height: 60, width: 55, borderRadius: 5 }} />

                            <View style={{ marginLeft: 26, justifyContent: "flex-start", alignItems: "flex-start" }}>
                                <View
                                    style={{
                                        backgroundColor: "#F76F72", borderRadius: 9, width: 55, justifyContent: "center", alignItems: "center"
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "#fff", fontWeight: "600", fontSize: 12
                                        }}>
                                        Ended
                                    </Text>
                                </View>
                                <Text style={{
                                    color: "#000", fontWeight: "800", fontSize: 15, marginVertical: 2
                                }}>{item?.planName}</Text>
                                <Text style={{
                                    color: "grey", fontWeight: "600", fontSize: 13
                                }}>
                                    {item?.date}</Text>
                            </View>
                        </Pressable>
                    )
                }} />


        </View>
    );
}

export default Plans

const styles = StyleSheet.create({

})