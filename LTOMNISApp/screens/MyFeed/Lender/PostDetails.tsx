import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import GlobalStyles from '../../../assets/constants/colors';
import ScreenTitle from '../../../assets/constants/Components/ScreenTitle';
import CustomOfferBlock from '../../../assets/constants/Components/CustomOfferBlock';
import {ParticipantDetails} from '../Lender/ParticipantDetails';
import CompleteButton from '../../../assets/constants/Components/Buttons/CompleteButton';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import {AmountBox} from './AmountBox';

export default function PostDetails() {
  return (
    <SafeAreaView style={styles.background}>
      <ScreenTitle
        title="Offer Details"
        showBackArrow={true}
        onBackPress={() => {}}
      />
      <AmountBox title="Loan Amount" amount={500} />
      <AmountBox title="Interest Rate" amount="5" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.primary800,
  },
  subtext: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 20,
    color: GlobalStyles.Colors.primary100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 5,
    color: GlobalStyles.Colors.primary100,
  },
});
