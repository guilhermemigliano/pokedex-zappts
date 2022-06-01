import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from '../../components/HomeScreen/Header'

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity onPress={() => navigation.navigate('PokemonScreen')}>
        <Text>PokemonScreen</Text>
      </TouchableOpacity>
      <Text>Teste</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
