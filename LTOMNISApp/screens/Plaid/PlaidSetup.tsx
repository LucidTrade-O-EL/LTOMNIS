import React, {useState, useCallback} from 'react';
import {Button, Alert} from 'react-native';
import PlaidLink from 'react-native-plaid-link-sdk';
import axios from 'axios';

const PlaidSetup = () => {
    const [token, setToken] = useState<any | null>(null);



  const fetchLinkToken = async () => {
    try {
      let response = await axios.post('YOUR_BACKEND_URL/create_link_token');
      setToken(response.data.link_token);
    } catch (error) {
      Alert.alert('Error', 'Unable to fetch link token.');
    }
  };

  const onSuccess = useCallback((data: { token: string, metadata: any }) => {
    // Handle successful authentication and log metadata
    console.log('Success', data.metadata);
}, []);

  const onExit = useCallback((error: any, metadata: any) => {
    // Handle exit or error and log metadata
    console.log('Exit', metadata);
    if (error) {
      console.log('Link error', error);
    }
  }, []);

  return (
    <>
      <Button title="Connect with Plaid" onPress={fetchLinkToken} />
      {token && (
        <PlaidLink
          tokenConfig={{
            token: token,
            noLoadingState: false, // or true based on your needs
          }}
          onSuccess={onSuccess}
          onExit={onExit}
        />
      )}
    </>
  );
};

export default PlaidSetup;
