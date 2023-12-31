import React, {ReactNode, useEffect} from 'react';
import {View, StyleSheet, GestureResponderEvent} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
import {
  FeedStackNavigator,
  HomeStackNavigator,
  SpotlightStackNavigator,
} from '../App';
import {getFocusedRouteNameFromRoute, useNavigation} from '@react-navigation/native';
import ScoreBreakDown from '../screens/OMNISScore/ScoreBreakDown/ScoreBreakDown';
import OfferTransactionHistory from '../screens/NewOffers/Borrower/ClosedOffers/OfferTransactionHistory';
import {useDispatch, useSelector} from 'react-redux';
import {AppState, hideTabBar, showTabBar} from '../appReducer';

interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
}

const Tab = createBottomTabNavigator();

// const CustomTabBarButton = ({children, onPress}) => {
//   <TouchableOpacity
//     onPress={onPress}
//     style={[
//       styles.shadow,
//       {top: -20, justifyContent: 'center', alignItems: 'center'},
//     ]}>
//     <View
//       style={{
//         width: 54,
//         height: 54,
//         borderRadius: 54,
//         backgroundColor: GlobalStyles.Colors.primary200,
//       }}>
//       {children}
//     </View>
//   </TouchableOpacity>;
// };

const CustomTabBarButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.shadow,
        {top: -20, justifyContent: 'center', alignItems: 'center'},
      ]}>
      <View
        style={{
          width: 54,
          height: 54,
          borderRadius: 54,
          backgroundColor: GlobalStyles.Colors.primary200,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const findDeepRouteName = (state) => {
  const route = state.routes[state.index];
  if (route.state) {
    // Nested navigator detected
    return findDeepRouteName(route.state);
  }
  return route.name; // The name of the current screen
};

const screensWithTabs = ['HomeStackNavigator']; // List of screen names with tabs

export default function Tabs({ route }) {

  const navigation = useNavigation();
  const currentRouteName = findDeepRouteName(navigation.getState());
  console.log(`Current Route Name ${currentRouteName}`)
  
  const tabBarVisible = useSelector((state: AppState) => state.isTabBarVisible);
  console.log(`this is tab bar visbale ${tabBarVisible}`)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', (e) => {
      const routeName = getFocusedRouteNameFromRoute(e.data.state) ?? 'DefaultScreen';
      console.log(`This is route name ${routeName}, ${JSON.stringify(e.data.state)}`)
      if (screensWithTabs.includes(routeName)) {
        dispatch(showTabBar());
      } else {
        dispatch(hideTabBar());
      }
    });

    return unsubscribe;
  }, [navigation, dispatch]);

  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            display: tabBarVisible ? 'flex' : 'none',
            position: 'absolute',
            backgroundColor: GlobalStyles.Colors.primary700,
            borderRadius: 10,
            height: '9%',
            ...styles.shadow,
          },
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
            tabBarStyle: {
              display: tabBarVisible ? 'flex' : 'none',
              backgroundColor: GlobalStyles.Colors.primary700
            },
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
          name="SpotlightStackNavigator"
          component={SpotlightStackNavigator}
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
