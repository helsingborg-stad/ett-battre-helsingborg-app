import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Pressable } from 'react-native';

import Container from '../components/common/Container';
import { HomeScreenNavigationProps } from '../types/Types';

const image = require('../assets/home_screen_bg.png');

const Home = ({ navigation }: HomeScreenNavigationProps) => {
  return (
    <Container>
      <ImageBackground source={image} resizeMode="cover" style={styles.heroBackground}>
        <Text style={styles.heroText}>Välkommen till {'\n'}Ett bättre Helsingborg</Text>
      </ImageBackground>

      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <Pressable onPress={() => navigation.navigate('Form')} style={styles.button}>
          <Text style={styles.text}>Lämna synpunkt eller felanmälan</Text>
        </Pressable>
      </View>
      <StatusBar style="light" />
    </Container>
  );
};

const styles = StyleSheet.create({
  heroBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  heroText: {
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    fontSize: 36,
  },
  button: {
    margin: 16,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Home;
