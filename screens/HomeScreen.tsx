import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

import Button from '../components/common/Button';
import Container from '../components/common/Container';
import FocusAwareStatusBar from '../components/common/StatusBar';
import ButtonIcon from '../components/common/icons/ErrorReportFormIcon';
import { HomeScreenNavigationProps } from '../types/Types';

const image = require('../assets/images/home_screen_bg.png');

const HomeScreen: React.FC<HomeScreenNavigationProps> = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground source={image} resizeMode="cover" style={styles.hero}>
        <View />
        <View>
          <Text style={styles.heading}>Välkommen till {'\n'}Ett bättre Helsingborg</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Button
          onPress={() => navigation.navigate('Form')}
          label="Lämna synpunkt eller felanmälan"
          description="Hjälp oss att hålla staden hel och ren"
          icon={<ButtonIcon />}
        />
      </View>
      <FocusAwareStatusBar style="light" />
    </Container>
  );
};

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  heading: {
    fontFamily: 'Helsingborg-Sans-Bold',
    color: '#fff',
    textAlign: 'center',
    fontSize: 34,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 6,
    letterSpacing: 0.5,
  },
  content: {
    padding: 16,
    paddingTop: 32,
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;
