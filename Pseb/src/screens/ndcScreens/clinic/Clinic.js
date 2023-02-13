import { FlatList, Image, ScrollView, StyleSheet, Text, Dimensions, View } from 'react-native'
import React from 'react'
import Dietitians from './Dietitians'
import SelectAClinic from './SelectAClinic'
import { DietitiansList } from '../dummyData'


const Clinic = () => {
  const { width, height } = Dimensions.get("window")

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ justifyContent: "center", alignItems: "center", backgroundColor: "#fff"}}>

      <View style={{ flex: 1, width: "85%" }}>

        {/*HEADER BOX */}
        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
          <Text style={{ color: "#000", fontSize: 22, fontWeight: "700" }}>Clinics</Text>

          <View style={{ height: 150, width: "100%", backgroundColor: "#83B452", borderRadius: 10, marginTop: 10, justifyContent: "space-between", padding: 15, flexDirection: "row", }}>

            <View style={{ width: "60%", height: "100%", justifyContent: "space-between" }}>

              <Text style={{ color: "#fff", fontWeight: "600" }}>We provide comprehensive nutrition services according to medical need</Text>


              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ height: 50, width: 2, backgroundColor: "#fff", marginRight: 7, borderRadius: 10 }} />
                <Text style={{ color: "#fff", fontWeight: "500" }}>Lorem ipsum{'\n'}ipsum lorem abc{'\n'}health is wealth</Text>
              </View>
            </View>


            {/* DOCTOR IMAGE */}
            <View style={{ height: 130, width: "40%", justifyContent: "flex-end", alignItems: "center", bottom: -4.5, left: 5 }}>
              <Image source={require("../assets/transparent_doctor.png")} style={{ width: 110, height: 120 }} />
            </View>
          </View>
        </View>

        {/* Select a Clinic */}
        <SelectAClinic  />

        {/* Dietitians */}
        <Text style={[styles.innerHeading, { marginTop: 20 }]}>Dietitians</Text>
        {DietitiansList.map((item, index) => {
          console.log(item)
          return (
            <Dietitians data={item} identifier={true}/>
          )
        })}
      </View>
    </ScrollView>
  )
}

export default Clinic

const styles = StyleSheet.create({
  innerHeading: {
    color: "#000",
    fontWeight: "700",
    fontSize: 17,
    alignSelf: "flex-start",
    marginBottom: 25,
  }
})