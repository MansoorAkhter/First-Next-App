import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import Dietitians from './Dietitians'
import { DietitiansList } from '../dummyData'

const AvailableDietitians = () => {
    const { width, height } = Dimensions.get("window")
    return (
        <View style={{ flex: 1, backgroundColor: "#F1F2F3" }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ width: width, 
                alignItems: "center", paddingTop: 15 }}
                data={DietitiansList}
                keyExtractor={() => DietitiansList.id}
                renderItem={({ item }) => {
                    return (<Dietitians data={item} identifier={false}/>)
                }}
            />
        </View>
    )
}

export default AvailableDietitians