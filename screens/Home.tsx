import { StatusBar } from 'expo-status-bar';
import SvgUri from 'expo-svg-uri';
import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Pressable } from 'react-native';

import Container from '../components/common/Container';
import { HomeScreenNavigationProps } from '../types/Types';

const image = require('../assets/images/home_screen_bg.png');

const Home: React.FC = ({ navigation }: HomeScreenNavigationProps) => {
  return (
    <Container>
      <ImageBackground source={image} resizeMode="cover" style={styles.heroBackground}>
        <View />
        <View>
          <Text style={styles.heroText}>Välkommen till {'\n'}Ett bättre Helsingborg</Text>
        </View>
      </ImageBackground>

      <View style={{ flex: 1, backgroundColor: 'transparent' }}>
        <Pressable onPress={() => navigation.navigate('Form')} style={styles.button}>
          <Text style={styles.buttonLabel}>Lämna synpunkt eller felanmälan</Text>
          <Text style={styles.buttonDescription}>Hjälp oss att hålla staden hel och ren</Text>
        </Pressable>
      </View>
      <StatusBar style="light" />
    </Container>
  );
};

const styles = StyleSheet.create({
  heroBackground: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  heroText: {
    fontFamily: 'Helsingborg-Sans-Bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 34,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 6,
    letterSpacing: 0.5,
  },
  button: {
    margin: 16,
    marginTop: 32,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#FDDDE5',
  },
  buttonLabel: {
    fontFamily: 'Helsingborg-Sans-Medium',
    fontSize: 19,
    lineHeight: 30,
    letterSpacing: 0.25,
    color: '#000',
  },
  buttonDescription: {
    //fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: 30,
    color: '#000',
  },
});

export default Home;
