import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import RowWithArrow from './RowWithArrow';

export default function Settings() {
  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle showBackArrow={true} title="Edit Profile" />
      <RowWithArrow title="Language" />
      <RowWithArrow title="Notifications" />
      <RowWithArrow title="Privacy Policy" />
      <RowWithArrow title="Deactivate Account" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
});
