import React from 'react'

import { View, Text, StyleSheet, FlatList } from 'react-native'

const Stat = ({ name, value }: any) => {
  name.split('-')
  return (
    <View style={styles.statContainer}>
      <Text style={[styles.text, { flex: 1 }]}>
        {name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()}
      </Text>
      <Text style={[styles.text, { marginHorizontal: 16 }]}>{value}</Text>
      <View
        style={{
          width: 200,
          height: 3,
          backgroundColor: '#c1c1c1',
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            width: value * 2,
            height: 3,
            backgroundColor: value * 2 > 100 ? '#49D0B0' : '#FC6C6C'
          }}
        ></View>
      </View>
    </View>
  )
}

export default function Features({ features }: any) {
  const calculateTotal = () => {
    let total = 0

    for (let value of features) {
      total += value.base_stat
    }

    return total
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suas características</Text>
      {features.map((item: { stat: { name: any }; base_stat: any }) => (
        <Stat
          name={item.stat.name}
          value={item.base_stat}
          key={item.stat.name}
        />
      ))}

      <View style={styles.statContainer}>
        <Text style={[styles.text, { flex: 1 }]}>Total</Text>
        <Text style={[styles.text, { marginHorizontal: 16 }]}>
          {calculateTotal()}
        </Text>
        <View
          style={{
            width: 200,
            height: 3,
            backgroundColor: '#c1c1c1',
            justifyContent: 'center'
          }}
        >
          <View
            style={{
              width: (calculateTotal() / 6) * 2,
              height: 3,
              backgroundColor:
                (calculateTotal() / 6) * 2 > 100 ? '#49D0B0' : '#FC6C6C'
            }}
          ></View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  title: {
    fontSize: 16,
    marginTop: 16,
    marginVertical: 16
  },
  text: {
    fontSize: 12
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4
  }
})
