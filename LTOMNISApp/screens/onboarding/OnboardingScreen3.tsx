import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import React from 'react';
import GlobalStyles from '../../assets/constants/colors';

interface OnboardingScreen3Props {
  onNext: () => void;
  onSkip: () => void;
}

const OnboardingScreen3: React.FC<OnboardingScreen3Props> = ({
  onNext,
  onSkip,
}) => {
  return (
    <View style={styles.background}>
      <ImageBackground
        source={require('../../assets/Onboarding.png')}
        style={styles.image}>
        <View style={{height: '50%', marginTop: 75}}>
        <Pressable style={styles.button} onPress={onSkip}>
            <Text style={{color: '#fff'}}>Skip</Text>
          </Pressable>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Rewards Program</Text>
          <Text style={styles.smallText}>
            An incentive scheme to encourage platform interaction and
            responsible financial behavior
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    height: '100%',
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
    backgroundColor: '#000',
  },
});

export default OnboardingScreen3;