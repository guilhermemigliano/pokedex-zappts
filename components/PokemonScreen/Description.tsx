import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors'

export default function Description({ color }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: Colors[color].background }]}>
        Descrição
      </Text>
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
    fontSize: 18,
    fontWeight: 'bold'
  },
  descriptionContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 24
  },
  text: {
    fontSize: 12,
    lineHeight: 24
  }
})
