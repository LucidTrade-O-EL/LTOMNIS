import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import { setLinkToken } from '../../actions';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { AppState } from '../../ReduxStore';
import { link } from 'fs';

interface CreateLinkTokenProps {
  navigation: NativeStackNavigationProp<RootStackParamList>;
}

const CreateLinkToken: React.FC <CreateLinkTokenProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const id = useSelector((state: AppState) => state.id);
  const linkToken = useSelector((state: AppState) => state.linkToken);
  const dispatch = useDispatch();
  const route = useRoute();

  

  useEffect(() => {
    const createToken = async () => {
      setIsLoading(true);
      try {
        console.log(`This could be the issue 1: ${JSON.stringify(id)}`)
        const response = await fetch(
          'http://localhost:8080/api/omnis/token/create',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(id),
          
          },
        );
        console.log(`This could be the issue 2: ${JSON.stringify(id)}`)
        if (response) {
          const id = await response.json();
          dispatch(setLinkToken(id));
          console.log(`this is the setLinkToken ${id}`)
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
      navigation.navigate('IdentityVerificationScreen', { linkToken });
      console.log(`This is UseEffect inside the Create Token ${JSON.stringify(linkToken.LinkToken)}`)
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
