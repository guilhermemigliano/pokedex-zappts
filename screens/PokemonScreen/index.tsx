import React from 'react'

import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Description from '../../components/PokemonScreen/Description'
import Details from '../../components/PokemonScreen/Details'
import Features from '../../components/PokemonScreen/Features'
import Header from '../../components/PokemonScreen/Header'
import PokemonImage from '../../components/PokemonScreen/PokemonImage'
import PokemonInfo from '../../components/PokemonScreen/PokemonInfo'

export default function PokemonScreen({ navigation, route }: any) {
  const { data, id, name, description, color } = route.params
  //const color = data.types[0].type.name

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: color.background }]}
    >
      <Header
        name={name}
        id={id}
        navigation={navigation}
        types={data.types}
        color={color}
      />
      <PokemonImage color={color} image={data.sprites.front_default} />

      <Description color={color} id={id} description={description} />
      <PokemonInfo
        height={data.height}
        weight={data.weight}
        power={data.moves[0].move.name}
      />

      <Features features={data.stats} />
      <Details />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  descriptionContainer: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
