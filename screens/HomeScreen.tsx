import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { ImageBackground, View, Text, StyleSheet, SafeAreaView } from 'react-native';

import Container from '../components/common/Container';
import FocusAwareStatusBar from '../components/common/StatusBar';
import IconButton from '../components/common/buttons/IconButton';
import { HomeScreenNavigationProps } from '../types/Types';

const image = require('../assets/images/home_screen_bg.png');

const HomeScreen: React.FC<HomeScreenNavigationProps> = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
        <SafeAreaView style={{ flex: 1 }}>
          <Text style={styles.heading}>Välkommen till {'\n'}Ett bättre Helsingborg</Text>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.content}>
        <IconButton
          onPress={() => {
            navigation.navigate('Form');
          }}
          label="Lämna en felanmälan"
          description="Hjälp oss att hålla staden hel och ren. Lämna din felanmälan eller synpunkt här."
          icon={<Ionicons name="add-circle-outline" size={32} color="#000" />}
        />
      </View>
      <FocusAwareStatusBar style="light" />
    </Container>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 3,
    paddingBottom: 50,
    paddingHorizontal: 16,
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
    marginTop: 'auto',
  },
  content: {
    flex: 2,
    padding: 16,
    paddingTop: 32,
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;
