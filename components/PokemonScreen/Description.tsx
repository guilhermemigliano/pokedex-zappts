import React, { useEffect, useState } from 'react'

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { api } from '../../api/api'

export default function Description({ color, id, description }: any) {
  const [text, setText] = useState<any>([])
  const [isHidden, setIsHidden] = useState(true)

  const getPokemonDescription = async () => {
    try {
      const response = await api.get(`pokemon-species/${id}/`)
      setText(response.data.flavor_text_entries)

      //console.log(response.data.results)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getPokemonDescription()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color.background }]}>Descrição</Text>
      <View style={[styles.descriptionContainer]}>
        <Text style={styles.text} numberOfLines={isHidden ? 3 : 0}>
          {description.map(
            (item: { flavor_text: any; language: { name: string } }) => {
              if (item.language.name == 'en') {
                return item.flavor_text.replace(/(\r\n|\n|\r|\f)/gm, ' ')
              } else {
                return ''
              }
            }
          )}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setIsHidden(!isHidden)}
      >
        <Text style={styles.btnText}>
          {isHidden ? 'ver mais' : 'ver menos'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  title: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  descriptionContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 2,
    marginTop: 24
  },

  text: {
    flex: 1,
    fontSize: 12,
    lineHeight: 24,
    color: 'black'
  },
  btn: {
    alignSelf: 'center',
    width: 60,
    marginLeft: 16,
    marginTop: 8,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 4,
    marginVertical: 8
  },
  btnText: {
    fontSize: 10,
    textAlign: 'center'
  }
})
