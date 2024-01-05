import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import ScreenTitle from '../../../../assets/constants/Components/ScreenTitle';
import CustomOfferBlock from '../../../../assets/constants/Components/CustomOfferBlock';
import ProgressWithLabel from '../../../../assets/constants/Components/ProgressWithLabel';
import GlobalStyles from '../../../../assets/constants/colors';
import PaymentPlanBoxChangePlan from '../../../../assets/constants/Components/PaymentPlanBoxChangePlan';
import AcceptAndDecline from '../../../../assets/constants/Components/Buttons/AcceptAndDecline';
import BottomSheetModal from '../../../../assets/constants/Components/BottomSheetModal';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../../../../App';

type NewOfferDetailsProps = {
  initialRaiseNumber?: number;
  initialFullNumber?: number;
};

export default function PaymentChosenScreen({
  initialRaiseNumber = 40,
  initialFullNumber = 100,
}: NewOfferDetailsProps) {
  const [raiseNumber, setRaiseNumber] = React.useState(initialRaiseNumber);
  const [fullNumber, setFullNumber] = React.useState(initialFullNumber);

  const paymentPlans = ['5 months'];
  const [isModalVisible, setModalVisible] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [interestRate, setInterestRate] = React.useState<string>('Gift'); // set default as '3%'

  const AcceptAndDeclineStyles = StyleSheet.create({
    acceptButtonActive: {},
    acceptButtonInactive: {
      // Define your styles for the inactive accept button here
    },
    // You can add more styles as needed
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const handleAccept = () => {
    setModalVisible(true);
  };

  const handleDecline = () => {
    navigation.goBack();
  };

  const handleAcceptModal = () => {
    setModalVisible(false);
    navigation.navigate('SuccessOffer'); // Adjust as needed
  };

  const handleDeclineModal = () => {
    setModalVisible(false);
  };

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
      {interestRate !== 'Gift' ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: '90%',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: GlobalStyles.Colors.primary100,
                fontSize: 18,
                fontWeight: '700',
              }}>
              Choose Payment plan
            </Text>
          </View>
          {paymentPlans.map((plan, index) => (
            <PaymentPlanBoxChangePlan
              key={index}
              title={plan}
              offerNumber={52}
              raiseNumber={300}
              fullNumber={500}
              users={[
                {
                  firstNameLetter: 'Z',
                  lastNameLetter: 'K',
                  userName: 'Zak',
                  amount: 250,
                  interest: 5,
                },
              ]}
            />
          ))}
        </>
      ) : (
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <CheckBox
            value={isChecked}
            onValueChange={setChecked}
            onCheckColor={GlobalStyles.Colors.primary200}
            onTintColor={GlobalStyles.Colors.primary200}
          />
          <Text
            style={{
              marginLeft: 10,
              width: '80%',
              color: GlobalStyles.Colors.primary100,
            }}>
            I understand that Gifts may be subject to tax in my country.
          </Text>
        </View>
      )}
      <View style={styles.acceptDeclineContainer}>
        <AcceptAndDecline
          onAccept={handleAccept}
          onDecline={handleDecline}
          acceptButtonStyle={
            interestRate === 'Gift' && isChecked
              ? AcceptAndDeclineStyles.acceptButtonActive
              : AcceptAndDeclineStyles.acceptButtonInactive
          }
        />
      </View>
      <BottomSheetModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onAccept={() => {
          handleAcceptModal();
        }}
        onDecline={() => {
          handleDeclineModal();
        }}
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
  acceptDeclineContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingBottom: 50, // Adding padding to push the component up a bit
  },
});
