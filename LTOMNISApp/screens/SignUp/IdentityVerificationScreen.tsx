import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { PlaidLink } from 'react-native-plaid-link-sdk';

const IdentityVerificationScreen = ({ route, navigation }) => {
    const { linkToken } = route.params; // Ensure you pass this from the previous screen
  
    const onExit = (error) => {
      if (error) {
        console.log('Exited with error:', error);
        // Handle the error
      } else {
        // Handle the exit without error
      }
    };
  
    const onSuccess = (publicToken, metadata) => {
      // Send publicToken to your app server to exchange for an access token
      // and complete the identity verification process
    };
  
    return (
      <View>
        {linkToken ? (
          <PlaidLink
            token={linkToken}
            onSuccess={onSuccess}
            onExit={onExit}
          >
            <Text>Verify Identity with Plaid</Text>
          </PlaidLink>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  };


export default IdentityVerificationScreen;
