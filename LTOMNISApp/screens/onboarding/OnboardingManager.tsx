import React, {useState} from 'react';
import {Text, View} from 'react-native';
import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import CustomPagination from '../../assets/constants/Components/CustomPagination';
import OnboardingScreen3 from './OnboardingScreen3';
import OnboardingScreen4 from './OnboardingScreen4';
import {NavigationProp} from '@react-navigation/native';
import {
  PanGestureHandler,
  State,
  PanGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';

interface OnboardingManagerProps {
  navigation: NavigationProp<any>;
}

const OnboardingManager: React.FC<OnboardingManagerProps> = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleStartNow = () => {
    // Reset the navigation stack and navigate to the AuthStackNavigator
    navigation.reset({
      index: 0,
      routes: [{name: 'Auth'}],
    });
  };

  const handleNext = () => {
    if (currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('NextScreenAfterOnboarding');
    }
  };

  const handleSkip = () => {
    setCurrentIndex(3);
  };

  const handleDotPress = (index: number) => {
    setCurrentIndex(index);
  };

  const onSwipe = (event: PanGestureHandlerStateChangeEvent) => {
    const {nativeEvent} = event;
    if (nativeEvent.state === State.END) {
      if (nativeEvent.velocityX > 0) {
        setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0);
      } else if (nativeEvent.velocityX < 0) {
        setCurrentIndex(currentIndex < 3 ? currentIndex + 1 : 3);
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <PanGestureHandler onHandlerStateChange={onSwipe}>
        <View style={{flex: 1}}>
          {currentIndex === 0 && (
            <OnboardingScreen1 onNext={handleNext} onSkip={handleSkip} />
          )}
          {currentIndex === 1 && (
            <OnboardingScreen2 onNext={handleNext} onSkip={handleSkip} />
          )}
          {currentIndex === 2 && (
            <OnboardingScreen3 onNext={handleNext} onSkip={handleSkip} />
          )}
          {currentIndex === 3 && (
            <OnboardingScreen4 onStartNow={handleStartNow} />
          )}
        </View>
      </PanGestureHandler>
      <CustomPagination
        total={4}
        current={currentIndex}
        onDotPress={handleDotPress}
      />
    </View>
  );
};

export default OnboardingManager;
