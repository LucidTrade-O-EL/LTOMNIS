import React, { ReactNode } from 'react';
import { View, StyleSheet, GestureResponderEvent } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Local Imports
import GlobalStyles from '../assets/constants/colors';
import HomeScreen from '../screens/HomeScreen';
import MyFeedScreen from '../screens/MyFeed/MyFeedScreen';
import PostDetails from '../screens/MyFeed/Lender/PostDetails';
import PostOffer from '../screens/MyFeed/Lender/PostOffer';
import FeedSummary from '../screens/MyFeed/Borrower/FeedSummary';
import OfferSent from '../screens/MyFeed/Lender/OfferSent';
import OfferSentSuccessful from '../screens/MyFeed/OfferSentSuccessful';
import AddPostScreen from '../screens/add_post/AddPostScreen';
import OMNISScoreScreen from '../screens/OMNISScore/OMNISScoreScreen';
import SpotlightScreen from '../screens/Spotlight/SpotlightScreen';
import { FeedStackNavigator, HomeStackNavigator } from '../App';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ScoreBreakDown from '../screens/OMNISScore/ScoreBreakDown/ScoreBreakDown';
import OfferTransactionHistory from '../screens/NewOffers/Borrower/ClosedOffers/OfferTransactionHistory';
import { useSelector } from 'react-redux';


interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
}

const Tab = createBottomTabNavigator();





const CustomTabBarButton = ({ children, onPress }) => {
  <TouchableOpacity onPress={onPress} style={[styles.shadow, { top: -20, justifyContent: 'center', alignItems: 'center' }]}>
    <View style={{ width: 54, height: 54, borderRadius: 54, backgroundColor: GlobalStyles.Colors.primary200 }}>{children}</View>
  </TouchableOpacity>
}


export default function Tabs() {
  // const isTabBarVisible = useSelector(state => state.tabBar.isVisible);

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => {
          // Use the utility to get the current screen's name

          // const hideTabBarScreens = ['OfferTransactionHistory'];
          // const tabBarVisible = !hideTabBarScreens.includes(routeName);

          // const showTabBar = routeName !== 'PostDetails' && routeName !== 'PostOffer'; // Add other screens as needed

          return {
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
              position: 'absolute',
              backgroundColor: GlobalStyles.Colors.primary700,
              borderRadius: 10,
              height: '9%',
              ...styles.shadow,
              // display: isTabBarVisible ? 'flex' : 'none'
            },
          };
        }}>
        <Tab.Screen
          name="HomeStackNavigator"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <Octicons
                name="home"
                size={30}
                color={
                  focused
                    ? GlobalStyles.Colors.primary100
                    : GlobalStyles.Colors.accent400
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="FeedStackNavigator"
          component={FeedStackNavigator}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="file-tray-full-outline"
                size={30}
                color={
                  focused
                    ? GlobalStyles.Colors.primary100
                    : GlobalStyles.Colors.accent400
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="AddPostScreen"
          component={AddPostScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="add"
                size={30}
                color={GlobalStyles.Colors.primary900}
              />
            ),
            tabBarButton: props => (
              <CustomTabBarButton {...props} onPress={props.onPress as any} />
            ),
          }}
        />
        <Tab.Screen
          name="OMNISScoreScreen"
          component={OMNISScoreScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="sparkles-outline"
                size={30}
                color={
                  focused
                    ? GlobalStyles.Colors.primary100
                    : GlobalStyles.Colors.accent400
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="SpotlightScreen"
          component={SpotlightScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons
                name="rocket-outline"
                size={30}
                color={
                  focused
                    ? GlobalStyles.Colors.primary100
                    : GlobalStyles.Colors.accent400
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000', // Change Shadow
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  tabBarBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
