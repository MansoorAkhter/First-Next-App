import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';


const Dietitians = (prop) => {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get("window")

    // const [identifier, setIdentifier] = useState();
    // console.log(identifier)

    // useEffect(() => {
    //     setIdentifier(prop?.identifier)
    // }, [])

    return (

        <Pressable
            onPress={() => {
                navigation.navigate("AboutDoctor",
                    { data: prop?.data, identifier: prop?.identifier })
            }}
            style={{
                width: width / 1.15, height: 110, elevation: 8, backgroundColor: "#FFF", borderRadius: 7, padding: 10, marginBottom: 15, flexDirection: "row", alignItems: "center", overflow: "hidden"
            }}>

            <View style={{ width: "32%", height: 90 }}>
                <Image source={prop?.data?.img} style={{ width: 85, height: 90, borderRadius: 7 }} />
            </View>

            <View style={{ width: "60%", height: 90, justifyContent: "space-between" }}>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 15, color: "#000", fontWeight: "500" }}>{prop?.data?.name}</Text>
                    <Image source={require("../assets/star-rating.png")} style={{ height: 12, width: 72.5 }} />
                </View>

                <View>
                    <Text style={{ color: "#000", marginBottom: 5 }}>{prop?.data?.designation}</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Svg viewBox="0 0 24 24" role="presentation" width="15" height="15"><Path d="M21 11.11V5C21 3.9 20.11 3 19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.11C12.37 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.37 21 11.11M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M5 19V5H7V7H17V5H19V9.68C18.09 9.25 17.08 9 16 9H7V11H11.1C10.5 11.57 10.04 12.25 9.68 13H7V15H9.08C9.03 15.33 9 15.66 9 16C9 17.08 9.25 18.09 9.68 19H5M16 21C13.24 21 11 18.76 11 16S13.24 11 16 11 21 13.24 21 16 18.76 21 16 21M16.5 16.25L19.36 17.94L18.61 19.16L15 17V12H16.5V16.25Z" fill="#000"></Path></Svg>
                        <Text style={{ color: "#000", marginLeft: 6 }}>
                            {prop?.data?.timing}</Text>
                    </View>

                </View>
            </View>

            {/* Heart */}
            <View style={{ height: 90, width: "10%", alignItems: "center", justifyContent: "flex-end", marginBottom: 15, right: 5 }}>
                <Svg viewBox="0 0 24 24" role="presentation" width="23" height="23"><Path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" fill="rgb(187, 187, 187)"></Path></Svg>
            </View>

        </Pressable>


    )
}

export default Dietitians

const styles = StyleSheet.create({
    // innerHeading: {
    //     color: "#000",
    //     fontWeight: "600",
    //     fontSize: 17,
    //     alignSelf: "flex-start",
    //     marginBottom: 25
    // }
})