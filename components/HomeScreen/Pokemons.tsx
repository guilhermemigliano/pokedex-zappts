import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { api } from '../../api/api'

import Colors from '../../constants/Colors'

export type PokemonTypeProps = keyof typeof Colors

type StatePokemonTypeProps = {
  [key in PokemonTypeProps]: string
}

const Pokemon = ({ navigation, name }: any) => {
  const [pokeData, setPokeData] = useState<any>(null)
  const [pokemonType, setPokemonType] =
    useState<StatePokemonTypeProps>('default')
  const [isLoading, setIsLoading] = useState(true)
  const getPokemonInfo = async () => {
    try {
      const response = await api.get(`/pokemon/${name}`)
      setPokeData(response.data)
      setPokemonType(response.data.types[0].type.name as StatePokemonTypeProps)
      console.log('Characteristics: ', response.data)
    } catch (err) {
      console.log(err)
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
          id: pokeData.id.toString().padStart(3, 0),
          name: name
        })
      }
      style={[
        styles.wrapper,
        { backgroundColor: Colors[pokemonType].background }
      ]}
    >
      <Text
        style={[
          styles.pokemonNumber,
          {
            color: Colors[pokemonType].text
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
                        backgroundColor: Colors[pokemonType].bgSecundary
                      }
                    ]}
                  >
                    <Text style={styles.typeText}>{pokemon.type.name}</Text>
                  </View>
                )
              )}
          </View>
        </View>

        <View style={{ flex: 1, overflow: 'hidden' }}>
          <Image
            source={{ uri: pokeData && pokeData.sprites.front_default }}
            style={styles.pokemonImg}
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
    borderRadius: 16
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
  }
})
