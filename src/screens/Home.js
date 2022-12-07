import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, Dimensions, ImageBackground, } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import 'react-native-gesture-handler';
import * as data from '../components/Data';
import { DEALS } from '../components/Data';
import { DEALS1 } from '../components/Data';
import { LatestProduct } from '../components/Data';
import { HealthProduct } from '../components/Data';
import { FreshAndBeverage } from '../components/Data';
import { BlOG } from '../components/Data';
import Slider from '../components/Slider';
import { clockRunning } from 'react-native-reanimated';
import { TextInput } from 'react-native-gesture-handler';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const Categories = ({ name, image, onPress }) => {

  return (

    <View style={{width:width/3 ,alignItems: 'center', top: 20,}}>
      <TouchableOpacity style={{ alignItems: 'center' }}
        onPress={onPress}>

        <View style={{ height: 100, width: 100, backgroundColor: '#rgb(238,238,238) 0%', borderRadius: 150, margin: 5, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{
            uri: image,
          }}

            style={{ height: 90, width: 90, }} />
        </View>
        <Text style={{ fontSize: 15, fontWeight: 'bold',textAlign:'center' }}>{name}</Text>
      </TouchableOpacity>




    </View>
  )

}






const Deal = ({ image }) => {
  return (

    <View style={{ alignItems: 'center', top: 20, padding: 10 }}>
      <TouchableOpacity
        activeOpacity={0.4}>
        <Image source={{
          uri: image,
        }} style={{ width: width-25, height: 170, borderRadius: 10,resizeMode:'contain' }} />
      </TouchableOpacity>

    </View>

  )
}



const DealCategories = ({ item }) => {
  return (
    <Deal
      item={item}
      image={item.image}
    />
  )
}



const Deal1 = ({ image }) => {
  return (

    <View style={{ alignItems: 'center', top: 20, padding: 10 }}>
      <TouchableOpacity
        activeOpacity={0.4}>
        <Image source={{
          uri: image,
        }} style={{ width: width - 25, height: 170, borderRadius: 10, resizeMode: 'contain' }} />
      </TouchableOpacity>
    </View>

  )
}



const DealCategories1 = ({ item }) => {
  return (
    <Deal1
      item={item}
      image={item.image}
    />
  )
}






const Latest = ({ image, Sale, name, Desc, Size, Origin, KindOfOffer, Price }) => {
  return (
    <View style={{ marginTop: 20, marginHorizontal: 5, backgroundColor: '#fff' }}>

      <View style={{ height: height/2, width: width/2.1, backgroundColor: '#fff', borderRadius: 10, elevation: 2, overflow: 'hidden' }}>
        {Sale === "" ? <View style={{ height: 20, width: 40, backgroundColor: '#fff', alignItems: 'center' }}>
        </View> : <View style={{ height: 20, width: 40, backgroundColor: 'red', alignItems: 'center', alignSelf: 'flex-end', margin: 5 }}>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', }}>{Sale}</Text>
        </View>}

        <TouchableOpacity
          activeOpacity={0.5}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            resizeMode='contain'
            source={{ uri: image }} style={{ height: 180, width: 170 }} />
        </TouchableOpacity>


        <View style={{ justifyContent: 'center', marginTop: 15, alignSelf: 'flex-start', marginLeft: 10 }}>
          <TouchableOpacity
            activeOpacity={0.2}>
            <Text style={{ fontSize: 15, color: '#9A478D', fontWeight: '500' }}>{name}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>{Desc}</Text>
          <Text style={{ fontSize: 12, color: '#000', }}>Size:  {Size}</Text>
          <Text style={{ fontSize: 12, color: '#000', }}>Origin: {Origin}</Text>
          {!KindOfOffer ? null : <Text style={{ fontSize: 13, color: '#000', textDecorationLine: 'line-through' }}>{KindOfOffer}</Text>}
          <Text style={{ fontSize: 12, color: '#DD2326', }}>Price:  {Price}</Text>

        </View>


        <TouchableOpacity
          activeOpacity={0.5}
          style={{ height: 35, width: 35, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 20, position: 'absolute', bottom: 5, right: 10 }}>
          <EvilIcons name="cart" size={25} color="#fff" />
        </TouchableOpacity>


      </View>


    </View>

  )
}



const LatestPRODUCT = ({ item }) => {
  return (
    <Latest
      item={item}
      Sale={item.Sale}
      image={item.image}
      name={item.name}
      Desc={item.Desc}
      Size={item.Size}
      Origin={item.Origin}
      KindOfOffer={item.KindOfOffer}
      Price={item.Price}
    />
  )
}


// Health & DIET Prdouct Categories

const Health = ({ image, Sale, name, Desc, Size, Origin, KindOfOffer, Price }) => {
  return (
    <View style={{ flex: 1, marginTop: 20, marginHorizontal: 5, backgroundColor: '#fff' }}>

      <View style={{ height: height / 2, width: width / 2.1, backgroundColor: '#fff', borderRadius: 10, elevation: 2, overflow: 'hidden' }}>
        {Sale === "" ? <View style={{ height: 20, width: 40, backgroundColor: '#fff', alignItems: 'center' }}>
        </View> : <View style={{ height: 20, width: 40, backgroundColor: 'red', alignItems: 'center', alignSelf: 'flex-end', margin: 5 }}>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', }}>{Sale}</Text>
        </View>}

        <TouchableOpacity
          activeOpacity={0.5}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            resizeMode='contain'
            source={{ uri: image }} style={{ height: 180, width: 170 }} />
        </TouchableOpacity>


        <View style={{ justifyContent: 'center', marginTop: 15, alignSelf: 'flex-start', marginLeft: 10 }}>
          <TouchableOpacity
            activeOpacity={0.2}>
            <Text style={{ fontSize: 15, color: '#9A478D', fontWeight: '500' }}>{name}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>{Desc}</Text>
          <Text style={{ fontSize: 12, color: '#000', }}>Size:  {Size}</Text>
          <Text style={{ fontSize: 12, color: '#000', }}>Origin: {Origin}</Text>
          {!KindOfOffer ? null : <Text style={{ fontSize: 13, color: '#000', textDecorationLine: 'line-through' }}>{KindOfOffer}</Text>}
          <Text style={{ fontSize: 12, color: '#DD2326', }}>Price:   {Price}</Text>

        </View>


        <TouchableOpacity
          activeOpacity={0.5}
          style={{ height: 35, width: 35, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 20, position: 'absolute', bottom: 5, right: 10 }}>
          <EvilIcons name="cart" size={25} color="#fff" />
        </TouchableOpacity>


      </View>


    </View>

  )
}



const HealthPRODUCTS = ({ item }) => {
  return (
    <Health
      item={item}
      Sale={item.Sale}
      image={item.image}
      name={item.name}
      Desc={item.Desc}
      Size={item.Size}
      Origin={item.Origin}
      KindOfOffer={item.KindOfOffer}
      Price={item.Price}
    />
  )
}






// FRESH AND BEVERAGE Prdouct Categories

const Beverage = ({ image, Sale, name, Desc, Size, Origin, KindOfOffer,Price }) => {
  return (
    <View style={{ flex: 1, marginTop: 20, marginHorizontal: 5, }}>

      <View style={{ height: height/2.3, width: width / 2.1, height: 340,  backgroundColor: '#ffff', borderRadius: 10, elevation: 2, overflow: 'hidden' }}>
        {Sale === "" ? <View style={{ height: 20, width: 40, backgroundColor: '#fff', alignItems: 'center' }}>
        </View> : <View style={{ height: 20, width: 40, backgroundColor: 'red', alignItems: 'center', alignSelf: 'flex-end', margin: 5 }}>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold', }}>{Sale}</Text>
        </View>}

        <TouchableOpacity
          activeOpacity={0.5}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            resizeMode='contain'
            source={{ uri: image }} style={{ height: 180, width: 170 }} />
        </TouchableOpacity>


        <View style={{ justifyContent: 'center', marginTop: 15, alignSelf: 'flex-start', marginLeft: 10 }}>
          <TouchableOpacity
            activeOpacity={0.2}>
            <Text style={{ fontSize: 17, color: '#9A478D',fontWeight:'500' }}>{name}</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: '#000', fontWeight: 'bold' }}>{Desc}</Text>
          <Text style={{ fontSize: 12, color: '#000', }}>Size:  {Size}</Text>
          <Text style={{ fontSize: 12, color: '#000', }}>Origin: {Origin}</Text>
          {!KindOfOffer ? null : <Text style={{ fontSize: 13, color: '#000', textDecorationLine: 'line-through' }}>{KindOfOffer}</Text>}
          <Text style={{ fontSize: 12, color: '#DD2326', }}>Price:   {Price}</Text>

        </View>


        <TouchableOpacity
          activeOpacity={0.5}
          style={{ height: 35, width: 35, backgroundColor: '#9A478D', justifyContent: 'center', alignItems: 'center', borderRadius: 20, position: 'absolute', bottom: 5, right: 10 }}>
          <EvilIcons name="cart" size={25} color="#fff" />
        </TouchableOpacity>


      </View>

    </View>

  )
}



