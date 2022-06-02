import React, { useEffect, useState } from 'react'
import { SvgUri } from 'react-native-svg'

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  Alert
} from 'react-native'
import { api } from '../../api/api'

import { getColor } from '../../constants/Colors'

const Pokemon = ({ navigation, name }: any) => {
  const [pokeData, setPokeData] = useState<any>(null)
  const [pokemonType, setPokemonType] = useState('default')
  const [pokeWeakStrength, setPokeWeakStrenth] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [description, setDescription] = useState<any>('')
  const getPokemonInfo = async () => {
    try {
      const response = await api.get(`/pokemon/${name}`)
      const pokemonDescription = await api.get(
        `pokemon-species/${response.data.id}/`
      )
      const weaknessStrengths = await api.get(
        `/type/${response.data.types[0].type.name}`
      )
      setPokeData(response.data)
      setPokemonType(response.data.types[0].type.name)
      setDescription(pokemonDescription.data.flavor_text_entries)
      setPokeWeakStrenth(weaknessStrengths.data.damage_relations)
    } catch (err) {
      Alert.alert('Ei, Treinador!', 'Algo saiu fora do esperado', [
        {
          text: 'Tentar novamente',
          onPress: () => getPokemonInfo(),
          style: 'cancel'
        }
      ])
    }
  }

  useEffect(() => {
    getPokemonInfo()
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <View
        style={[
          styles.wrapper,
          {
            backgroundColor: '#c1c1c1',
            justifyContent: 'center',
            alignItems: 'center'
          }
        ]}
      >
        <ActivityIndicator size={'small'} color={'#fff'} />
      </View>
    )
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          data: pokeData,
          id: pokeData.id,
          name: name,
          description: description,
          color: getColor(pokemonType),
          pokeWeakStrength: pokeWeakStrength
        })
      }
      style={[
        styles.wrapper,
        { backgroundColor: getColor(pokemonType).background }
      ]}
    >
      <Text
        style={[
          styles.pokemonNumber,
          {
            color: getColor(pokemonType).text
          }
        ]}
      >
        #{pokeData && pokeData.id.toString().padStart(3, 0)}
      </Text>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <View>
          <Text style={styles.pokemonName}>
            {name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()}
          </Text>
          <View style={styles.typesContainer}>
            {pokeData &&
              pokeData.types.map(
                (pokemon: {
                  type: {
                    name: string
                  }
                }) => (
                  <View
                    key={name + pokemon.type.name}
                    style={[
                      styles.typeContainer,
                      {
                        backgroundColor: getColor(pokemonType).bgSecundary
                      }
                    ]}
                  >
                    <Text style={styles.typeText}>{pokemon.type.name}</Text>
                  </View>
                )
              )}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <SvgUri
            width="100%"
            height="100%"
            uri={pokeData && pokeData.sprites.other.dream_world.front_default}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default function Pokemons({ navigation }: any) {
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(20)
  const [isLoading, setIsLoading] = useState(true)
  const [pokemons, setPokemons] = useState<any>([])
  const renderItem = ({ item }: any) => (
    <Pokemon navigation={navigation} name={item.name} />
  )

  const getPokemonList = async () => {
    try {
      const response = await api.get(`/pokemon?limit${limit}&offset=${offset}`)
      setPokemons(pokemons.concat(response.data.results))
      setOffset(prev => prev + 20)
      //console.log(response.data.results)
    } catch (err) {
      Alert.alert('Ei, Treinador!', 'Algo saiu fora do esperado', [
        {
          text: 'Tentar novamente',
          onPress: () => getPokemonList(),
          style: 'cancel'
        }
      ])
      console.log(err)
    }
  }

  useEffect(() => {
    getPokemonList()
    setIsLoading(false)
  }, [])

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size={'large'} color={'#000'} />
        </View>
      ) : (
        <FlatList
          data={pokemons}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          ListFooterComponent={() => (
            <View
              style={{
                height: 65,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {offset <= pokemons.length && (
                <ActivityIndicator size="small" color="#000" />
              )}
            </View>
          )}
          onEndReached={() => {
            getPokemonList()
          }}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8
  },

  wrapper: {
    flex: 1,
    height: 120,
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 16,
    overflow: 'hidden'
  },
  pokemonNumber: {
    marginTop: 8,
    marginHorizontal: 16,
    alignSelf: 'flex-end'
  },

  pokemonName: {
    color: '#fff',
    marginHorizontal: 16,
    marginTop: 8,
    fontWeight: 'bold'
  },
  typesContainer: {
    marginHorizontal: 16
  },
  typeContainer: {
    marginVertical: 4,
    borderRadius: 8
  },
  typeText: {
    textAlign: 'center',
    fontSize: 10,
    paddingVertical: 2,
    paddingHorizontal: 5,
    color: '#fff'
  },

  pokemonImg: {
    width: 90,
    height: 90,
    resizeMode: 'contain'
  },
  teste: {
    position: 'absolute',
    top: 10,
    left: 50,
    width: '100%',
    height: '100%'
  }
})
