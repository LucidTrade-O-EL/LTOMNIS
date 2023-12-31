import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { HomeStackParamList } from '../../../../App';
import GlobalStyles from '../../../../assets/constants/colors';
import CompleteButton from '../../../../assets/constants/Components/Buttons/CompleteButton';
import CustomOfferBlock from '../../../../assets/constants/Components/CustomOfferBlock';
import ProgressWithLabel from '../../../../assets/constants/Components/ProgressWithLabel';
import ScreenTitle from '../../../../assets/constants/Components/ScreenTitle';


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
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        title="New Offer Details"
        showBackArrow={true}
        onBackPress={() => {}}
        showRightIcon={true}
      />
      <CustomOfferBlock
        data={[
          {leftText: 'Sent from', rightText: 'Zak Veasy'},
          {leftText: 'Amount offered', rightText: '$15'},
          {leftText: 'Interest rate', rightText: '3%'},
          {isDivider: true},
          {leftText: 'Total', rightText: '$15.45'},
        ]}
      />
      <ProgressWithLabel collected={raiseNumber} goal={fullNumber} />
      <CompleteButton
        onPress={() => {
         navigation.navigate('ChoosePaymentPlanScreen')
        }}
        text="Complete"
      />
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
