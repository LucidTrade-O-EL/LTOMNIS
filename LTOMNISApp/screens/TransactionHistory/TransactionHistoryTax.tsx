import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import GlobalStyles from '../../assets/constants/colors';
import CompleteButton from '../../assets/constants/Components/Buttons/CompleteButton';
import ListItemWithRadial, { ListItemProps } from '../../assets/constants/Components/ListItemWithRadial';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import { AppState } from '../../ReduxStore';
import { hideTabBar, showTabBar } from '../../tabBarSlice';
// import { hideTabBar, showTabBar } from '../../appReducer';


const TransactionHistoryTax: React.FC = () => {
  const token = useSelector((state: AppState) => state.token);
  const [transactionHistory, setTransactionHistory] = useState(0);


  const formatCurrency = (value: string) => {
    const sign = ['+', '-'].includes(value[0]) ? value[0] : '';
    const amountValue = value.replace('$', '').trim(); // remove dollar sign if it exists
    const numericalValue = sign ? amountValue.slice(1) : amountValue;
    const amount = parseFloat(numericalValue);

    if (isNaN(amount)) {
      console.error(`Invalid currency value: ${value}`);
      return value;
    }

    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);

    return `${sign}${formattedAmount}`;
  };

  // Data array
  const data: ListItemProps[] = [
    {
      radialType: 'radio',
      iconName: 'coffee',
      topTextLeft: 'Transfer to Zak Veasy',
      topTextRight: '-$171.23',
      bottomTextLeft: 'Pending',
      bottomTextRight: '06.23.2024 14:00',
    },
    {
      radialType: 'radio',
      topTextLeft: 'Transfer to Zak Veasy',
      topTextRight: '+$100.00',
      bottomTextLeft: 'Completed',
      bottomTextRight: '05.20.2024 11:15',
    },
    {
      radialType: 'radio',
      imagePath: 'path_to_some_image',
      topTextLeft: 'Transfer to Zak Veasy',
      topTextRight: '+$58.75',
      bottomTextLeft: 'Failed',
      bottomTextRight: '04.29.2024 09:45',
    },
    {
      radialType: 'radio',
      iconName: 'shopping-cart',
      topTextLeft: 'Transfer to Zak Veasy',
      topTextRight: '-$89.50',
      bottomTextLeft: 'Pending',
      bottomTextRight: '06.15.2024 16:30',
    },
    {
      radialType: 'radio',
      iconName: 'dollar-sign',
      topTextLeft: 'Transfer to Zak Veasy',
      topTextRight: '+$2000',
      bottomTextLeft: 'Completed',
      bottomTextRight: '06.01.2024 12:00',
    },
  ];

  // Process the data using the function
  const processedData = data.map(item => ({
    ...item,
    topTextRight: formatCurrency(item.topTextRight),
  }));

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/omnis/transactions/mytransactions`,
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );

        const transactionHistoryData = response.data;
        setTransactionHistory(transactionHistoryData.myTransactions);
        console.log('transactionHistoryData: ', transactionHistoryData.myTransactions);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        title="Offer Transaction History"
        showBackArrow={true}
        onBackPress={() => {
          // Handle the back button press, e.g., navigate back
        }}
      />
      <View style={styles.contentContainer}>
        <View style={styles.container}>
          <FlatList
            data={processedData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ListItemWithRadial {...item} />}
          />
        </View>
      </View>
      <CompleteButton
        text="Download Summary"
        color={GlobalStyles.Colors.primary200}
        onPress={() => console.log('Button pressed!')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.Colors.primary800,
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: GlobalStyles.Colors.primary100,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
  },
  container: {
    width: '100%',
    marginTop: 30,
    alignSelf: 'center',
  },
});

export default TransactionHistoryTax;
