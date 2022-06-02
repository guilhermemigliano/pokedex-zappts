import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Pontos fortes e fracos</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
          dapibus turpis, eu pharetra velit. Mauris pretium in nisi at gravida.
          Vestibulum ac lectus vitae nisl molestie posuere non quis ipsum.
          Pellentesque nisl enim, cursus a ex et, rutrum ultrices urna. Nullam
          non tempor nulla, id consectetur erat. Nam cursus vitae leo in
          sodales. Suspendisse et urna sem. Sed interdum justo a mauris
          tristique, quis vestibulum lorem elementum.n
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  title: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    marginTop: 24,
    fontSize: 18
  },
  descriptionContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8
  },
  text: {
    fontSize: 12,
    lineHeight: 24
  }
})
