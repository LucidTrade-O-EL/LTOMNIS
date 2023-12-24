import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import { setLinkToken } from '../../actions';
import { AppState } from '../../appReducer';

const CreateLinkToken = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const id = useSelector((state: AppState) => state.id);
  const linkToken = useSelector((state: AppState) => state.linkToken);
  const dispatch = useDispatch();
  const route = useRoute();


  useEffect(() => {
    const createToken = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          'http://localhost:8080/api/omnis/token/create',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: id}),
          },
        );

        if (response) {
          const data = await response.json();
          dispatch(setLinkToken(data));
        } else {
          console.error('No link token received, response was not ok.');
        }
      } catch (error) {
        console.error('Error creating link token:', error);
      }
      setIsLoading(false);
    };

    createToken();
  }, [id, dispatch]);

  useEffect(() => {
    if (linkToken) {
      navigation.navigate('IdentityVerificationScreen', {linkToken: linkToken});
    }
  }, [linkToken, navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Text>Redirecting to Plaid...</Text>
      )}
    </View>
  );
};

export default CreateLinkToken;
