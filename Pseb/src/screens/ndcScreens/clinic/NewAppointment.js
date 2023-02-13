import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import { AfternoonSlots, AppointmentType, EveningSlots, MorningSlots } from '../dummyData'

const NewAppointment = ({navigation}) => {
    const { width } = Dimensions.get("window")
    const [appointType, setAppointType] = useState()
    const [morningSlots, setMorningSlots] = useState()
    const [afternoonSlots, setAfternoonSlots] = useState()
    const [eveningSlots, setEveningSlots] = useState()

    return (
        <View style={{ flex: 1, backgroundColor: "#F1F2F3", }}>
            <Text>Calender</Text>
            <View style={{ backgroundColor: "#fff", width: width, height: 80 }}>
                <ScrollView horizontal
                    contentContainerStyle={{ paddingRight: 10, backgroundColor: "#fff", height: 80, alignItems: "center" }}
                >

                    <TouchableWithoutFeedback onPress={() => console.log("Calender")}>
                        <View style={{ backgroundColor: "#F1F2F3", width: 60, height: 55, borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: 10, }}>
                            <Text style={{ color: "grey" }}>13</Text>
                            <Text style={{ color: "grey" }}>Tue</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => console.log("Calender")}>
                        <View style={{ backgroundColor: "#F1F2F3", width: 60, height: 55, borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: 10, }}>
                            <Text style={{ color: "grey" }}>13</Text>
                            <Text style={{ color: "grey" }}>Tue</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => console.log("Calender")}>
                        <View style={{ borderWidth: 1.5, borderColor: "#F1F2F3", width: 60, height: 55, borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: 10, }}>
                            <Text style={{ color: "#000" }}>14</Text>
                            <Text style={{ color: "#000" }}>Wed</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => console.log("Calender")}>
                        <View style={{ backgroundColor: "#EC171F", width: 60, height: 55, borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: 10, }}>
                            <Text style={{ color: "#fff" }}>15</Text>
                            <Text style={{ color: "#fff" }}>Thu</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => console.log("Calender")}>
                        <View style={{ borderWidth: 1.5, borderColor: "#F1F2F3", width: 60, height: 55, borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: 10, }}>
                            <Text style={{ color: "#000" }}>14</Text>
                            <Text style={{ color: "#000" }}>Wed</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={() => console.log("Calender")}>
                        <View style={{ borderWidth: 1.5, borderColor: "#F1F2F3", width: 60, height: 55, borderRadius: 10, justifyContent: "center", alignItems: "center", marginLeft: 10, }}>
                            <Text style={{ color: "#000" }}>14</Text>
                            <Text style={{ color: "#000" }}>Wed</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </ScrollView>
            </View>

            <View style={{ paddingHorizontal: 40 }}>

                <View style={{ marginTop: 20 }}>
                    <Text style={styles.compHeading}>Appointment Type</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>

                        {AppointmentType.map((time, index) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => setAppointType(index)}
                                >
                                    <View
                                        style={appointType === index ? styles.selectedSlot : styles.activeSlots}>
                                        <Text style={appointType === index ? { color: "#fff" } : { color: "#000" }}>{time}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}

                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.compHeading}>Morning Slots</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>

                        {MorningSlots.map((time, index) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => setMorningSlots(index)}
                                >
                                    <View
                                        style={morningSlots === index ? styles.selectedSlot : styles.activeSlots}>
                                        <Text style={morningSlots === index ? { color: "#fff" } : { color: "#000" }}>{time}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}

                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.compHeading}>Afternoon Slots</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>

                        {AfternoonSlots.map((time, index) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => setAfternoonSlots(index)}
                                >

                                    <View
                                        style={afternoonSlots === index ? styles.selectedSlot : styles.activeSlots}>
                                        <Text style={afternoonSlots === index ? { color: "#fff" } : { color: "#000" }}>{time}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}

                    </View>
                </View>

                <View style={{ marginTop: 30}}>
                    <Text style={styles.compHeading}>Evening Slots</Text>
                    <View style={{ flexDirection: "row", flexWrap: "wrap"}}>

                        {EveningSlots.map((time, index) => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => setEveningSlots(index)}
                                >

                                    <View
                                        style={eveningSlots === index ? styles.selectedSlot : styles.activeSlots}>
                                        <Text style={eveningSlots === index ? { color: "#fff" } : { color: "#000" }}>{time}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}

                    </View>
                </View>


                <View style={{ marginTop: 50 }}>
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate("AvailableDietitians")}>
                        <View style={{ backgroundColor: "#EC171F", width: "100%", height: 35, borderRadius: 7, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>See Available Dietitians</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </View>
        </View>
    )
}

export default NewAppointment

const styles = StyleSheet.create({

    compHeading: {
        color: "#000",
        fontWeight: "600",
        fontSize: 17,
        alignSelf: "flex-start",
        marginBottom: 15,
        margin:5
    },
    activeSlots: { backgroundColor: "#fff", width: 92, height: 32, elevation: 7, borderRadius: 7, alignItems: "center", justifyContent: "center", margin: 5 },

    selectedSlot: { backgroundColor: "#EC171F", width: 92, height: 32, elevation: 7, borderRadius: 7, alignItems: "center", justifyContent: "center", margin: 5 },

    reservedSlots: {
        backgroundColor: "grey", width: 92, height: 32, elevation: 7, borderRadius: 7, alignItems: "center", justifyContent: "center", margin: 5
    }
})