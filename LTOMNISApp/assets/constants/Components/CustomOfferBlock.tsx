import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyles from '../colors';

type RowProps = {
  leftText: string;
  rightText: string;
};

const Row: React.FC<RowProps> = ({leftText, rightText}) => (
  <View style={styles.row}>
    <Text style={styles.leftText}>{leftText}</Text>
    <Text style={styles.rightText}>{rightText}</Text>
  </View>
);

type RowData = {
  leftText: string;
  rightText: string;
};

type DividerData = {
  isDivider: true;
};

type CustomOfferBlockProps = {
  data: Array<RowData | DividerData>;
};

const CustomOfferBlock: React.FC<CustomOfferBlockProps> = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        if ('isDivider' in item) {
          return <View key={index} style={styles.divider} />;
        }
        return (
          <Row
            key={index}
            leftText={item.leftText}
            rightText={item.rightText}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: '90%',
    backgroundColor: GlobalStyles.Colors.primary120,
    borderRadius: 20,
    padding: 10, // This is to prevent words touching the sides
    justifyContent: 'space-around', // This brings the rows closer together
    marginVertical: 32,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    fontSize: 14,
    color: GlobalStyles.Colors.accent300,
    fontFamily: 'San Francisco',
  },
  rightText: {
    fontSize: 16,
    color: GlobalStyles.Colors.primary510,
    fontFamily: 'San Francisco',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(46, 34, 22, 0.06)', // or another color you want
    marginVertical: 5, // add space around the divider
  },
});

export default CustomOfferBlock;
