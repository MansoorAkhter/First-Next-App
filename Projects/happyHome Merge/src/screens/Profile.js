import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RadioButton, TextInput } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get('screen');

const Profile = ({ navigation }) => {
    const [value, setValue] = React.useState('first');


    return (
        <View style={{ flex: 1, }}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableWithoutFeedback
                    onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={25} color="#fff"
                        style={{ position: "absolute", left: 10, top: 7 }} />
                </TouchableWithoutFeedback>
                <Text style={styles.headerText}>My Profile</Text>
            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    backgroundColor: "#fff", padding: 15, paddingBottom: 83
                }}>
                <Text style={{
                    color: "#000", fontWeight: "500", fontSize: 18,
                    marginBottom: 5
                }}>
                    Your details
                </Text>
                <Text style={styles.plainText}>
                    Here you can edit your personal details. When you're done, click save.
                </Text>
                <Text style={{
                    color: "grey", fontWeight: "400", fontSize: 13, marginBottom: 10, marginTop: 20
                }}>Title</Text>

                {/* Radio Buttons Field */}
                <View>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={{ width: width / 1.2, flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={styles.buttonWithText}>
                                <RadioButton value="first"
                                    color="#702963" uncheckedColor="grey" />
                                <Text style={styles.plainText}>Mr.</Text>
                            </View>
                            <View style={styles.buttonWithText}>
                                <RadioButton value="second"
                                    color="#702963" uncheckedColor="grey" />
                                <Text style={styles.plainText}>Mrs.</Text>
                            </View>
                            <View style={styles.buttonWithText}>
                                <RadioButton value="third"
                                    color="#702963" uncheckedColor="grey" />
                                <Text style={styles.plainText}>Miss/Ms.</Text>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>

                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.inputLabel}>First Name</Text>
                    <TextInput
                        // value={text}
                        // onChangeText={text => setText(text)}
                        textColor="#702963"
                        underlineColor="#9A478D"
                        activeUnderlineColor="#9A478D"
                        style={styles.inputStyle}
                    />
                </View>
                <View>
                    <Text style={styles.inputLabel}>Last Name</Text>
                    <TextInput
                        // value={text}
                        // onChangeText={text => setText(text)}
                        textColor="#702963"
                        underlineColor="#9A478D"
                        activeUnderlineColor="#9A478D"
                        style={styles.inputStyle}
                    />
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.inputLabel}>Mobile Phone Number</Text>
                    <TextInput
                        // value={text}
                        // onChangeText={text => setText(text)}
                        textColor="#702963"
                        underlineColor="#9A478D"
                        activeUnderlineColor="#9A478D"
                        style={styles.inputStyle}
                    />
                </View>
                <View>
                    <Text style={styles.inputLabel}>Email Address</Text>
                    <TextInput
                        // value={text}
                        // onChangeText={text => setText(text)}
                        textColor="#702963"
                        underlineColor="#9A478D"
                        activeUnderlineColor="#9A478D"
                        style={styles.inputStyle}
                    />
                    <Text style={styles.inputLabel}>Email address cannot be changed</Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.inputLabel}>Date of birth</Text>
                    <TextInput
                        // value={text}
                        // onChangeText={text => setText(text)}
                        textColor="#702963"
                        underlineColor="#9A478D"
                        activeUnderlineColor="#9A478D"
                        style={styles.inputStyle}
                    />
                </View>
                <View>
                    <Text style={styles.inputLabel}>Nationality</Text>
                    <TextInput
                        // value={text}
                        // onChangeText={text => setText(text)}
                        textColor="#702963"
                        underlineColor="#9A478D"
                        activeUnderlineColor="#9A478D"
                        style={styles.inputStyle}
                    />
                </View>

                {/* SAVE BUTTON */}
                <TouchableOpacity style={{
                    backgroundColor: "#702963", padding: 10, borderRadius: 5, marginTop: 20
                }}>
                    <Text style={{ fontSize: 15, fontWeight: "600", color: "#fff", alignSelf: "center" }}>
                        Save
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    header: {
        width: width, height: 40,
        backgroundColor: '#9A478D',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        color: "#fff", fontWeight: "600", fontSize: 17
    },
    plainText: {
        color: "#000", fontWeight: "400", fontSize: 13
    },
    buttonWithText: { flexDirection: "row", alignItems: "center" },
    inputLabel: {
        color: "grey", fontWeight: "400", fontSize: 11
    },
    inputStyle: { borderTopRightRadius: 0, borderTopLeftRadius: 0, height: 33, padding: 5 }
});
