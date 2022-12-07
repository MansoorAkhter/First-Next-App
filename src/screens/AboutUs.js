import { View, Text ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import React from 'react'

const AboutUs = (props) => {
  return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>

          <View
              style={{
                  height: '30%',
                  backgroundColor: '#9A478D',
                  flexDirection:'row',
                 

              }}>
              <TouchableOpacity onPress={() => props.navigation.openDrawer()} >
                  <Icon name="menu" size={35} color="#fff" style={{ paddingLeft: 10, top: 10 }} />
              </TouchableOpacity>
                  <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 20, top:-82}}>
                      <Text style={{ fontSize: 25, color: '#fff' }}>ABOUT US</Text>
                  </View>
              
          </View>

          <View style={{ top:2, height: 550, width: '100%',}}>
              <Text style={{fontSize:16,color:'grey',padding:20,left:-5}}>Farm Fresh Shop is the first Ecommerce Store who introduce
                  Pakistani Mangoes  Online sale in United States also the first  imported/distributer of Pakistani Mangoes in
                  United States Proudly in service since 2014  Our mangoes are handpicked from the Global GAP & Plant Quarantine regestered 
                  orchards Our aim is to share the joy of  pakistan Mangoes with our community  residing in United states and cherish the  sweet memories of homland.
              </Text>

              <Text style={{ fontSize: 16, color: 'grey', padding: 20, left: -5,top:-20 }}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                   when an unknown printer took a galley
              </Text>


          </View>



      </View>
  )
}

export default AboutUs