import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewOffersScreen from './NewOffersScreen';
import Verification from '../auth/Verification';
import GlobalStyles from '../../assets/constants/colors';
import SignInScreen from '../SignIn/SignInScreen';

const Tab = createMaterialTopTabNavigator();

export default function OfferScreenTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {borderTopLeftRadius: 24, borderTopRightRadius: 24}, // set this to your preferred tab bar background color
        tabBarIndicatorStyle: {
          backgroundColor: GlobalStyles.Colors.primary200,
          height: 2,
          alignSelf: 'center',
        },
      }}>
      <Tab.Screen
        options={{title: 'New Offers'}}
        name="NewOffersScreen"
        component={NewOffersScreen}
      />
      <Tab.Screen
        options={{title: 'Active Offers'}}
        name="Verification"
        component={Verification}
      />
      <Tab.Screen
        options={{title: 'Closed Offers'}}
        name="SignInScreen"
        component={SignInScreen}
      />
    </Tab.Navigator>
  );
}
