import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import GlobalStyles from '../../assets/constants/colors';
import {RootStackParamList} from '../../types';

const {width} = Dimensions.get('window');
interface ButtonsRowProps {
  leftButtonText: string;
  rightButtonText: string;
  onLeftButtonPress: () => void; // Callback for left button press
  onRightButtonPress: () => void; // Callback for right button press
  isLeftButtonActive: boolean; // New prop to determine if left button is active
  isRightButtonActive: boolean; // New prop to determine if right button is active
}

const ButtonsRow = ({
  leftButtonText,
  rightButtonText,
  onLeftButtonPress,
  onRightButtonPress,
  isLeftButtonActive,
  isRightButtonActive,
}: ButtonsRowProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onLeftButtonPress}
        style={[
          styles.button,
          isLeftButtonActive ? styles.activeButton : styles.inactiveButton,
        ]}>
        <Text style={styles.buttonText}>{leftButtonText}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onRightButtonPress}
        style={[
          styles.button,
          isRightButtonActive ? styles.activeButton : styles.inactiveButton,
        ]}>
        <Text style={styles.buttonText}>{rightButtonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.85,
    alignSelf: 'center', // To center the container
    marginVertical: 20,
  },
  button: {
    height: 36,
    width: 156,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonLeft: {
    backgroundColor: GlobalStyles.Colors.primary200, // Change to desired color
  },
  buttonRight: {
    backgroundColor: GlobalStyles.Colors.primary200, // Change to desired color
  },
  activeButton: {
    backgroundColor: GlobalStyles.Colors.primary200,
  },
  inactiveButton: {
    backgroundColor: GlobalStyles.Colors.primary700,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ButtonsRow;
