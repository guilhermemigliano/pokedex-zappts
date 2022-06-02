import React from 'react'

import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'

export default function PokemonImage({ color, image }: any) {
  console.log(image)
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.img}
        resizeMode={'contain'}
      >
        <View style={styles.pokemonColorContainer}></View>
        <View style={styles.whiteContainer}></View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},

  pokemonColorContainer: {
    height: 100
  },
  whiteContainer: {
    height: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: -1
  }
})
