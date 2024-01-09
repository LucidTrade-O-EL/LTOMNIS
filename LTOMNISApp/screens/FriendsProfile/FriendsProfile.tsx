import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import {Avatar, Divider, Icon} from 'react-native-elements';
import {user as importedUser} from '../../assets/constants/user'; // Renamed to avoid naming conflicts
import GlobalStyles from '../../assets/constants/colors';
import StatisticItem from '../MyProfile/StatisticItem';
import ButtonsRow from '../MyProfile/ButtonsRow';
import GrayBox from '../MyProfile/GrayBox';


export default function FriendsProfile() {
  const firstUser = importedUser[0];


  const initials = firstUser.name
    ? firstUser.name
        .split(' ')
        .map(word => word[0])
        .join('')
    : 'ZV';

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        showBackArrow={true}
        showRightIcon={false}
      />
      <View style={styles.avatarContainer}>
        <Avatar
          size={80}
          rounded
          title={!firstUser.avatarUri ? initials : undefined}
          source={firstUser.avatarUri ? {uri: firstUser.avatarUri} : undefined}
          overlayContainerStyle={{backgroundColor: 'gray'}}
          containerStyle={{width: 80, height: 80}}
        />
      </View>
      <View
        style={{marginTop: 10, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={styles.nameTitle}>Zakariya Veasy</Text>
        <Text style={styles.usernameTitle}>@easy</Text>
      </View>
      <View>
        <View style={styles.statisticsContainer}>
          <StatisticItem value="12" label="Friends" />
          <VerticalDivider />
          <StatisticItem value="80" label="Score" />
          <VerticalDivider />
          <StatisticItem
            label="Status"
            lottieSource={require('../../assets/goldBar.json')}
          />
        </View>
        <ButtonsRow
          leftButtonText="Accept"
          rightButtonText="Decline"
          onLeftButtonPress={() => {
            console.log('Left button pressed');
          }}
          onRightButtonPress={() => {
            console.log('Right button pressed');
          }}
          isLeftButtonActive={true} // or false based on your state
          isRightButtonActive={false} // or true based on your state
        />
      </View>
      <View
        style={{
          borderRadius: 24,
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
          padding: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        <GrayBox iconName="users" label="Friends" iconType="feather" />
        <GrayBox
          iconName="message-square"
          label="My Posts"
          iconType="feather"
        />
        <GrayBox
          iconName="account-group"
          label="Groups"
          iconType="MaterialCommunityIcons"
        />
      </View>
    </SafeAreaView>
  );
}

const VerticalDivider = () => {
  return <Divider style={styles.divider} />;
};

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  AlignItems: {
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Relative positioning for this container
  },
  editIcon: {
    position: 'absolute', // Absolute positioning for the pencil icon
    right: 1,
    bottom: 1,
    backgroundColor: GlobalStyles.Colors.primary600,
    borderRadius: 15,
    padding: 5,
  },
  nameTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: GlobalStyles.Colors.primary100,
  },
  usernameTitle: {
    fontSize: 16,
    color: GlobalStyles.Colors.primary100,
  },
  statisticsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    height: '60%',
    width: 1,
    backgroundColor: GlobalStyles.Colors.accent100,
    marginHorizontal: 10, // Optional, to give some space on either side
  },
});
