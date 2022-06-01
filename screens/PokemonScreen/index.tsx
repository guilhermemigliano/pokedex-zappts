import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export default function PokemonScreen() {
  return (
    <View style={styles.container}>
      <Text> Componente Inicial </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
