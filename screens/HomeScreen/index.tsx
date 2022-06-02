import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import Footer from '../../components/HomeScreen/Footer'
import Header from '../../components/HomeScreen/Header'
import Pokemons from '../../components/HomeScreen/Pokemons'

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Qual pokémon você{'\n'}escolheria?</Text>
      <Pokemons navigation={navigation} />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginVertical: 36,
    color: '#303943'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
