import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

export default function PokemonNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PokemonNavigation" component={PokemonScreen}/>
    </Stack.Navigator>
  )
}