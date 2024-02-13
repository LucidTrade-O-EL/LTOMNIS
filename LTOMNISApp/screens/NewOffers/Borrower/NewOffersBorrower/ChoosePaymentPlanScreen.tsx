import {View, Text, SafeAreaView} from 'react-native';
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
  offerId: string; // Adjust the type according to your needs
  // Include other route parameters here if needed
};

type ChoosePaymentPlanScreenProps = {
  route: RouteProp<HomeStackParamList, 'ChoosePaymentPlanScreen'>;
};

const ChoosePaymentPlanScreen: React.FC<ChoosePaymentPlanScreenProps> = ({
  route,
}) => {
  const {offerId} = route.params;
  const [selectedPlan, setSelectedPlan] =
    useState<OfferBigContainerProps | null>(null);
  const token = useSelector((state: AppState) => state.token);

  const sendPaymentPlanData = async planDetails => {
    const url = 'http://localhost:8080/api/omnis/paymentplan/create'; // Replace with your backend URL
// ppm stands for price per month
    try {
      const response = await axios.post(
        url,
        {
          offerId: planDetails.offerId,
          ppm: 123,
          months: 3,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('/omnis/paymentplan/create', JSON.stringify(response.data));

      return response.data;
    } catch (error) {
      throw error;
    }
  };

  // Function to handle plan selection
  const handlePlanSelect = (planDetails: OfferBigContainerProps) => {
    setSelectedPlan(planDetails);
  };

  const paymentPlans = ['3', '6 ', '12'];
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
              offerNumber={52}
              raiseNumber={300}
              fullNumber={500}
              apr={50}
              payStartDate={'March'}
              rewardPoints={51}
              monthlyCost={50}
              onSelect={() => handlePlanSelect(plan)}
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
          if (selectedPlan) {
            sendPaymentPlanData(selectedPlan)
              .then(response => {
                console.log('Data sent successfully:', response);
                navigation.navigate('PaymentChosenScreen');
              })
              .catch(error => {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.error('Response data:', error.response.data);
                  console.error('Response status:', error.response.status);
                  console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  console.error('Request made, no response:', error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.error('Error message:', error.message);
                }
                console.error('Config:', error.config);
              });
          } else {
            // Handle the case where no plan is selected
            console.error('No plan selected');
            // Possibly show an error message to the user
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
