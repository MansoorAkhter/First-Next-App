import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LanguageScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "lightgrey", justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.heading}>Select a Language</Text>
            <View style={{ backgroundColor: "#fff", elevation: 7, height: 350, width: "60%", borderRadius: 7, justifyContent:"center", alignItems:"center" }}>
            
                <Text style={styles.langName}>Arabic</Text>
                <Text style={styles.langName}>English</Text>
            </View>
        </View>
    )
}

export default LanguageScreen

const styles = StyleSheet.create({

    langName: { fontSize: 20, fontWeight: "600", color: "#000", marginBottom:25 },
    heading:{fontSize:23, color:"#000", fontWeight:"600", marginBottom:20}
})