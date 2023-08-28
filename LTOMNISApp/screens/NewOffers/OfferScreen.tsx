import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import GlobalStyles from '../../assets/constants/colors';
import OfferScreenTopTabs from './OfferScreenTopTabs';

const OfferScreen = () => {
  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        title="Borrower"
        showBackArrow={true}
        onBackPress={() => {
          // Handle the back button press, e.g., navigate back
        }}
        showRightIcon={true}
        rightIconType="Feather" // Either 'Ionicons' or 'Feather'
        rightIconName="filter" // replace with actual Feather icon name
        onRightIconPress={() => {}}
      />
      <View
        style={{
          backgroundColor: GlobalStyles.Colors.primary100,
          height: '93%',
          width: '100%',
          borderRadius: 24,
        }}>
        <OfferScreenTopTabs />
      </View>
    </SafeAreaView>
  );
};

export default OfferScreen;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 40,
  },
});
