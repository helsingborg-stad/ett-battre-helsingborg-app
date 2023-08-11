import React from 'react';

import Container from '../components/common/Container';
import FocusAwareStatusBar from '../components/common/StatusBar';
import ButtonSection from '../components/screens/HomeScreen/ButtonSection';
import HeaderSection from '../components/screens/HomeScreen/HeaderSection';
import { HomeScreenNavigationProps } from '../types/Types';

const HomeScreen: React.FC<HomeScreenNavigationProps> = ({ navigation }) => {
  return (
    <Container>
      <FocusAwareStatusBar style="light" />
      <HeaderSection />
      <ButtonSection navigation={navigation} />
    </Container>
  );
};

export default HomeScreen;
