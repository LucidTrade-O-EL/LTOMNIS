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
import {PlaidLink} from 'react-native-plaid-link-sdk';
import {useDispatch, useSelector} from 'react-redux';
import {setLinkToken} from '../../actions';
import {AppState} from '../../ReduxStore';
import {RootStackParamList} from '../../types';

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
  const {linkToken} = route.params;
  const dispatch = useDispatch();
  const id = useSelector((state: AppState) => state.id);
  console.log(
    `This is the LinkToken inside the IDV 1: ${JSON.stringify(
      linkToken.LinkToken,
    )}`,
  );

  const onSuccess = async (public_token, metadata) => {
    console.log('Plaid Link onSuccess: ', public_token, metadata);
    console.log('ID for API call: ', id);

    try {
      const url = `http://localhost:8080/api/omnis/identity_verification/${linkToken.LinkToken}`;
      const response = await axios.get(url);
      console.log(
        `This is the LinkToken inside the IDV 2: ${linkToken.LinkToken}`,
      );
      console.log('Response data: ', response.data);
      dispatch(setLinkToken(response.data));
      // Navigate to the next screen if needed
      // navigation.navigate('NextScreen');
    } catch (error) {
      console.error('Error in Plaid onSuccess with Axios: ', error);
    }
  };

  const onExit = (exit: any) => {
    // Handle the exit scenario
    console.log('Plaid Link Exit: ', exit);
  };

  return (
    <View style={styles.container}>
      {linkToken ? (
        <PlaidLink token={linkToken} onSuccess={onSuccess} onExit={onExit}>
          <Text>Verify Identity with Plaid</Text>
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
