import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';


const profile = () => {
  return (
    <ParallaxScrollView
         headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
            <Image
                source={require('@/assets/images/splash-icon.png')}
                style={styles.reactLogo}
            />
            }
         >
         <ThemedView style={styles.titleContainer}>
           <ThemedText type="title">Welcome to Mert's Profile Page</ThemedText>
           <HelloWave />
         </ThemedView>
   
         <Link href={"/"}><ThemedText>Home</ThemedText></Link>
         <Link href="/profile"> <ThemedText>Sign In</ThemedText>  </Link>
         <Link href="/explore"> <ThemedText>Explore</ThemedText>  </Link>
         <Link href="./Properties/1"> <ThemedText>Property 1</ThemedText>  </Link>
       </ParallaxScrollView>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });

export default profile