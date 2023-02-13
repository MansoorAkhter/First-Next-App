import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const TestLogin = () => {


    const [userdata, setUserData] = useState()
    console.log(userdata)

    const setData = () => {
        let userEmail = "mansoor@gmail.com"
        AsyncStorage.setItem("userData", userEmail);
        alert("Data Saved")
    }

    const getData = async() => {
        try {
            let user =  await AsyncStorage.getItem("userData");
            alert(user)
            setUserData(user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}>
            <Button title='Set User' onPress={() => setData()} />
            <Button title='Get User' onPress={() => getData()} />
        </View>
    )
}

export default TestLogin