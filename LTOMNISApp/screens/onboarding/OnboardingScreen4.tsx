import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import GlobalStyles from '../../assets/constants/colors';

interface OnboardingScreen4Props {
  onStartNow: () => void; // Function to handle the "Start Now" action
}

const OnboardingScreen4: React.FC<{onStartNow: () => void}> = ({
  onStartNow,
}) => {
  return (
    <View style={styles.background}>
      <ImageBackground
        source={require('../../assets/Onboarding.png')}
        style={styles.image}>
        <View style={{height: '50%', marginTop: 75}}></View>
        <View style={styles.view}>
          <Text style={styles.text}>Traditional Banking Integration</Text>
          <Text style={styles.smallText}>
            Smooth deposit, withdrawal, and overall financial management.
          </Text>
          <View style={styles.view2}>
            <Pressable style={styles.startNowButton} onPress={onStartNow}>
              <Text style={styles.startNowButtonText}>Start Now</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#000',
    alignItems: 'center',
    height: '100%',
  },

  button1: {
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
    opacity: 7,
  },

  startNowButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#BDAE8D',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 20,
  },

  startNowButtonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  text: {
    color: '#EADBC3',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  smallText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'normal',
    lineHeight: 30,
  },

  view: {
    padding: 20,
    height: '50%',
    width: '100%',
    backgroundColor: '#000',
  },

  view2: {
    alignItems: 'center',
    marginTop: '5%',
    color: '#fff',
    width: '100%',
    justifyContent: 'center',
  },
});

export default OnboardingScreen4;
