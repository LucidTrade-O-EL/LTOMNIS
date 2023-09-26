import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function SplashScreen(): JSX.Element {
  return (
    <View style={styles.background}>
      {/* <Image style={styles.image} source={require('/Users/omnisceo/Desktop/ZKJ/LTOMNIS/LTOMNISApp/assets/gradient9.png')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#1E1E1E',
  },

  text: {
    color: '#fff',
  },

  image: {
    margin: 10,
    resizeMode: 'contain',
    width: 300,
    height: 300,
  },
});
