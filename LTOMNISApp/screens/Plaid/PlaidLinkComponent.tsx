import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlaidLink from 'react-native-plaid-link-sdk';
import { View, Button, ActivityIndicator } from 'react-native';

const PlaidLinkComponent = () => {
  const [loading, setLoading] = useState(false);
  const [linkToken, setLinkToken] = useState<string | null>(null);


  useEffect(() => {
    fetchLinkToken();
  }, []);

const fetchLinkToken = async () => {
  try {
    setLoading(true);
    const response = await axios.post('/api/create_link_token');
    setLoading(false);
    setLinkToken(response.data.link_token); // Assuming the token is stored here
  } catch (error) {
    setLoading(false);
    console.error('Error fetching link token:', error);
  }
};

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ padding: 20 }}>
      {linkToken && (
        <PlaidLink
        tokenConfig={{ 
            token: linkToken, 
            noLoadingState: true // or false, depending on your preference
          }}
          onSuccess={(event) => {
            const { publicToken, metadata } = event;
            console.log('Successfully linked account!');
            // ... use publicToken and metadata as needed ...
          }}          
          onExit={(error, metadata) => {
            console.log('User exited Plaid Link flow.');
          }}
          // ... add other event handlers if necessary
        >
          <Button title="Connect with Plaid" onPress={() => {}} />
        </PlaidLink>
      )}
    </View>
  );
};

export default PlaidLinkComponent;
