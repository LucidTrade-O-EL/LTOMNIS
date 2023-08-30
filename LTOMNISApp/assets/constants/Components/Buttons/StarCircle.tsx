import React from 'react';
import {View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GlobalStyles from '../../colors';

type StarCircleProps = {
  iconName: string;
};

const StarCircle: React.FC<StarCircleProps> = ({iconName}) => {
  return (
    <View style={styles.circle}>
      <MaterialCommunityIcons name={iconName} size={14} color={GlobalStyles.Colors.primary100} />
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12, // half of the width and height to make it a circle
    backgroundColor: GlobalStyles.Colors.primary200,
    justifyContent: 'center', // center the child vertically
    alignItems: 'center', // center the child horizontally
  },
});

export default StarCircle;
