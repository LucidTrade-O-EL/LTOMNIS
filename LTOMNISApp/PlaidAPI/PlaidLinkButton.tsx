import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  linkToken: string;
}

const PlaidLinkButton: React.FC<Props> = ({ linkToken }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Logic to handle the press event, possibly involving navigation or Plaid Link setup
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Connect to Plaid</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    // Style your button
  },
  buttonText: {
    // Style your button text
  }
});

export default PlaidLinkButton;
