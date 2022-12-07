import { View, Text, TextInput, TouchableOpacity ,Dimensions} from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons//AntDesign'
const width  = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


const Forgot = (props) => {
    return (
        <View style={{ flex: 1 ,width:width , height:height }}>
            <View
                style={{
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '15%',
                    backgroundColor: '#9A478D',
                    borderBottomLeftRadius: 60,
                }}>

                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}>
                    <AntDesign name="arrowleft" size={20} color="#fff" style={{
                        left: -35
                    }} />
                </TouchableOpacity>

                <Text style={{
                    fontSize: 30,
                    fontFamily: 'SemiBold',
                    alignSelf: 'center',
                    color: '#fff',
                }}>Reset Password</Text>

            </View>


            <View onPress={() => props.navigation.navigate('Login')}
                style={{ justifyContent: 'center', top: 50, paddingLeft: 40 }}>
                <Text style={{ fontSize: 23, fontWeight: 'bold' }}>Reset password ?</Text>
                <Text style={{ fontSize: 14, fontWeight: '500', color: '#A9A9A9', top: 10 }}>Atleast 9 character with uppercase and lowercase letter</Text>
            </View>



            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 25,
                    borderBottomWidth: 2,
                    marginTop: 100,
                    paddingHorizontal: 10,
                    borderColor: "#9A478D",
                    borderRadius: 20,
                    paddingVertical: 5
                }}>
                <TextInput
                    placeholder="Code"
                    placeholderTextColor="#000"
                    style={{ paddingHorizontal: 10 }}
                />
            </View>



            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 25,
                    borderBottomWidth: 2,
                    marginTop: 20,
                    paddingHorizontal: 10,
                    borderColor: "#9A478D",
                    borderRadius: 20,
                    paddingVertical: 5
                }}>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#000"
                    style={{ paddingHorizontal: 10 }}
                />
            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 25,
                    borderBottomWidth: 2,
                    marginTop: 40,
                    paddingHorizontal: 10,
                    borderColor: "#9A478D",
                    borderRadius: 20,
                    paddingVertical: 5
                }}>
                <TextInput
                    placeholder="Confirm-Password"
                    placeholderTextColor="#000"
                    style={{ paddingHorizontal: 10 }}

                />
            </View>



            <TouchableOpacity
                style={{
                    marginHorizontal: 55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 60,
                    backgroundColor: '#9A478D',
                    paddingVertical: 10,
                    borderRadius: 23,
                }}>
                <Text
                    style={{
                        color: 'white',
                        fontFamily: 'SemiBold',
                        fontSize: 18,
                    }}>
                    Continue
                </Text>
            </TouchableOpacity>




        </View>
    )
}

export default Forgot