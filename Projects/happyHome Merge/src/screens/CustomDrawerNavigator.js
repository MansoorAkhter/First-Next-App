import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerContentScrollViewItemList, DrawerGestureContext, DrawerItemList } from '@react-navigation/drawer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'


const CustomDrawerNavigator = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{ backgroundColor: '#9A478D', }}>
                <View style={{ justifyContent: 'center', margin: 20, left: 5 }}>


                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 90, width: 90, backgroundColor: '#fff', borderRadius: 50, borderWidth: 2, borderColor: '#fff' }}>
                        <Image source={require('../assets/profile.jpg')}

                            style={{ width: 80, height: 80, borderRadius: 50 }}
                        />

                    </View>

                    <Text style={{ fontSize: 18, color: '#fff', paddingVertical: 5, }}>Happy Home</Text>

                </View>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={{ marginLeft: 20, top: -60 }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name="sharealt" size={25} color="#000" />
                        <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 10, color: '#000' }}>Tell a Friend</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={25} color="#000" />
                        <Text style={{ fontSize: 15, fontFamily: 'Roboto-Medium', marginLeft: 10, color: '#000' }}>Sign Out</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CustomDrawerNavigator