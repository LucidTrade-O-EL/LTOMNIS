import React from 'react';
import {Pressable, Text, StyleSheet, View} from 'react-native';
import GlobalStyles from '../../colors';

type CompleteButtonProps = {
  onAccept: () => void;
  onDecline: () => void;
};

const AcceptAndDecline: React.FC<CompleteButtonProps> = ({
  onAccept,
  onDecline,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        position: 'absolute', // This is important for positioning the buttons at the bottom
        bottom: 50, // This ensures the buttons are 50 units from the bottom
        left: '5%', // This will center the container with respect to the screen
      }}>
      <Pressable style={styles.LeftButton} onPress={onDecline}>
        <Text style={styles.SignButtonText}>Decline</Text>
      </Pressable>
      <Pressable style={styles.RightButton} onPress={onAccept}>
        <Text style={styles.SignButtonText}>Accept</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  LeftButton: {
    width: '42%',
    height: 56,
    backgroundColor: GlobalStyles.Colors.primary600,
    justifyContent: 'center',
    borderRadius: 16,
  },
  RightButton: {
    width: '42%',
    height: 56,
    backgroundColor: '#BDAE8D',
    justifyContent: 'center',
    borderRadius: 16,
  },

  SignButtonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AcceptAndDecline;
