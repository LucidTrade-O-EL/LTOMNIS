import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import {link} from 'fs';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import {
  LinkExit,
  LinkSuccess,
  PlaidLink,
  usePlaidEmitter,
} from 'react-native-plaid-link-sdk';
import {useDispatch, useSelector} from 'react-redux';
import {setLinkToken} from '../../actions';
import {user} from '../../assets/constants/user';
import {AppState} from '../../ReduxStore';
import {RootStackParamList} from '../../types';
import {usePlaidLink} from 'react-plaid-link';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type IdentityVerificationScreenRouteParams = {
  linkToken: string;
};

type IdentityVerificationScreenProps = {
  route: RouteProp<RootStackParamList, 'IdentityVerificationScreen'>;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'IdentityVerificationScreen'
  >;
};

const IdentityVerificationScreen: React.FC<IdentityVerificationScreenProps> = ({
  route,
}) => {
  const token = useSelector((state: AppState) => state.token);
  const linkToken = useSelector((state: AppState) => state.linkToken);
  const navigation = useNavigation<StackNavigationProp<any>>();

  console.log('linkToken: ', linkToken.LinkToken);

  console.log(
    `This is the LinkToken inside the IDV 1: ${JSON.stringify(
      linkToken.LinkToken,
    )}`,
  );

console.log('IDV : Link ', linkToken.LinkToken)

const onSuccess = async (success: LinkSuccess) => {
  console.log('Plaid Link success:', success);

  try {
      const response = await fetch('http://localhost:8080/api/omnis/identity_verification', {
          method: 'POST',
          headers: {
              Authorization: `Bearer ${token.token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              linkToken: success.metadata.linkSessionId,
          }),
      });

      // Check if the response is OK
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('this is data', data.user.firstName)

      // Check if 'firstName' or the relevant data is present
      if (data.user.firstName) {
          // Navigate to SplashScreen and then to HomeScreen
          navigation.navigate('SplashScreen');
          setTimeout(() => {
              navigation.navigate('MainStackNavigator');
          }, 3000); // Adjust the timeout as needed
      } else {
          // Handle the case where 'firstName' is not present
          // Perhaps navigate back or show an error message
          console.log('firstName not found in response');
      }
  } catch (error) {
      console.error('Error in Plaid Link onSuccess:', error);
      // Handle the error case
  }
};


  const onExit = (linkExit: LinkExit) => {
    supportHandler.report({
      error: linkExit.error,
      institution: linkExit.metadata.institution,
      linkSessionId: linkExit.metadata.linkSessionId,
      requestId: linkExitlinkExit.metadata.requestId,
      status: linkExit.metadata.status,
    });
  };

  usePlaidEmitter(event => {
    console.log(event);
  });

  return (
    <View style={styles.container}>
      {linkToken ? (
        <PlaidLink
          tokenConfig={{
            token: linkToken.LinkToken,
          }}
          onSuccess={onSuccess}
          onExit={onExit}>
          <Text>Add Account</Text>
        </PlaidLink>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Add more styles as needed
});

export default IdentityVerificationScreen;
