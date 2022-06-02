import React from 'react'

import { View, Text, StyleSheet, Image } from 'react-native'

const logo = require('../../assets/images/pokemon-logo.jpeg')

export default function Footer() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    paddingTop: 10
  },
  img: {
    width: 160,
    height: 60,
    resizeMode: 'stretch'
  }
})
