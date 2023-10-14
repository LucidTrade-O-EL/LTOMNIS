import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import {Avatar, Divider, Icon} from 'react-native-elements';
import {user as importedUser} from '../../assets/constants/user'; // Renamed to avoid naming conflicts
import GlobalStyles from '../../assets/constants/colors';
import StatisticItem from './StatisticItem';
import ButtonsRow from './ButtonsRow';
import GrayBox from './GrayBox';

export default function MyProfile() {
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
        showRightIcon={true}
        rightIconType="Feather"
        rightIconName="user-plus"
        onRightIconPress={() => {}}
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
        <Icon
          name="edit-2"
          type="feather"
          color={GlobalStyles.Colors.primary200}
          size={10}
          containerStyle={styles.editIcon}
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
        <ButtonsRow />
      </View>
      <View
        style={{
          flex: 1,
          borderRadius: 24,
          backgroundColor: 'white',
          width: '100%',
          padding: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <GrayBox iconName="users" label="Friends" iconType="feather" />
        <GrayBox iconName="message-square" label="My Posts" iconType="feather" />
        <GrayBox iconName="account-group" label="Groups" iconType="MaterialCommunityIcons" />
        <GrayBox iconName="star-four-points-outline" label="Rewards" iconType="MaterialCommunityIcons" />
        <GrayBox iconName="help-circle-outline" label="Help Center" iconType="Ionicons" />
        <GrayBox iconName="settings" label="Settings" iconType="feather" />
        <GrayBox iconName="exit-outline" label="Sign Out" iconType="Ionicons" />
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
