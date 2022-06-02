import React from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { getColor } from '../../constants/Colors'

const Option = ({ title, data }: any) => {
  return (
    <View>
      <Text style={styles.text}>{title}:</Text>
      <View style={styles.optionsContainer}>
        {data.map((item: { name: string }) => {
          return (
            <View
              key={Math.random()}
              style={[
                styles.optionContainer,
                { backgroundColor: getColor(item.name).background }
              ]}
            >
              <Text
                style={[styles.optionText, { color: getColor(item.name).text }]}
              >
                {item.name}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default function Details({ pokeWeakStrength }: any) {
  //console.log(pokeWeakStrength)
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>Fraqueza e Resistência</Text>
      <View style={styles.descriptionContainer}>
        <Option
          title="Super fraco contra"
          data={pokeWeakStrength.double_damage_from}
        />
        <Option
          title="Super forte contra"
          data={pokeWeakStrength.double_damage_to}
        />
        <Option
          title="Resistente contra"
          data={pokeWeakStrength.half_damage_from}
        />
        <Option title="Fraco contra" data={pokeWeakStrength.half_damage_to} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20
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
    fontWeight: 'bold'
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 2
  },
  optionContainer: {
    marginHorizontal: 4,
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginVertical: 4
  },
  optionText: {
    fontSize: 10,
    fontWeight: 'bold'
  }
})
