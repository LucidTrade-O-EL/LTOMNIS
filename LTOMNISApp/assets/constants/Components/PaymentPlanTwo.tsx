import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Divider} from 'react-native-elements';
import {t} from 'i18next';
import GlobalStyles from '../colors';
import StarCircle from './Buttons/StarCircle';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {AppState} from '../../../ReduxStore';

type OfferBigContainerProps = {
  title: string;
  offerNumber: number;
  raiseNumber: number;
  fullNumber: number;
  offerId: string;
  onSelect: any;
  payStartDate: string; // Payment start date
  rewardPoints: number; // Reward points
  monthlyCost: number; // Monthly cost
  users: {
    firstNameLetter: string;
    lastNameLetter: string;
    userName: string;
    amount: number;
    interest: number;
  }[];
};

const PaymentPlanBoxTwo: React.FC<OfferBigContainerProps> = ({
  title,
  offerId,
  fullNumber,
  payStartDate,
  rewardPoints,
  monthlyCost,
  users = [],
  onSelect,
}) => {
  const [isChosen, setIsChosen] = useState(false);

  const getRewardPointsBasedOnMonths = (months: number) => {
    switch (months) {
      case 3:
        return 250;
      case 6:
        return 500;
      case 12:
        return 800;
      default:
        return 100;
    }
  };

  function addDaysToDate(daysToAdd: number): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + daysToAdd);
    return `${currentDate.getDate()}.${
      currentDate.getMonth() + 1
    }.${currentDate.getFullYear()}`;
  }

  const calculateMonthlyPayment = (fullAmount: number, months: number) => {
    if (!fullAmount || !months || isNaN(fullAmount) || isNaN(months)) {
      return '8.57'; // default value or handle appropriately
    }
    return (fullAmount / months).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainerTitle}>
        <Text style={styles.TitleOfferLeftText}>
          {} months
        </Text>
        <View style={styles.rewardPointsContainer}>
          <StarCircle iconName="star-four-points-outline" />
          <Text style={styles.TitleOfferRightText}>
            {getRewardPointsBasedOnMonths(Number(title.split(' ')[0]))}
          </Text>
        </View>
      </View>

      {users.map((user, index) => (
        <View key={index} style={styles.userContainer}>
          <Text style={styles.TextInRoles}>
            ARP
          </Text>
          <Divider orientation="vertical" width={1} />
          <Text style={styles.NumberInRoles}>
            30.03.2024
          </Text>
        </View>
      ))}
      <Divider
        width={1}
        style={styles.divider}
        color={GlobalStyles.Colors.accent250}
      />
      <View style={styles.innerContainerBar}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.monthlyAmount}>
            ${calculateMonthlyPayment(fullNumber, Number(title.split(' ')[0]))}
          </Text>
          <Text style={styles.perMonth}>{t('perMonth')}</Text>
        </View>
        <Pressable
          onPress={() => {
            setIsChosen(!isChosen);
            onSelect({
              title,
              offerId,
              payStartDate,
              rewardPoints,
              monthlyCost,
            });
          }}>
          <Text
            style={[
              styles.ViewButton,
              isChosen && styles.selectedButtonTextStyle,
            ]}>
            {isChosen ? t('Chosen') : t('Choose')}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    backgroundColor: GlobalStyles.Colors.primary120,
    borderRadius: 20,
    marginTop: 16,
    paddingBottom: 20,
    alignSelf: 'center',
  },
  innerContainerTitle: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 16,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainerBar: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 16,
  },
  TitleOfferRightText: {
    fontSize: 16,
    fontFamily: 'San Francisco',
    fontWeight: '500',
    color: GlobalStyles.Colors.primary510,
  },
  TitleOfferLeftText: {
    fontSize: 18,
    fontFamily: 'San Francisco',
    fontWeight: '500',
    color: GlobalStyles.Colors.primary200,
  },
  NumberInRoles: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 6,
    color: GlobalStyles.Colors.accent300,
    textAlign: 'center',
    fontFamily: 'San Francisco',
    fontWeight: '500',
  },
  TextInRoles: {
    fontSize: 14,
    marginLeft: 18,
    marginRight: 8,
    marginBottom: 6,
    color: GlobalStyles.Colors.accent300,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: 'San Francisco',
  },
  amount: {
    color: GlobalStyles.Colors.primary500,
    fontFamily: 'San Francisco',
    fontSize: 22,
    fontWeight: '500',
  },
  perMonth: {
    color: GlobalStyles.Colors.accent300,
    fontFamily: 'San Francisco',
    fontSize: 14,
    fontWeight: '500',
  },
  ViewButton: {
    color: GlobalStyles.Colors.primary200,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'San Francisco',
    fontWeight: 'bold',
  },
  ViewButtonContainer: {
    width: '40%',
    height: 40,
    borderColor: GlobalStyles.Colors.primary200,
    borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  rewardPointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
    justifyContent: 'space-between',
  },
  monthlyAmount: {
    color: GlobalStyles.Colors.primary500,
    fontFamily: 'San Francisco',
    fontSize: 22,
    fontWeight: '500',
  },
  selectedButtonStyle: {
    backgroundColor: GlobalStyles.Colors.primary200,
    borderRadius: 20,
  },
  selectedButtonTextStyle: {
    color: GlobalStyles.Colors.primary100,
    borderRadius: 20,
    backgroundColor: GlobalStyles.Colors.primary200,
    padding: 5
  },
});

export default PaymentPlanBoxTwo;
