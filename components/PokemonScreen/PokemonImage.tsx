import React from 'react'
import { SvgUri } from 'react-native-svg'

import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'

export default function PokemonImage({ color, image }: any) {
  console.log(image)
  return (
    <View style={styles.container}>
      <View style={styles.pokemonColorContainer}>
        <SvgUri width="150%" height="150%" uri={image} style={styles.img} />
      </View>
      <View style={styles.whiteContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { height: 150 },

  pokemonColorContainer: {
    height: 100
  },
  whiteContainer: {
    height: 50,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    zIndex: -1
  },
  teste: {
    position: 'absolute',
    width: 300,
    height: 200,
    top: -30,
    left: 50
  },
  img: {
    position: 'absolute',
    top: 0,
    left: '-25%'
  }
})