const FreshAndbeverage = ({ item }) => {
  return (
    <Beverage
      item={item}
      Sale={item.Sale}
      image={item.image}
      name={item.name}
      Desc={item.Desc}
      Size={item.Size}
      Origin={item.Origin}
      KindOfOffer={item.KindOfOffer}
      Price={item.Price}
    />
  )
}



// BLOG SECTION  START |||||



const Blog = ({ name, Desc, image }) => {
  return (
    <View style={{ flex: 1, marginTop: 20, backgroundColor: '#000', opacity: 0.7, marginHorizontal: 2 }}>

      <View style={{ height: 300, width: 400, alignItems: 'center', }}>
        <ImageBackground
          source={image}
          style={{ width: '100%', height: '100%', opacity: 0.6, position: 'absolute' }}>
        </ImageBackground>

        <View style={{ marginTop: 100, justifyContent: 'center', alignItems: 'center', }}>

          <Text style={{ fontSize: 23, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>{name}</Text>
          <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff', top: -35 ,textAlign: 'center',padding:50 }}>{Desc}</Text>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', top: -50, height: 40, width: 120, backgroundColor: '#FED700', borderRadius: 5 }}>
            <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>Read More</Text>
          </TouchableOpacity>
        </View>

      </View>
  




    </View>

  )
}



