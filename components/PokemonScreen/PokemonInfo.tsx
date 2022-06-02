import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

interface Props {
  height: string
  weight: string
  power: any
}

const Divider = () => (
  <View style={styles.divider}>
    <Text>1</Text>
  </View>
)

export default function PokemonInfo({ height, weight, power }: Props) {
  power = power.split('-')

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.weightContainer}>
          <FontAwesome name="balance-scale" size={16} color="#7a7a7a" />
          <Text> {parseInt(weight) / 10} kg </Text>
        </View>
        <Text style={styles.statsOptionText}>Peso</Text>
      </View>
      <Divider />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.weightContainer}>
          <FontAwesome5 name="ruler-vertical" size={16} color="#7a7a7a" />
          <Text> {parseInt(height) / 10} m </Text>
        </View>
        <Text style={styles.statsOptionText}>Altura</Text>
      </View>
      <Divider />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.weightContainer}>
          <Text style={styles.powerText}>
            {power.map(
              (name: string) =>
                name.charAt(0).toUpperCase() +
                name.substring(1).toLowerCase() +
                ' '
            )}
          </Text>
        </View>
        <Text style={styles.statsOptionText}>Poder Principal</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 60,
    paddingHorizontal: 16
  },
  divider: {
    width: 1,
    backgroundColor: '#e1e1e1',
    height: 50
  },
  statsOptionText: {
    color: '#7a7a7a',
    fontSize: 10
  },
  weightContainer: {
    flexDirection: 'row',
    marginVertical: 10
  },
  powerText: {
    fontWeight: 'bold'
  }
})
