import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React,{useEffect} from 'react'



const { width, height } = Dimensions.get('screen');

const Stater = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('OnBoardingScreen')
        }, 3000);

    }, []);
    

    return (
        <View style={{ flex: 1 }}>

            <View style={{ width: width, height: height }}>
                <TouchableOpacity>
                    <Image source={require('../assets/starter.png')} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Stater