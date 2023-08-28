import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type ScreenTitleProps = {
  title?: string;  // Made the title prop optional
  subtitle?: string;
  showBackArrow?: boolean;
  onBackPress?: () => void;
  showRightIcon?: boolean; // New prop for showing right icon
  rightIconName?: string;  // New prop for specifying the icon name
  onRightIconPress?: () => void;  // New prop for icon press callback
};

const ScreenTitle: React.FC<ScreenTitleProps> = ({ title, subtitle, showBackArrow = false, onBackPress, showRightIcon = false, rightIconName, onRightIconPress }) => {
  return (
    <View style={styles.container}>
      {showBackArrow && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Icon name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <View style={styles.textContainer}>
        {title && <Text style={styles.headerText}>{title}</Text>}
        {subtitle && <Text style={styles.subheaderText}>{subtitle}</Text>}
      </View>
      {showRightIcon && rightIconName && (
        <TouchableOpacity onPress={onRightIconPress} style={styles.rightButton}>
          <Icon name={rightIconName} size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  rightButton: {
    position: 'absolute',
    right: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  subheaderText: {
    color: 'white',
    opacity: 0.6,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default ScreenTitle;
