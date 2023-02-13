import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Pressable, Dimensions } from 'react-native';


const Filter = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [sortModal, setSortModal] = useState(false);

  const { width, height } = Dimensions.get('screen');

  return (
    <View style={{ backgroundColor:"#fff",padding: 10, flexDirection: "row", justifyContent:"space-between" }}>
      <Text style={{color:"grey"}}>17 Results</Text>
    
      <View style={{flexDirection: "row", alignItems:"center"}} >

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View >
                <Text style={styles.sortby}> Show in</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image source={require("../assets/View.png")}
                  style={{ height: 19, width: 19, marginRight: 5 }} />
                <Text style={styles.modalText}>Grid View</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image source={require("../assets/listView.png")}
                  style={{ height: 19, width: 19, marginRight: 5 }} />
                <Text style={styles.modalText}>List View </Text>
              </View>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={{ flexDirection: "row", alignItems:"center"}} onPress={() => setModalVisible(true)}>
          <Image source={require("../assets/View.png")}
            style={{ height: 16, width: 16, }} />
          <Text style={{ fontWeight: "400", color: "#000" }}> View </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={sortModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setSortModal(!sortModal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View >
                <Text style={styles.sortby}>Sort By</Text>
              </View>
              <Text style={styles.modalText}>Relevance </Text>
              <Text style={styles.modalText}>Price ( lowest first)</Text>
              <Text style={styles.modalText}>Price (highest first)</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setSortModal(!sortModal)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={{ flexDirection: "row", alignItems:"center"}} onPress={() => setSortModal(true)} >
          <Image source={require("../assets/sort.png")}
            style={{ height: 15, width: 15, marginLeft: 10 }} />

          <Text style={{ fontWeight: "400", color: "#000" }}> Sort </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={filterModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setFilterModal(!filterModal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View >
                <Text style={styles.sortby}>Filter By</Text>
              </View>
              <Text style={styles.modalText}>Price (PRK) </Text>
              <View style={{ borderWidth: 0.25 }}></View>


              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 160, width: 280 }}>
                <Pressable
                  style={styles.buttonF}
                  onPress={() => setFilterModal(!filterModal)}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>

                <TouchableOpacity style={styles.buttonF}>
                  <Text style={styles.textStyle}>Show</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
        <TouchableOpacity style={{ flexDirection: "row", alignItems:"center" }} onPress={() => setFilterModal(true)}>
          <Image source={require("../assets/Filter.png")}
            style={{ height: 15, width: 15, marginLeft: 10 }} />

          <Text style={{ fontWeight: "400", color: "#000" }}> Filter</Text>
        </TouchableOpacity>


      </View>
    </View>
  )
}

export default Filter;


const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 350,
    width: 380,
    bottom: 0,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#9A478D',
    width: 70,


  },
  buttonF: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#9A478D',
    width: 70,




  },


  textStyle: {
    color: 'white',
    fontWeight: 'bold',

  },
  modalText: {
    marginBottom: 15,
    color: "#000",
    fontWeight: "900",
    fontSize: 16

  },
  sortby: {
    marginTop: -10,
    marginBottom: 25,
    fontWeight: 'bold',
    color: "#9A478D",
    fontSize: 17

  },
});


