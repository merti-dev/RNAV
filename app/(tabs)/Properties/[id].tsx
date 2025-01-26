import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { ThemedText } from '@/components/ThemedText'
import ParallaxScrollView from '@/components/ParallaxScrollView'

const property = () => {
    const {id} = useLocalSearchParams()
  return (
      <View style={{ backgroundColor: 'white', flex: 1, padding: 16, width: '100%', height: '100%', paddingTop: 100 }}>
      <ThemedText style={{ color: 'black' }}>property id is: {id}</ThemedText>
      </View>
  )
}

export default property