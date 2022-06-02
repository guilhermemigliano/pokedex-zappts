import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'

export default function Header({ navigation, name, id, types, color }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={24} color="white" />
      </View>
      <View style={styles.headerInfo}>
        <View>
          <Text style={styles.pokemonNameText}>
            {name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()}
          </Text>
          <View style={styles.pokemonTypes}>
            {types.map((pokemon: { type: { name: string } }, index: number) => (
              <View
                key={name + pokemon.type.name}
                style={[
                  styles.typeContainer,
                  {
                    backgroundColor: color.bgSecundary,
                    marginLeft: index > 0 ? 8 : 0
                  }
                ]}
              >
                <Text style={styles.typeText}>{pokemon.type.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.pokemonNumberText}>
            #{id.toString().padStart(3, 0)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 8
  },
  pokemonNameText: {
    color: '#fff',
    fontSize: 32
  },
  pokemonTypes: {
    flexDirection: 'row'
  },
  typeContainer: {
    marginVertical: 4,
    marginHorizontal: 0,
    borderRadius: 16
  },
  typeText: {
    textAlign: 'center',
    fontSize: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: '#fff'
  },
  pokemonNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8
  }
})
