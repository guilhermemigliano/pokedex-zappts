import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import HomeScreen from '../screens/HomeScreen/'
import PokemonScreen from '../screens/PokemonScreen'

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator()

const defaultOptions = {
  headerShown: false
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={defaultOptions}
      />
      <Stack.Screen
        name="PokemonScreen"
        component={PokemonScreen}
        options={defaultOptions}
      />
    </Stack.Navigator>
  )
}