const BlogSection = ({ item }) => {
  return (
    <Blog
      item={item}
      image={item.image}
      name={item.name}
      Desc={item.Desc}
    />
  )
}


//  Arrow Top reference 
const scrollView = React.createRef();

class Home extends React.Component {


  constructor(props) {
    super(props);
   

  }


  subCategories() {
    console.log("categories----working")
    this.props.navigation.navigate('ProductCategories')
  }



  onMoveUp() {
    scrollView.current?.scrollTo({
      y: 0,
      animated: true,
    })
  }
  render() {



    const renderCategories = ({ item }) => {
      return (
        <Categories
          item={item}
          name={item.name}
          image={item.image}

          onPress={() => {
            this.subCategories()
          }
          }

        />
      )
    }


    return (

      <View style={{ flex: 1, height: height, backgroundColor: '#fff' }}>
        <ScrollView

          ref={scrollView}

          showsVerticalScrollIndicator={false}
        >


          <View
            style={{
              height: '6%',
              width: width,
              backgroundColor: '#9A478D',
              flexDirection: 'column',


            }}>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Icon name="menu" size={35} color="#fff" style={{ paddingLeft: 10, top: 10 }} />
              </TouchableOpacity>




              <View style={{ flexDirection: 'row', borderWidth: 2, backgroundColor: '#fff', borderColor: '#fff', width: 265, borderRadius: 5, marginTop: 10, marginLeft: 20, alignItems: 'center', height: 40, }}>
                <Icon name="search" size={20} color="#000" style={{ left: 5, }} />
                <TextInput placeholder='Search' placeholderTextColor='#000' style={{ width: '75%', left: 20, }} />
                <Image source={require('../assets/basket.png')} style={{ height: 30, width: 30, right: -12 }} />
              </View>


            </View>

            <View style={{ height: 1, width: '100%', borderWidth: 1, borderColor: '#B2B2B2', marginTop: 20 }}></View>

            
              <View style={{ height:height/30,width: width/1.1, flexDirection: 'row', justifyContent: 'space-around', margin: 15, alignItems: 'center' }}>
                <FontAwesome5 name='bicycle' color="#fff" size={20} style={{ marginRight: 5 }} />
                <Text style={{ fontSize: 10, color: '#fff', fontWeight: '700', }}>Now Delivery - 60 mins</Text>
                <EvilIcons name='location' color="#fff" size={23} style={{ marginLeft: 5 }} />
                <Text style={{ fontSize: 10, color: '#fff', fontWeight: '700',}}> Address: 17 Princess Road, London</Text>
              </View>
            



            {/* Home Slider  */}

            <View style={{ justifyContent: 'center', alignItems: 'center', width: width - 80, height: 140, alignSelf: 'center', marginTop: -20 }}>
              <Slider />
            </View>


          </View>






          <View style={{ height: 55, width: width }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 2, borderColor: '#9A478D', padding: 10, elevation: 2, }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', left: 15 }}>CATEGORIES</Text>
            </View>
          </View>

          <View style={{ height: 170, width: width, marginBottom: 20 }}>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={data.id}
              data={data.Data}
              renderItem={renderCategories}




            />
          </View>





          <View style={{ height: 55, width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', borderBottomWidth: 2, borderColor: '#9A478D', padding: 10, elevation: 3 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#9A478D', left: 25 }}>DEALS</Text>
            </View>
          </View>

          <View style={{ height: 380, width: width, marginBottom: 30 }}>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={DEALS.id}
              data={DEALS}
              renderItem={DealCategories}
            />

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={DEALS1.id}
              data={DEALS1}
              renderItem={DealCategories1}
            />

          </View>









          <View style={{ height: 55, width: width, }}>
            <View style={{ borderBottomWidth: 3, borderColor: '#808080', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 70 }}>
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000', }}>LATEST</Text>
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#9A478D', left: 10 }}>PRODUCTS</Text>
            </View>


          </View>


          <View style={{ height: 400, width: width,marginBottom:20 }}>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={LatestProduct.id}
              data={LatestProduct}
              renderItem={LatestPRODUCT}
            />
          </View>


          <View style={{ height: 100, width: width, marginBottom: 10 }}>
            <Image source={require('../assets/grocery.jpg')} style={{ height: 100, width: '100%', resizeMode: 'center' }} />
          </View>


          <View style={{ height: 320, width: width, marginBottom: 40 }}>
            <Image source={require('../assets/ezgif.com-gif-maker.jpg')} style={{ height: 150, width: '100%', }} />
            <Image source={require('../assets/ezgif.com-gif-maker-9.jpg')} style={{ height: 150, width: '100%', marginVertical: 30 }} />
          </View>




          <View style={{ height: 100, width: width, marginBottom: 20, backgroundColor: '#fff' }}>
            <View style={{ borderBottomWidth: 3, borderColor: '#808080', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 70 }}>
              <Text style={{ fontSize: 27, fontWeight: 'bold', color: '#000', }}>HEALTH & DIET</Text>
              <Text style={{ fontSize: 27, fontWeight: 'bold', color: '#9A478D', left: 5 }}>PRODUCTS</Text>
            </View>
            <Text style={{ paddingHorizontal: 10, fontSize: 14, textAlign: 'center', top: 10 }}>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget
              maecenas sed urna malesuada consectetuer</Text>
          </View>



          <View style={{ height: 400, width: width, marginBottom: 20, backgroundColor: '#fff' }}>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={HealthProduct.id}
              data={HealthProduct}
              renderItem={HealthPRODUCTS}
            />
          </View>



          <View style={{ height: 90, width: width, marginBottom: 10 }}>
            <Image source={require('../assets/grocey-banner2.jpg')} style={{ height: 100, width: '100%', resizeMode: 'center' }} />
          </View>


          <View style={{ height: 500, width: width, marginBottom: 90 }}>
            <Image source={require('../assets/gifmaker.jpg')} style={{ height: 150, width: '100%', marginVertical: 20 }} />
            <Image source={require('../assets/ezgif.com-gif-maker-13.jpg')} style={{ height: 150, width: '100%', marginVertical: 20 }} />
            <Image source={require('../assets/ezgif.com-gif-maker-14.jpg')} style={{ height: 150, width: '100%', marginVertical: 20 }} />
          </View>



          <View style={{ height: 100, width: width, marginBottom: 10 }}>
            <View style={{ borderBottomWidth: 3, borderColor: '#808080', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 50 }}>
              <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#000', }}>SOFT DRINKS &</Text>
              <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#9A478D', left: 5 }}> BEVERAGES</Text>
            </View>
            <Text style={{ paddingHorizontal: 10, fontSize: 14, textAlign: 'center', top: 10 }}>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget
              maecenas sed urna malesuada consectetuer</Text>
          </View>




          <View style={{ height: 400, width: width, marginBottom: 20, backgroundColor: '#fff' }}>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={FreshAndBeverage.id}
              data={FreshAndBeverage}
              renderItem={FreshAndbeverage}
            />
          </View>




          <View style={{ height: 100, width: width }}>
            <Image source={require('../assets/new-banners1.png')} style={{ height: 100, width: '100%', resizeMode: 'center' }} />
          </View>



          <View style={{ height: 350, width: width, marginBottom: 20 }}>
            <Image source={require('../assets/ezgif.com-gif-maker-7-1536x530.jpg')} style={{ height: 150, width: '100%', marginVertical: 15,}} />
            <Image source={require('../assets/new-01.png')} style={{ height: 150, width: '100%', marginVertical: 15,resizeMode:'contain' }} />
          </View>



          <View style={{ height: 100, width: width, marginBottom: 10 }}>
            <View style={{ borderBottomWidth: 3, borderColor: '#808080', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 80 }}>
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000', }}>OUR</Text>
              <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#9A478D', left: 5 }}> BLOGS</Text>
            </View>
            <Text style={{ paddingHorizontal: 10, fontSize: 14, textAlign: 'center', top: 10 }}>Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis eget
              maecenas sed urna malesuada consectetuer</Text>
          </View>



          <View style={{ height: 300, width: width, marginBottom: 100 }}>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              keyExtractor={BlOG.id}
              data={BlOG}
              renderItem={BlogSection}
            />
          </View>




        </ScrollView>

        <TouchableOpacity
          onPress={() => this.onMoveUp()}
          style={{ height: 40, width: 40, right: 10, bottom: 30, backgroundColor: '#9A478D', position: 'absolute', justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
          <AntDesign name="arrowup" size={20} color="#fff" />

        </TouchableOpacity>
      </View>
    )
  }
}

export default Home;