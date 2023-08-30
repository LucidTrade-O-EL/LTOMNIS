import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

type CompleteButtonProps = {
  text?: string;
  onPress: () => void;
};

const CompleteButton: React.FC<CompleteButtonProps> = ({
  text = 'Complete',
  onPress,
}) => {
  return (
    <Pressable style={styles.SignButton} onPress={onPress}>
      <Text style={styles.SignButtonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  SignButton: {
    width: '90%',
    height: 56,
    backgroundColor: '#BDAE8D',
    justifyContent: 'center',
    borderRadius: 16,
    position: 'absolute', // Added this to make the button position absolute
    bottom: 50, // This ensures the button is 50 units from the bottom
    alignSelf: 'center', // This will center the button horizontally
  },

  SignButtonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default CompleteButton;
