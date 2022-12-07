import { View, Text, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React, { useState } from 'react'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar';





const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const item = [
    {
        id: 1,
        image: require('../assets/boarding1.png'),
        name: 'Choose Product',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
        id: 2,
        image: require('../assets/boarding2.png'),
        name: 'Secure Payment',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
    },

    {
        id: 3,
        image: require('../assets/boarding3.png'),
        name: 'Fast Delivery ',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    }
]



const OnBoardingScreen = (props) => {
    const [showHomePage, setShowHomePage] = useState(false)
    const [Loader, setLoader] = useState(false)


    const buttonLabel = (label) => {
        return (
        
            <View style={{ height: 40, width: 120, backgroundColor: '#9A478D', borderRadius: 5, alignItems: 'center', justifyContent: 'center', top: -70, right: 110 }}>
               {Loader === false && <Text style={{ color: '#000', fontSize: 16, color: '#fff' }}>{label}</Text>}
               {Loader === true && <ActivityIndicator size="large" color="#fff" />}
            </View>
        )
    }

    


    const SkipLabel = (label) => {
        return (
            <View style={{width:width,height:100,alignItems:'flex-end',top:-600,left:-40}}>
                <Text style={{ color: '#000', fontSize: 17, fontWeight: '500' }}>{label}</Text>
            </View>
        )
    }


    if (!showHomePage) {
        return (
            <AppIntroSlider
                data={item}
                renderItem={({ item }) => {
                    return (


                        <View style={{ flex: 1,width:width,height:height ,alignItems: 'center', padding: 15, paddingTop: 100 }}>
                            <Image source={item.image} style={{ height: 250, width: width - 10, resizeMode: 'contain' }} />
                            <Text style={{ color: '#000', fontSize: 26, top: 20, textAlign: 'center', fontWeight: 'bold' }}>{item.name}</Text>
                            <Text style={{ color: '#000', top: 20, textAlign: 'center', fontSize: 13 }}>{item.desc}</Text>
                        </View>
                    )
                }}

                activeDotStyle={{
                    backgroundColor: '#9A478D',
                    width: 10,
                }}
                
                showSkipButton
                renderSkipButton={() => SkipLabel("SKIP")}
                renderNextButton={() => buttonLabel("Next")}
                renderDoneButton={() => buttonLabel("Get Started")}
                onDone={() => {
               setLoader(true)
                    setTimeout(() => {
                        props.navigation.navigate('Login')
                        setLoader(false)
                    }, 2000);
                   


                }}


            />
        )
    }




}

export default OnBoardingScreen