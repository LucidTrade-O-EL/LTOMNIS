import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import ScreenTitle from '../../../assets/constants/Components/ScreenTitle';
import SuccessOffer from '../SuccessOffer';
import GlobalStyles from '../../../assets/constants/colors';
import ProgressWithLabel from '../../../assets/constants/Components/ProgressWithLabel';
import TransactionHistory from '../../../assets/constants/Components/CustomTransactionButton';
import CompleteButton from '../../../assets/constants/Components/Buttons/CompleteButton';
import SmallOfferDetailsVTwo from '../../../assets/constants/Components/SmallOfferDetailsVTwo';

type NewOfferDetailsProps = {
  initialRaiseNumber?: number;
  initialFullNumber?: number;
};

export default function ActiveOfferMakePayment({
  initialRaiseNumber = 40,
  initialFullNumber = 100,
}: NewOfferDetailsProps) {
  const [raiseNumber, setRaiseNumber] = React.useState(initialRaiseNumber);
  const [fullNumber, setFullNumber] = React.useState(initialFullNumber);

  function handleTransaction() {
    // Whatever you want to happen when the button is pressed
    console.log('Transaction History Button Pressed');
    // Or navigate to a transaction history screen, etc.
  }

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        title="Offer Details"
        showBackArrow={true}
        onBackPress={() => {
          // Handle the back button press, e.g., navigate back
        }}
      />
      <View style={{marginTop: 50}}>
        <Text style={{color: GlobalStyles.Colors.primary100, fontSize: 48}}>
          $12.20
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'rgba(256, 256, 256, 0.5)',
            fontSize: 16,
          }}>
          Entered Amount
        </Text>
      </View>
      <View style={{marginTop: 40, flexDirection: 'row'}}>
        <ProgressWithLabel
          collected={100}
          goal={500}
          collectedLabel="Payed"
          goalLabel="Full payback needed"
        />
      </View>
      <TransactionHistory
        buttonText="View Offer Transaction History"
        onPress={handleTransaction}
      />
      <SmallOfferDetailsVTwo
        title="Offer Details"
        rightWords={[
          '01/02/2023',
          '06:00 PM',
          'John Doe',
          '4%',
          '$32',
          '$6',
          '5%APR, 6 months',
        ]}
      />
      <CompleteButton
        onPress={() => {
          console.log('Button pressed!');
        }}
        text="Make Payment"
      />
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
