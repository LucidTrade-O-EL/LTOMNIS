import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './SignUpPage';
import PlaidLinkButton from './PlaidLinkButton';
import CreateLinkToken from './CreateLinkToken';
import CreditScoreDisplay from './creditScoreDisplay';

const Stack = createStackNavigator();

const PlaidStart = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="PlaidLink" component={PlaidLinkButton} />
        <Stack.Screen name="CreateLinkToken" component={CreateLinkToken} />
        <Stack.Screen name="CreditScoreDisplay" component={CreditScoreDisplay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PlaidStart;
