import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewOffersScreen from './NewOffersScreen';

const Tab = createMaterialTopTabNavigator();

export default function OfferScreenTopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={NewOffersScreen} />
    </Tab.Navigator>
  );
}
