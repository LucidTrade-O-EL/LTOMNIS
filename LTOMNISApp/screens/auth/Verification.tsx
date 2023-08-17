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
  const [email, setEmail] = useState('');

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
          {/* 1st block */}
          <View style={styles.VerificationBox}>
            <TextInput></TextInput>
          </View>

          {/* 2nd block */}
          <View style={styles.VerificationBox}>
            <TextInput></TextInput>
          </View>

          {/* 3rd block */}
          <View style={styles.VerificationBox}>
            <TextInput></TextInput>
          </View>

          {/* 4th block */}
          <View style={styles.VerificationBox}>
            <TextInput></TextInput>
          </View>
        </View>
        <Text style={styles.resendSubheaderText}>Resend code</Text>
      </View>

      {/* Next */}
      <Pressable
        style={[styles.SignButton, styles.SignButtonOutlined]}
        onPress={() => {}}>
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
