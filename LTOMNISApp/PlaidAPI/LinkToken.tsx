import { View, Text } from 'react-native'
import React from 'react'
import { LinkTokenCreateRequest } from 'plaid/dist/api';

export default function LinkToken() {

    const request: LinkTokenCreateRequest = {
        user: {
          client_user_id: 'user-id',
          phone_number: '+1 415 5550123'
        },
        client_name: 'Personal Finance App',
        products: ['transactions'],
        country_codes: ['US'],
        language: 'en',
        required_if_supported_products: ['liabilities'],
        webhook: 'https://sample-web-hook.com',
        redirect_uri: 'https://domainname.com/oauth-page.html'
      };
      try {
        const response = await plaidClient.linkTokenCreate(request);
        const linkToken = response.data.link_token;
      } catch (error) {
        // handle error
      }

      

  return (
    <View>
      <Text>LinkToken</Text>
    </View>
  )
}