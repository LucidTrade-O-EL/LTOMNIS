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
  navigation,
}) => {
  const token = useSelector((state: AppState) => state.token);
  const linkToken = useSelector((state: AppState) => state.linkToken);

  console.log('linkToken: ', linkToken.LinkToken);

  console.log(
    `This is the LinkToken inside the IDV 1: ${JSON.stringify(
      linkToken.LinkToken,
    )}`,
  );

  const onSuccess = (success: LinkSuccess) => {
    fetch('http://localhost:8080/api/omnis/identity_verification', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        linkToken: linkToken.LinkToken,
      }),
    });
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
