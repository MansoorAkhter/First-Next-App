import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const { width, height } = Dimensions.get('screen')


const Slider = ({images}) => {
  const [imgActive, setimgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

      if (slide != imgActive) {
        setimgActive(slide)
      }
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          styles={styles.wraper}
        >

          {
            images.map((e, index) =>
              <Image
                key={e}
                resizeMode='contain'
                style={{ width: width, height: 130 }}
                source={e}
              />
            )
          }

        </ScrollView>

        <View style={styles.wrapDOt}>
          {
            images.map((e, index) =>
              <Text key={e}
                style={imgActive === index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            )
          }
        </View>

      </View>
    </View>
  )
}

export default Slider


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  wraper: {
    width: width,
    height: 150,
  },

  wrapDOt: {
    bottom: 0,
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
  },

  dotActive: {
    marginHorizontal: 3,
    color: '#702963',
  },

  dot: {
    marginHorizontal: 3,
    color: '#fff',
  }
});