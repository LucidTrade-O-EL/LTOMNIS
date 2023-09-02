import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

type RadialProps = {
  type: 'radio' | 'icon' | 'image';
  iconName?: string;
  imagePath?: string;
};

const RadialComponent: React.FC<RadialProps> = ({ type, iconName, imagePath }) => {
  if (type === 'radio') {
    return (
      <View style={styles.outerGrayCircle}>
        <View style={styles.innerGrayCircle} />
      </View>
    );
  }

  if (type === 'icon' && iconName) {
    return (
      <View style={styles.radialContainer}>
        <IconButton icon={iconName} size={20} />
      </View>
    );
  }

  if (type === 'image' && imagePath) {
    return (
      <View style={styles.radialContainer}>
        <Image source={{ uri: imagePath }} style={styles.image} />
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  radialContainer: {
    marginRight: 5,
  },
  outerGrayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F3F3F5',  // Dark gray
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  innerGrayCircle: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: '#B0B0B0',  // Lighter gray
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default RadialComponent;
