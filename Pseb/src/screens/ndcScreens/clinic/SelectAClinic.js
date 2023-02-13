import { View, Text, TouchableHighlight, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { SelectClinic } from '../dummyData'
import { useNavigation } from '@react-navigation/native'

const SelectAClinic = () => {
    const [clinic, setClinic] = useState()
    const navigation = useNavigation();

    return (
        <View>
            <View style={{ marginTop: 35, alignItems: "center" }}>

                <Text style={{
                    color: "#000",
                    fontWeight: "700",
                    fontSize: 17,
                    alignSelf: "flex-start",
                    marginBottom: 15,
                }}>Select a Clinic</Text>

                <View
                    style={{ flexDirection: "row", justifyContent: "space-between", width: "100%", marginBottom: 18 }}
                >

                    {SelectClinic.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                onPress={() => setClinic(index)}>
                                <View
                                    style={clinic === index ? styles.selectedBtn : styles.normalBtn}>
                                    <Text
                                        style={clinic === index ? { color: "#fff", fontWeight: "600" } : { color: "#83B452", fontWeight: "600" }}>{item}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })}

                </View>

                <TouchableWithoutFeedback
                    onPress={() => navigation.navigate("BookAppointment", {identifier:false})}
                >
                    <View style={{ backgroundColor: "#83B452", width: "100%", height: 35, elevation: 10, borderRadius: 7, alignItems: "center", justifyContent: "center" }}>
                        <Text
                            style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>
                            Book an Appointment
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

export default SelectAClinic

const styles = StyleSheet.create({
    selectedBtn: {
        backgroundColor: "#83B452", width: 95, height: 32, elevation: 10, borderRadius: 7, alignItems: "center", justifyContent: "center"
    },

    normalBtn: {
        backgroundColor: "#fff", width: 95, height: 32, elevation: 10, borderRadius: 7, alignItems: "center", justifyContent: "center"
    }
})