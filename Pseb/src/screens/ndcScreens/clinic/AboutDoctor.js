import { Image, ScrollView, StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const AboutDoctor = (props) => {
    const [identifier, setIdentifier] = useState();
    const navigation = useNavigation();

    const { height, width } = Dimensions.get('window')
    console.log(identifier)

    useEffect(() => {
        setIdentifier(props.route.params.identifier)
    }, [])

    const { designation, img, name, timing, about } = props?.route?.params?.data;

    return (
        <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{flex:1}}
        >

     
            <View style={{ flex:4, backgroundColor: "pink" }}>
                <Image source={img} style={{}} />
            </View>

            <View style={{
                flex: 6,
                paddingTop: 10,
                paddingBottom: 20,
                paddingHorizontal: 40, 
                backgroundColor: "#F1F2F3",
                alignItems: "center",
            }}>

                <View style={{ flex: 1 }}>

                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "600", color: "#000" }}>{designation}</Text>
                        <Text style={{ color: "grey", fontWeight: "600", fontSize: 16 }}>RDN, University of California</Text>
                        <Image source={require("../assets/star-rating.png")} style={{ height: 15, width: 110, marginTop: 5 }} />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#000", fontSize: 17, fontWeight: "700" }}>About {name}</Text>
                        <Text style={{ color: "#000", marginTop: 5, fontSize: 14, textAlign: "justify" }}>{about}</Text>
                    </View>

            

                    <View style={{ marginTop: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                            <View>
                                <Text style={styles.abouts}>Patients</Text>
                                <Text style={[styles.aboutsDetail, { alignSelf: "flex-start" }]}>126</Text>
                            </View>

                            <View>
                                <Text style={styles.abouts}>Experirence</Text>
                                <Text style={[styles.aboutsDetail, { alignSelf: "center" }]}>8 Years</Text>
                            </View>

                            <View>
                                <Text style={styles.abouts}>Certificates</Text>
                                <Text style={[styles.aboutsDetail, { alignSelf: "flex-end" }]}>4</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ marginTop: 50 }}>
                        {identifier === true ?
                            (<TouchableWithoutFeedback
                                onPress={() => navigation.navigate("BookAppointment", { identifier: true })}>
                                <View style={{ backgroundColor: "#EC171F", width: "100%", height: 35, borderRadius: 7, alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>Book an Appointment </Text>
                                </View>
                            </TouchableWithoutFeedback>) :
                            (<TouchableWithoutFeedback
                                onPress={() => alert("Appointment Confirm Successfully")}>
                                <View style={{ backgroundColor: "#EC171F", width: "100%", height: 35, borderRadius: 7, alignItems: "center", justifyContent: "center" }}>
                                    <Text style={{ color: "#fff", fontWeight: "700", fontSize: 15 }}>Confirm Appointment
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>)}
                    </View>
                </View>
            </View>
            {/* </View> */}

        </ScrollView>
    )
}

export default AboutDoctor

const styles = StyleSheet.create({
    abouts: {
        color: "grey", fontWeight: "600", fontSize: 14, marginBottom: 3
    },
    aboutsDetail: {
        color: "#000", fontWeight: "700", fontSize: 19
    }
})