import React from 'react'

import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'

const pokebolaGray = require('../../assets/images/pokebola-gray.png')
const badge = require('../../assets/images/badge.png')

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>
          Olá, <Text style={{ fontWeight: 'bold' }}>Ash Ketchum</Text>
        </Text>
        <Text style={styles.welcomeText}>Bem Vindo! 😄</Text>
      </View>
      <View style={styles.userPhotoContainer}>
        <ImageBackground
          style={styles.img}
          source={pokebolaGray}
          resizeMode="cover"
        >
          <View style={styles.redPoint}></View>
          <View style={styles.badgeContainer}>
            <Image source={badge} style={styles.badge} />
          </View>
        </ImageBackground>
      </View>
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
    flex: 1,
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
  },
  userPhotoContainer: {
    width: 130,
    height: 130
  },
  img: {
    flex: 1,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badgeContainer: {
    width: 52,
    height: 52,
    backgroundColor: 'transparent',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  badge: {
    width: 48,
    height: 48,
    backgroundColor: '#ffff',
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 2
  },
  redPoint: {
    backgroundColor: '#d86767',
    width: 8,
    height: 8,
    borderRadius: 5,
    position: 'absolute',
    left: 100,
    top: 36
  }
})
