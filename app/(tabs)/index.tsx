import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Text } from 'react-native';


export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
     >
      <ThemedView style={styles.titleContainer}>
        <ThemedText className='font-thin my-10 font-rubikBold text-3xl' type="title">Welcome to Mert's Expo</ThemedText>
        <HelloWave />
      </ThemedView>

      <Link href="/SignIn"><ThemedText>Sign In</ThemedText></Link>
      <Link href="/profile"> <ThemedText>Profile</ThemedText>  </Link>
      <Link href="/explore"> <ThemedText>Explore</ThemedText>  </Link>
      <Link href="./Properties/1"> <ThemedText>Property 1</ThemedText>  </Link>
      <Text className='font-bold text-lg text-yellow-50' >asd</Text>

    </ParallaxScrollView>
  );
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
