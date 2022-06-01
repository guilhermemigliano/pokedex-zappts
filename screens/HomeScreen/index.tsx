import React from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Footer from '../../components/HomeScreen/Footer'
import Header from '../../components/HomeScreen/Header'

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Qual pokémon você{'\n'}escolheria?</Text>
      <View style={{ flex: 1 }}></View>
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
  }
})
