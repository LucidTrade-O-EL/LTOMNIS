import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import GlobalStyles from '../assets/constants/colors';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {shadow} from 'react-native-paper';
import RegisterScreen from '../screens/auth/RegisterScreen';
import Octicons from 'react-native-vector-icons/Octicons';


// import the other tabs for screens

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...shadow,
    }}>
    <View>{children}</View>
  </TouchableOpacity>
);

export default function Tabs() {
  const [isImageClicked, setImageClicked] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: GlobalStyles.Colors.primary700,
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
          <Octicons name="home" size={30} color={focused ? GlobalStyles.Colors.primary100 : GlobalStyles.Colors.accent400} />
          ),
        }}
      />
      <Tab.Screen name='Register' component={RegisterScreen}/>
      {/* <Tab.Screen name='HomeScreen' component={OMNISScore}/> */}
      {/* <Tab.Screen name='HomeScreen' component={Spotlight}/> */}
      {/* <Tab.Screen name='HomeScreen' component={AddPost}/>  */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
