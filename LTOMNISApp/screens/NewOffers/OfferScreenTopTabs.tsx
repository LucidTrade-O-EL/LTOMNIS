import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewOffersScreen from './NewOffersScreen';
import GlobalStyles from '../../assets/constants/colors';
import SignInScreen from '../SignIn/SignInScreen';
import ActiveOffers from './ActiveOffers/ActiveOffers';
import Verification from '../auth/Verification';
import BorrowerClosedOffers from './ClosedOffers/BorrowerClosedOffers';

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
        name="ActiveOffers"
        component={ActiveOffers}
      />
      <Tab.Screen
        options={{title: 'Closed Offers'}}
        name="BorrowerClosedOffers"
        component={BorrowerClosedOffers}
      />
    </Tab.Navigator>
  );
}
