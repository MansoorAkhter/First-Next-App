import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const InstantAdd = () => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.instantContainer}>
                <Image source={require("../assets/sofri.jpg")}
                    style={{ width: 50, height: 50 }} />

                <TouchableOpacity onPress={() => console.log("instant Add")}>
                    <Text style={styles.addBTN}>ADD</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.instantContainer}>
                <Image source={require("../assets/sofri.jpg")}
                    style={{ width: 50, height: 50 }} />

                <TouchableOpacity onPress={() => console.log("instant Add")}>
                    <Text style={styles.addBTN}>ADD</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.instantContainer}>
                <Image source={require("../assets/sofri.jpg")}
                    style={{ width: 50, height: 50 }} />

                <TouchableOpacity onPress={() => console.log("instant Add")}>
                    <Text style={styles.addBTN}>ADD</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.instantContainer}>
                <Image source={require("../assets/sofri.jpg")}
                    style={{ width: 50, height: 50 }} />

                <TouchableOpacity onPress={() => console.log("instant Add")}>
                    <Text style={styles.addBTN}>ADD</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.instantContainer}>
                <Image source={require("../assets/sofri.jpg")}
                    style={{ width: 50, height: 50 }} />

                <TouchableOpacity onPress={() => console.log("instant Add")}>
                    <Text style={styles.addBTN}>ADD</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.instantContainer}>
                <Image source={require("../assets/sofri.jpg")}
                    style={{ width: 50, height: 50 }} />

                <TouchableOpacity onPress={() => console.log("instant Add")}>
                    <Text style={styles.addBTN}>ADD</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.instantContainer}>
                <Image source={require("../assets/sofri.jpg")}
                    style={{ width: 50, height: 50 }} />

                <TouchableOpacity onPress={() => console.log("instant Add")}>
                    <Text style={styles.addBTN}>ADD</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default InstantAdd

const styles = StyleSheet.create({
    instantContainer: {
        height: 97,
        width: 72,
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 0.7,
        borderRadius: 5,
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 2,
        marginVertical: 10,
        padding: 3,
    },
    addBTN: {
        color: "#DD2326",
        fontWeight: "700",
        fontSize: 12
    }
})