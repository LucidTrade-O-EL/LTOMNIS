import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import ProgressWithLabel from '../../assets/constants/Components/ProgressWithLabel';
import CustomOfferBlock from '../../assets/constants/Components/CustomOfferBlock';
import GlobalStyles from '../../assets/constants/colors';
import CompleteButton from '../../assets/constants/Components/Buttons/CompleteButton';

type NewOfferDetailsProps = {
  initialRaiseNumber?: number;
  initialFullNumber?: number;
};

export default function NewOfferDetails({
  initialRaiseNumber = 40,
  initialFullNumber = 100,
}: NewOfferDetailsProps) {
  const [raiseNumber, setRaiseNumber] = React.useState(initialRaiseNumber);
  const [fullNumber, setFullNumber] = React.useState(initialFullNumber);

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        title="New Offer Details"
        showBackArrow={true}
        onBackPress={() => {}}
        showRightIcon={true}
        rightIconType="Feather"
        rightIconName="filter"
        onRightIconPress={() => {}}
      />
      <CustomOfferBlock
        data={[
          {leftText: 'Sent from', rightText: 'Zak Veasy'},
          {leftText: 'Amount offered', rightText: '$15'},
          {leftText: 'Interest rate', rightText: '3%'},
          {isDivider: true},
          {leftText: 'Total', rightText: '$31.25'},
        ]}
      />
      <ProgressWithLabel collected={raiseNumber} goal={fullNumber} />
      <CompleteButton onPress={() => { console.log('Button pressed!'); }} text="Complete" />
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
