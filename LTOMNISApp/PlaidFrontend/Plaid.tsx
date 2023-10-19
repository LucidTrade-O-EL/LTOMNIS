import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import PlaidLink, {
  usePlaidEmitter,
  LinkSuccess,
  LinkExit,
} from 'react-native-plaid-link-sdk';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Plaid() {
  const onSuccess = (linkSuccess: LinkSuccess) => {
    fetch('https://yourserver.com/exchange_public_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        publicToken: linkSuccess.publicToken,
        accounts: linkSuccess.metadata.accounts,
        institution: linkSuccess.metadata.institution, // Adjust this line if institution can be undefined
        linkSessionId: linkSuccess.metadata.linkSessionId,
      }),
    });
  };

  const supportHandler = {
    report: (data: any) => {
        console.log('Reporting Plaid exit:', data);
        // TODO: Implement your reporting mechanism.
    }
};


  usePlaidEmitter(event => {
    console.log(event);
  });

  const onExit = (linkExit: LinkExit) => {
    if (linkExit.error) {
      console.error(linkExit.error);
    }
    // This is still a placeholder. You must define or import supportHandler
    supportHandler.report({
      error: linkExit.error,
      institution: linkExit.metadata.institution, // Adjust this line if institution can be undefined
      linkSessionId: linkExit.metadata.linkSessionId,
      requestId: linkExit.metadata.requestId,
      status: linkExit.metadata.status,
    });
  };

  return (
    <SafeAreaView>
      <PlaidLink
        tokenConfig={{
          token: '#GENERATED_LINK_TOKEN#',
          noLoadingState: false, // or true, depending on your preference
        }}
        onSuccess={onSuccess}
        onExit={onExit}>
        <Text>Add Account</Text>
      </PlaidLink>
    </SafeAreaView>
  );
}
