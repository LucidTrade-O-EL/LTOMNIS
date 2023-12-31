import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import ScreenTitle from '../../../../assets/constants/Components/ScreenTitle';
import {StyleSheet} from 'react-native';
import GlobalStyles from '../../../../assets/constants/colors';
import CompleteButton from '../../../../assets/constants/Components/Buttons/CompleteButton';
import PaymentPlanBox from '../../../../assets/constants/Components/PaymentPlanBox';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../../App';

export default function ChoosePaymentPlanScreen() {
  const paymentPlans = ['3 months', '6 months', '12 months'];
  const navigation =
  useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.Background}>
      <View style={styles.contentContainer}>
        <ScreenTitle
          title="Choose Payment Plan"
          showBackArrow={true}
          onBackPress={() => {
            // Handle the back button press, e.g., navigate back
          }}
        />
        <View
          style={{
            backgroundColor: GlobalStyles.Colors.primary100,
            borderRadius: 24,
            flex: 1,
          }}>
          {paymentPlans.map((plan, index) => (
            <PaymentPlanBox
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
        </View>
      </View>
      <CompleteButton
        onPress={() => {
          navigation.navigate('PaymentChosenScreen');
        }}
        text="Complete"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.Colors.primary800,
    paddingTop: 60,
  },
  contentContainer: {
    width: '100%',
    flex: 1,
  },
});
