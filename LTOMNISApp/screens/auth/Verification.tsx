import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

export default function Verification() {
  // UseState
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');
  const ref_input2 = React.createRef();
  const ref_input3 = React.createRef();
  const ref_input4 = React.createRef();

  const handleNextPress = async () => {
    const verificationCode = digit1 + digit2 + digit3 + digit4;

    try {
      const response = await fetch('YOUR_BACKEND_URL/api/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: userEmail, code: verificationCode}), // userEmail should be the user's email
      });

      const data = await response.json();
      if (data.success) {
        console.log('Verification successful.');
        // Handle successful verification (e.g., navigate to next screen)
      } else {
        console.log('Invalid verification code.');
        // Handle invalid code (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network errors (e.g., show an error message)
    }
  };

  const handleResendCode = async () => {
    try {
      const response = await fetch(
        'YOUR_BACKEND_URL/api/resend-verification-code',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email: userEmail}), // userEmail should be the email address of the user
        },
      );

      const data = await response.json();
      if (data.success) {
        console.log('Verification code resent.');
      } else {
        console.log('Failed to resend verification code.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <SafeAreaView style={styles.Background}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Verification</Text>
        <Text style={styles.subheaderText}>
          Enter your email account to reset password
        </Text>
      </View>

      {/* 4 Digits */}

      <View>
        <View
          style={{
            width: '90%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View style={styles.VerificationBox}>
            <TextInput
              style={styles.textInput}
              keyboardType="numeric"
              onChangeText={text => {
                setDigit1(text);
                text && ref_input2.current.focus();
              }}
              value={digit1}
              maxLength={1}
            />
          </View>
          <View style={styles.VerificationBox}>
            <TextInput
              ref={ref_input2}
              style={styles.textInput}
              keyboardType="numeric"
              onChangeText={text => {
                setDigit2(text);
                text ? ref_input3.current.focus() : ref_input1.current.focus();
              }}
              value={digit2}
              maxLength={1}
            />
          </View>
          <View style={styles.VerificationBox}>
            <TextInput
              ref={ref_input3}
              style={styles.textInput}
              keyboardType="numeric"
              onChangeText={text => {
                setDigit3(text);
                text ? ref_input4.current.focus() : ref_input2.current.focus();
              }}
              value={digit3}
              maxLength={1}
            />
          </View>
          <View style={styles.VerificationBox}>
            <TextInput
              ref={ref_input4}
              style={styles.textInput}
              keyboardType="numeric"
              onChangeText={text => {
                setDigit4(text);
                !text && ref_input3.current.focus();
              }}
              value={digit4}
              maxLength={1}
            />
          </View>
        </View>
        <Text style={styles.resendSubheaderText} onPress={handleResendCode}>
          Resend code
        </Text>
      </View>

      {/* Next */}
      <Pressable
        style={[styles.SignButton, styles.SignButtonOutlined]}
        onPress={handleNextPress}>
        <Text style={styles.SignButtonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 40,
  },
  textInput: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    // Any additional styling
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    marginBottom: 4,
  },
  subheaderText: {
    color: 'white',
    opacity: 0.6,
    fontSize: 13,
  },

  //   Reset Password styling
  SignButton: {
    width: '90%',
    height: 56,
    backgroundColor: '#BDAE8D',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 40,
  },
  SignButtonOutlined: {
    borderWidth: 2,
  },
  SignButtonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
  },

  //   Resend Code

  resendSubheaderText: {
    color: '#BDAE8D',
    fontSize: 13,
    marginTop: 10,
    textAlign: 'center',
  },

  //   Box Styling

  VerificationBox: {
    width: '20%',
    borderRadius: 16,
    borderColor: '#BDAE8D',
    height: 50,
    borderWidth: 1,
  },
});
