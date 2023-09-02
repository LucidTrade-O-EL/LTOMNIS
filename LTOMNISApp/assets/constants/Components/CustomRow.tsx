import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyles from '../colors';

type CustomRowProps = {
  leftText: string;
  rightText: string | number;
  icon?: JSX.Element; // Allows for optional icon next to the rightText
};

const CustomRow: React.FC<CustomRowProps> = ({leftText, rightText, icon}) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.leftText}>{leftText}</Text>
      <View style={styles.rightContainer}>
        <Text style={styles.rightText}>{rightText}</Text>
        {icon && icon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  leftText: {
    fontSize: 14,
    color: GlobalStyles.Colors.accent300,
  },
  rightText: {
    fontSize: 16,
    fontWeight: '600',
    color: GlobalStyles.Colors.primary510,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomRow;
