import { View, Text, Image, ScrollView, Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const { width, height } = Dimensions.get('screen')


const ProductSlider = ({ images }) => {
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
                                style={styles.wraper}
                                source={{ uri: e }}
                            />
                        )
                    }
                </ScrollView>
            </View>

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

    )
}

export default ProductSlider


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wraper: {
        width: width - 80,
        height: '100%',
    },

    wrapDOt: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -20,
        alignSelf: 'center',
    },

    dotActive: {
        margin: 3,
        color: '#000',
    },

    dot: {
        margin: 3,
        color: '#fff',
    }
});