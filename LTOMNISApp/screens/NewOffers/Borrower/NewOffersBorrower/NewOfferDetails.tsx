import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {HomeStackParamList} from '../../../../App';
import GlobalStyles from '../../../../assets/constants/colors';
import CompleteButton from '../../../../assets/constants/Components/Buttons/CompleteButton';
import CustomOfferBlock from '../../../../assets/constants/Components/CustomOfferBlock';
import ProgressWithLabel from '../../../../assets/constants/Components/ProgressWithLabel';
import ScreenTitle from '../../../../assets/constants/Components/ScreenTitle';
import {t} from 'i18next';
import {RouteProp} from '@react-navigation/native';

type NewOfferDetailsProps = {
  route: RouteProp<HomeStackParamList, 'NewOfferDetails'>;
  initialRaiseNumber?: number;
  initialFullNumber?: number;
  interestPercentage: number | 'Gift';
};

const NewOfferDetails: React.FC<NewOfferDetailsProps> = ({route}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();
  const {
    offerId,
    firstName,
    lastName,
    totalAmount,
    interestPercentage,
    avatar,
    currentAmount,
    postTotalAmount,
  } = route.params;
  console.log('this is currentAmount', currentAmount);
  console.log('this is currentAmount', postTotalAmount);
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
          {
            leftText: t('sentFrom'),
            rightText: firstName + ' ' + lastName,
          },
          {leftText: t('amountOffered'), rightText: `$${totalAmount}`},
          {
            leftText: t('newOfferDetails-interestRate'),
            rightText: `${interestPercentage}%`,
          },
          {isDivider: true},
          {
            leftText: t('Total'),
            rightText: `$${totalAmount * (1 + interestPercentage / 100)}`,
          },
        ]}
      />
      <ProgressWithLabel
        collected={2}
        goal={currentAmount}
        // other props
      />

      <CompleteButton
        onPress={() => {
          navigation.navigate('ChoosePaymentPlanScreen');
        }}
        text={t('Complete')}
      />
    </SafeAreaView>
  );
};

export default NewOfferDetails;

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.Colors.primary800,
    paddingVertical: 40,
  },
});
