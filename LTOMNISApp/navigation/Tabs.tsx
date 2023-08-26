import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import GlobalStyles from '../assets/constants/colors';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {shadow} from 'react-native-paper';
// import the other tabs for screens

const Tab = createBottomTabNavigator();

const [isImageClicked, setImageClicked] = useState(false);

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
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: GlobalStyles.Colors.primary700,
          borderRadius: 15,
          height: 90,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TouchableOpacity onPress={() => setImageClicked(!isImageClicked)}>
              {isImageClicked ? (
                <Image source={require('../assets/Icons/Home2.png')} />
              ) : (
                <Image source={require('../assets/Icons/Home.png')} />
              )}
            </TouchableOpacity>
          ),
        }}
      />
      {/* <Tab.Screen name='HomeScreen' component={Feed}/>
      <Tab.Screen name='HomeScreen' component={OMNISScore}/>
      <Tab.Screen name='HomeScreen' component={Spotlight}/>
      <Tab.Screen name='HomeScreen' component={AddPost}/> */}
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
});
