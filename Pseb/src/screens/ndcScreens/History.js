import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const History = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
            <View style={{
                backgroundColor: "#fff",
                width: "100%",
                height: 50,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text style={{ color: "#000", fontSize: 15, fontWeight: "500" }}>Transaction History</Text>
            </View>


            {/* History */}
            <ScrollView style={{ flex: 1, paddingHorizontal: 40 }} >
                <HistoryComp dateTime={"10/12/2022 12:01"} status={"Recieved"} points={"250 Points"} />
                <HistoryComp dateTime={"10/12/2022 12:01"} status={"Recieved"} points={"250 Points"} />
                <HistoryComp dateTime={"10/12/2022 12:01"} status={"Recieved"} points={"250 Points"} />
            </ScrollView>
        </View>
    )
}


export default History

export const HistoryComp = (prop) => {
    return (
        <View>
            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: 70,
            }}>
                <View style={{
                    height: 40, justifyContent: "space-between"
                }}>
                    <Text style={{ color: "#000" }}>{prop.dateTime}</Text>
                    <Text style={{ color: "#61CE74", fontWeight: "500" }}>
                        {prop.status}</Text>
                </View>
                <Text style={{ color: "#000" }}>{prop.points}</Text>
            </View>
            {/* Horizontal Line */}
            <View style={{ backgroundColor: "#EEEEEE", height: 1, }} />


               {/* EC171F */}
        </View>
    )
}