import {View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import GlobalStyles from '../assets/constants/colors';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RegisterScreen from '../screens/SignIn/RegisterScreen';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SignInScreen from '../screens/SignIn/SignInScreen';
import SignUpScreen from '../screens/SignUp/SignUpScreen';
import Verification from '../screens/auth/Verification';
import { GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import OMNISScoreScreen from '../screens/OMNISScore/OMNISScoreScreen';
import SpotlightScreen from '../screens/Spotlight/SpotlightScreen';
import AddPostScreen from '../screens/add_post/AddPostScreen';
import { OmnisScoreStackNavigator } from '../App';
import PostOffer from '../screens/MyFeed/Lender/PostOffer';
import FeedSummary from '../screens/MyFeed/Borrower/FeedSummary';
import PostDetails from '../screens/MyFeed/Lender/PostDetails';
import MyFeedScreen from '../screens/MyFeed/MyFeedScreen';

interface CustomTabBarButtonProps {
  children: React.ReactNode;
  onPress: (e?: GestureResponderEvent) => void;
}

const Tab = createBottomTabNavigator();

const TabBarBackground = () => {
  return (
    <View style={styles.tabBarBackground}>
      <Svg width="100%" height="100%" viewBox="0 0 500 80">
        <Path
          d="M0,0 L500,0 L500,50 Q250,70 0,50 L0,0"
          fill="yourColorHere"
        />
      </Svg>
    </View>
  );
};


const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
  children,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow, // change this line
    }}>
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


export default function Tabs() {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: GlobalStyles.Colors.primary700,
            borderRadius: 10,
            height: '9%',
            ...styles.shadow,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
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
          name="MyFeedScreen"
          component={MyFeedScreen as any}
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
                <CustomTabBarButton {...props} onPress={() => {props.onPress}} /> 
              ),
            }}
        />
        <Tab.Screen
          name="OmnisScoreStackNavigator"
          component={OmnisScoreStackNavigator}
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