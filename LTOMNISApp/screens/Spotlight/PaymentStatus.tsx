import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import GlobalStyles from '../../assets/constants/colors';
import {StyleSheet} from 'react-native';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import {SafeAreaView} from 'react-native';
import CompleteButton from '../../assets/constants/Components/Buttons/CompleteButton';
import CustomOfferBlockWithProfile from '../../assets/constants/Components/CustomOfferBlockWithProfile';
import activeDataCards from '../../assets/constants/Components/activeDataCards';
import CustomPaymentBlock from '../../assets/constants/Components/CustomPaymentBlock';
import {
  dummyUserData,
  dummyUserData2,
} from '../../assets/constants/Data/dummydata';

export default function PaymentStatus() {
  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        title="Group details"
        showBackArrow={true}
        onBackPress={() => {
          // Handle the back button press, e.g., navigate back
        }}
        showRightIcon={true}
        rightIconType="MaterialCommunityIcons" // Either 'Ionicons' or 'Feather'
        rightIconName="bell-plus-outline" // replace with actual Feather icon name
        onRightIconPress={() => {}}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <CustomPaymentBlock data={dummyUserData.payments} {...dummyUserData} />
        <CustomPaymentBlock
          data={dummyUserData2.payments}
          {...dummyUserData2}
        />
        {/* Add more CustomPaymentBlock components with different dummy data as needed */}
      </ScrollView>
      <CompleteButton
        text="Make a payment"
        color={GlobalStyles.Colors.primary200}
        onPress={() => console.log('Button pressed!')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.primary800,
  },
  scrollViewContent: {
    alignItems: 'center', // Apply alignItems here
  },
});
