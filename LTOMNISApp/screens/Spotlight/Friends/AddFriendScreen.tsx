import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyles from '../../../assets/constants/colors';
import ScreenTitle from '../../../assets/constants/Components/ScreenTitle';
import SearchTextBox from '../../../assets/constants/Components/Buttons/SearchTextBox';
import FriendList from '../../../assets/constants/Components/FriendList';
import axios from 'axios';
import {Friend} from '../../../assets/constants/Components/FriendList';

export default function AddFriendScreen() {
  const [friendListData, setFriendListData] = React.useState<Friend[]>([]);

  const fetchFriendListData = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.lucidtrades.com/api/FriendRequest/friends',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const res = await axios(options);

      console.log('data payload ', res.data, res.headers);

      const user = res.data;

      if (user) {
        setFriendListData(user); // Assuming the data structure matches your Friend type
      } else {
        console.log('No user data received');
      }
    } catch (error: any) {
      console.error('An error occurred:', error);
    }
  };

  const searchFriendListData = async () => {
    try {
      const options = {
        method: 'GET',
        url: `https://api.lucidtrades.com/api/FriendRequest/${friends.email}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const res = await axios(options);

      console.log('data payload ', res.data, res.headers);

      const user = res.data;

      if (user) {
        setFriendListData(user); // Assuming the data structure matches your Friend type
      } else {
        console.log('No user data received');
      }
    } catch (error: any) {
      console.error('An error occurred:', error);
    }
  };

  const addFriend = async (friendData: Friend) => {
    try {
      const options = {
        method: 'POST',
        url: 'https://api.lucidtrades.com/api/FriendRequest',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        // Adjust this line to send the friend's ID as part of the request payload
        data: {id: friendData.id},
      };

      const res = await axios(options);
      console.log('Response from addFriend:', res.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const unfriend = async (friendData: Friend) => {
    try {
      const options = {
        method: 'DELETE',
        url: `https://api.lucidtrades.com/api/FriendRequest/${friendData.id}`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const res = await axios(options);
      console.log('Response from unfriend:', res.data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  React.useEffect(() => {
    fetchFriendListData(); // Fetch data when the component mounts
  }, []);

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        title="Friends"
        showBackArrow={true}
        onBackPress={() => {
          // Handle the back button press, e.g., navigate back
        }}
        showRightIcon={true}
        rightIconType="Ionicons" // Either 'Ionicons' or 'Feather'
        rightIconName="person-add" // replace with actual Feather icon name
        onRightIconPress={() => {}}
      />
      <SearchTextBox />
      <View style={{marginTop: 20, width: '100%', alignSelf: 'center'}}>
        <FriendList addFriendHandler={addFriend} unfriendHandler={unfriend} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.Colors.primary800,
    paddingVertical: 40,
  },
});
