import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../../assets/constants/colors';
import {NavigationPropType, User} from '../../types';

interface OnboardingScreenProps {
  onNext: () => void;
  onSkip: () => void;
}

const OnboardingScreen1: React.FC<OnboardingScreenProps> = ({
  onNext,
  onSkip,
}) => {
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        source={require('../../assets/Onboarding.png')}
        style={styles.image}>
        <View style={{height: '50%', marginTop: 75}}>
          <Pressable style={styles.button} onPress={onSkip}>
            <Text style={{color: GlobalStyles.Colors.primary100}}>Skip</Text>
          </Pressable>
        </View>

        <View style={styles.view}>
          <Text style={styles.text}>Financial Inclusivity and Mobility</Text>
          <Text style={styles.smallText}>
            OMNIS is tailored to serve the needs of the immigrants, unbanked,
            and underbanked population.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, // This makes sure the container takes up the full available space
  },
  background: {
    backgroundColor: GlobalStyles.Colors.primary900,
    alignItems: 'center',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'transparent',
    width: '30%',
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.Colors.accent120,
    alignSelf: 'flex-end',
    marginRight: '5%',
  },

  image: {
    flex: 1
  },

  text: {
    color: GlobalStyles.Colors.primary130,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  smallText: {
    color: GlobalStyles.Colors.accent100,
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 30,
  },
  pagination: {
    bottom: 10,
  },
  view: {
    padding: 20,
    height: '50%',
    backgroundColor: GlobalStyles.Colors.primary900,
  },
});

export default OnboardingScreen1;
