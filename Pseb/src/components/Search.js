import {
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import { ASSETS, COLOR } from '../assets';
import {useNavigation} from '@react-navigation/native';
import SearchResults from '../screens/SearchResults';


const Search = (prop) => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', alignItems: 'center',
    //  borderBottomWidth:1, borderColor:COLOR.PRIMARY,
     }}>
      <TouchableOpacity onPress={()=>alert("Data not found..!")
        // navigation.navigate(SearchResults) 
        }>
        <Image
          source={ASSETS.search_icon}
          style={styles.pngIcons}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Search here"
        style={{fontSize: 15, color: '#000', width:"75%"}}
        placeholderTextColor={"#14667E"}
        onEndEditing={(e)=>alert("Data not found..!")}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  pngIcons: {
    height: 25,
    width: 25,
    tintColor: '#14667E',
    marginHorizontal: 10,
  },
});
