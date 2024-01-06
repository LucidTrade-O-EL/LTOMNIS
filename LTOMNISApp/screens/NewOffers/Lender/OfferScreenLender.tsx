import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import ScreenTitle from '../../../assets/constants/Components/ScreenTitle';
import GlobalStyles from '../../../assets/constants/colors';
import OfferScreenTopTabsLender from '../../../assets/constants/Components/OfferScreenTopTabsLender';
import {useDispatch, useSelector} from 'react-redux';
import {hideTabBar, showTabBar} from '../../../tabBarSlice';
import { AppState } from '../../../ReduxStore';

const OfferScreenLender = () => {
  const dispatch = useDispatch();
  const TabV = useSelector((state: AppState) => JSON.stringify(state.tabBar.isVisible))
  console.log(`${TabV} outside of useEffect`)

  useEffect(() => {
    dispatch(hideTabBar());
    console.log('this is running in OfferScreenLender');
    console.log(`${TabV} inside useEffect`)
    // If you need to show the tab bar again when the component unmounts,
    // return a cleanup function:
    return () => {
      dispatch(showTabBar());
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        title="Lender"
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
        <OfferScreenTopTabsLender />
      </View>
    </SafeAreaView>
  );
};

// navigation={navigation}
//

export default OfferScreenLender;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 40,
  },
});
