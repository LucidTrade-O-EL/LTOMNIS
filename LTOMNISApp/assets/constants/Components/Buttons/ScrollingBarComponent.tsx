import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import GlobalStyles from '../../colors';

interface ScrollingBarComponentProps {
  scrollPosition: Animated.Value;
  totalWidth: number;
  flatListWidth: number;
  highlightedWidth: number;
}

const ScrollingBarComponent: React.FC<ScrollingBarComponentProps> = ({ scrollPosition, totalWidth, flatListWidth, highlightedWidth }) => {

  console.log(`this is totalWidth ${totalWidth} and this is ${flatListWidth}. Is totalWidth Greater or Equal ${totalWidth>=flatListWidth}`)
  return (
    <View style={styles.barContainer}>
      <View
        style={{
          ...styles.bar,
          width: flatListWidth * 0.90,
          backgroundColor: 'grey',
        }}>
        <Animated.View
          style={{
            height: 2,
            width: highlightedWidth,
            backgroundColor: GlobalStyles.Colors.primary210, // Set a background color
            borderRadius: 10,
            transform: [
              {
                translateX: scrollPosition.interpolate({
                  inputRange: [0, totalWidth - flatListWidth],
                  outputRange: [0, flatListWidth * 0.9 - highlightedWidth],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  bar: {
    height: 2,
    borderRadius: 10,
  },
});

export default ScrollingBarComponent;
