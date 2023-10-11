import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GlobalStyles from '../../../assets/constants/colors';

type AmountBoxProps = {
  title: string;
  amount: string | number;
};

export const AmountBox: React.FC<AmountBoxProps> = ({ title, amount }) => {
  // Determine the type of amount (dollar or percentage)
  const isDollar = typeof amount === 'number';
  const displayAmount = isDollar ? `$${amount}` : `${amount}%`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.box}>
        <Text style={styles.amountText}>{displayAmount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      paddingStart: 10, // Add padding at the start
      marginVertical: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left', // Align text to the left
      marginBottom: 5, // Space between title and box
      color: GlobalStyles.Colors.primary100,
    },
    box: {
      width: '96%',
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      justifyContent: 'center',
      paddingLeft: 10,
      backgroundColor: GlobalStyles.Colors.primary100,
      borderRadius: 10,
    },
    amountText: {
      fontSize: 16,
    },
  });
  
  

