import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import GlobalStyles from '../../assets/constants/colors';

const { width } = Dimensions.get('window');

const ButtonsRow = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.buttonLeft]}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonRight]}>
        <Text style={styles.buttonText}>Share Profile</Text>
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
    marginVertical: 20
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
  buttonText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ButtonsRow;
