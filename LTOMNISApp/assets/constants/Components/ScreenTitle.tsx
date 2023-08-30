import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'; // Import Feather icons

type ScreenTitleProps = {
  title?: string;
  subtitle?: string;
  showBackArrow?: boolean;
  onBackPress?: () => void;
  showRightIcon?: boolean;
  rightIconType?: 'Ionicons' | 'Feather'; // New prop to determine which icon set to use
  rightIconName?: string;
  onRightIconPress?: () => void;
};

const ScreenTitle: React.FC<ScreenTitleProps> = ({
  title,
  subtitle,
  showBackArrow = false,
  onBackPress,
  showRightIcon = false,
  rightIconType = 'Ionicons', // Default to Ionicons
  rightIconName,
  onRightIconPress,
}) => {
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
          {rightIconType === 'Ionicons' ? (
            <Icon name={rightIconName} size={24} color="white" />
          ) : (
            <Feather name={rightIconName} size={24} color="white" />
          )}
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
    fontWeight: 'bold',
  },
  subheaderText: {
    color: 'white',
    opacity: 0.6,
    fontSize: 13,
    textAlign: 'center',
  },
});

export default ScreenTitle;
