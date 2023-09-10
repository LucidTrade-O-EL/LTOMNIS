import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import GlobalStyles from '../../../assets/constants/colors';
import ScreenTitle from '../../../assets/constants/Components/ScreenTitle';
import SearchTextBox from '../../../assets/constants/Components/Buttons/SearchTextBox';
import FriendList from '../../../assets/constants/Components/FriendList';

export default function AddFriendScreen() {
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
        <FriendList />
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
