import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>
          Olá, <Text style={{ fontWeight: 'bold' }}>Ash Ketchum</Text>
        </Text>
        <Text style={styles.welcomeText}>Bem Vindo! </Text>
      </View>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    backgroundColor: '#4A4949',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  userInfoContainer: {
    marginBottom: 32,
    marginLeft: 32
  },
  userInfoText: {
    color: '#ffffff',
    fontSize: 18
  },
  welcomeText: {
    color: '#ffffff',
    marginTop: 2
  }
})
