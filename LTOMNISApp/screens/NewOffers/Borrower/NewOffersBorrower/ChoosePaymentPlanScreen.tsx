import {View, Text, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import ScreenTitle from '../../../../assets/constants/Components/ScreenTitle';
import {StyleSheet} from 'react-native';
import GlobalStyles from '../../../../assets/constants/colors';
import CompleteButton from '../../../../assets/constants/Components/Buttons/CompleteButton';
import PaymentPlanBox from '../../../../assets/constants/Components/PaymentPlanBox';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {t} from 'i18next';
import {HomeStackParamList} from '../../../../App';
import {useSelector} from 'react-redux';
import {AppState} from '../../../../ReduxStore';
import axios from 'axios';
import {OfferBigContainerProps} from '../../../../assets/constants/Components/OfferBigContainer';

type ChoosePaymentPlanRouteProps = {
  offerId: string;
};

type ChoosePaymentPlanScreenProps = {
  route: RouteProp<HomeStackParamList, 'ChoosePaymentPlanScreen'>;
};

interface SelectedPlanDetails {
  title: string;
  offerId: string;
  fullNumber: number;
  startPayDate: string; // Assuming startPayDate is a string
  monthDuration?: number;
  monthlyPayment?: number;
  users: {
    firstNameLetter: string;
    lastNameLetter: string;
    userName: string;
    amount: number;
    interest: number;
  }[];
}

const ChoosePaymentPlanScreen: React.FC<ChoosePaymentPlanScreenProps> = ({
  route,
}) => {
  const {offerId, interestPercentage, totalAmount} = route.params;
  const [isSubmitting, setIsSubmitting] = useState(false);

  console.log('totalWithInterest');

  console.log('offerId', offerId);
  const [selectedPlan, setSelectedPlan] =
    useState<OfferBigContainerProps | null>(null);
  const token = useSelector((state: AppState) => state.token);

  const sendPaymentPlanData = async (planDetails: OfferBigContainerProps) => {
    const url = 'http://localhost:8080/api/omnis/paymentplan/create'; // Replace with your backend URL
    try {
      const response = await axios.post(
        url,
        {
          offerId: offerId,
          ppm: interestPercentage,
          months: 4,
          // months: planDetails.title,
          totalAmount: totalAmount,
          user: planDetails.users, // Include startPayDate in the payload
          startPayDate: planDetails.startPayDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log('planDetails.monthDuration', planDetails.monthDuration);
      console.log(
        '/omnis/paymentplan/create Success',
        JSON.stringify(response.data),
      );

      return response.data;
    } catch (error) {
      console.log('error**', error);
      throw error;
    }
  };

  const handlePlanSelect = (selectedPlanDetails: SelectedPlanDetails) => {
    // If the same plan is selected again, deselect it
    if (selectedPlan && selectedPlan.offerId === selectedPlanDetails.offerId) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan(selectedPlanDetails);
    }
  };

  const paymentPlans = ['3', '6', '12'];
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  return (
    <View style={styles.Background}>
      <View style={styles.contentContainer}>
        <ScreenTitle
          title={t('choosePaymentPlan')}
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
              offerId={offerId}
              fullNumber={totalAmount}
              isSelected={selectedPlan?.offerId === offerId}
              onSelect={(selectedPlanDetails: SelectedPlanDetails) => {
                // console.log('Received plan details:', selectedPlanDetails);
                // handlePlanSelect({
                //   title: plan,
                //   offerId: offerId,
                //   fullNumber: totalAmount,
                //   startPayDate: selectedPlanDetails.startPayDate,
                //   users: [
                //     {
                //       firstNameLetter: 'Z',
                //       lastNameLetter: 'K',
                //       userName: 'Zak',
                //       interest: interestPercentage,
                //       amount: totalAmount,
                //     },
                //   ],
                // });
                handlePlanSelect(selectedPlanDetails);
              }}
              users={[
                {
                  firstNameLetter: 'Z',
                  lastNameLetter: 'K',
                  userName: 'Zak',
                  interest: interestPercentage,
                  amount: totalAmount,
                },
              ]}
            />
          ))}
        </View>
      </View>
      <CompleteButton
        onPress={() => {
          console.log('Selected Plan on Complete:', selectedPlan);
          if (selectedPlan) {
            setIsSubmitting(true); // Start loading state
            sendPaymentPlanData(selectedPlan)
              .then(response => {
                // navigation.navigate('PaymentChosenScreen');
              })
              .catch(error => {
                Alert.alert(
                  'Failed to submit the plan. Please try again.',
                  error.message,
                );
              })
              .finally(() => {
                setIsSubmitting(false); // End loading state
                navigation.navigate('PaymentChosenScreen');
              });
          } else {
            // Handle the case where no plan is selected
            console.error('No plan selected');
            Alert.alert('Please select a plan before proceeding.'); // Added an alert for better user feedback
          }
        }}
        text={t('Complete')}
      />
    </View>
  );
};

export default ChoosePaymentPlanScreen;

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
