import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Slider from '../components/Slider';
import ProductSlider from '../components/ProductSlider';
import { Button } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    //let { name, price, image } = this.props.route;

    this.state = {
      item: this.props.route.params.item,
      images: []
    }
  }
  componentDidMount() {
    let images = [];

    images.push(this.props.route.params.item.image)


    this.setState({
      images: images
    });
  }


  render() {
    console.log("Params", this.props.route.params.item);
    
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '13%', backgroundColor: '#9A478D', borderBottomRightRadius: 80 }}>

          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={25} color="#fff" style={{
              left: -60
            }} />
          </TouchableOpacity>


          <Text
            style={{
              fontSize: 30,
              fontFamily: "SemiBold",
              alignSelf: "center",
              color: '#fff',

            }}>Product Details</Text>

        </View>
        <View style={{ justifyContent: 'center', alignItems:'center' ,height:'30%', width: '100%',marginTop:20}}>
          <ProductSlider images={this.state.images} />
        </View> 

                                                                                                              

        <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', height: '60%', width: '100%', marginTop: 50,backgroundColor: '#9A478D', borderTopRightRadius: 25 ,borderTopLeftRadius:25}}>
          <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 10, top: 40, marginHorizontal: 100, left: -80 }}>
            <MaterialCommunityIcons name="truck-fast" size={25} color="#fff" />
            <Text style={{ color: "#fff", left: -10, fontSize: 15, }}>Free Shipping</Text>
          </TouchableOpacity>
          <View style={{ alignSelf:'center',left: -20, padding: 30,marginTop:40 }}>
            <Text style={{ fontSize: 20, color: '#fff', paddingBottom:20}}>Brands  {this.state.item.name}</Text>
            <Text style={{ fontSize: 14, color: '#fff', paddingBottom: 20 }}>Price: SAR {this.state.item.price}</Text>
            <Text style={{ fontSize: 14, color: '#fff', paddingBottom: 20 }}>Size:  {this.state.item.size}</Text>
            <Text style={{ fontSize: 20, color: '#fff', paddingRight: 30,}}>{this.state.item.descripton}</Text>
          </View>


          
          <View style={{ margin: 75, right: 60, top: -70 }}>
            <Button icon="cart" mode="contained" buttonColor='#fff' textColor='#000' onPress={() => this.props.navigation.navigate('Cart', { img: this.props.route.params.item } )}>
              Add To Cart
            </Button>
          </View>

        </View> 
      </View>
    )
  }
}