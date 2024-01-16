import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Divider} from 'react-native-elements';
import IonIcon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../assets/constants/colors';
import GlobalFonts from '../assets/constants/fonts';
import TransactionHistory from '../assets/constants/Components/CustomTransactionButton';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {HomeStackParamList} from '../App'
import { useDispatch, useSelector } from 'react-redux';
import { hideTabBar, showTabBar } from '../tabBarSlice';
import { AppState } from '../ReduxStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { hideTabBar, showTabBar } from '../appReducer';


export default function HomeScreen({
}: {
}) {

  const [userName, setUserName] = useState('Zak Veasy');
  const [balance, setBalance] = useState('$124.56');
  const [OfferSent, setOfferSent] = useState(25);
  const [AcceptedOffers, setAcceptedOffers] = useState(6);
  const [OffersAccepted, setOffersAccepted] = useState(13);
  const [NewOffers, setNewOffers] = useState(5);
  const [notificationCount, setNotificationCount] = useState(3); // Example count

  const navigation = useNavigation<NativeStackNavigationProp<HomeStackParamList>>();

  const handleDeposit = () => {
    console.log('Deposit button pressed');
    navigation.navigate('DepositMoneyScreen');
  };

  const handleWithdraw = () => {
    console.log('Withdraw button pressed');
    navigation.navigate('WithdrawMoneyScreen');
  };

  const handleTransaction = () => {
    console.log('Transaction button pressed');
    navigation.navigate('TransactionHistoryTax', {
      transactionId: 'YOUR_TRANSACTION_ID',
    });
  };

  const handleLender = () => {
    console.log('Transaction button pressed');
    navigation.navigate('OfferScreenLender');
  };

  const handleNotifications = () => {
    console.log('NotificationScreen button pressed');
    navigation.navigate('NotificationScreen');
  };

  const handleProfileScreen = () => {
    console.log('MyProfile button pressed');
    navigation.navigate('MyProfile');
  };

  const handleBorrower = () => {
    console.log('Transaction button pressed');
    navigation.navigate('OfferScreen');
  };

  const NotificationIcon = () => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable onPress={handleNotifications}>
          <IonIcon
            name="notifications-outline"
            size={24}
            color={GlobalStyles.Colors.primary100}
          />
        </Pressable>
        {notificationCount > 0 && (
          <View style={styles.notificationBubble}>
            <Text style={styles.notificationText}>
              {notificationCount}
            </Text>
          </View>
        )}
      </View>
    );
  };


  return (
    <SafeAreaView style={styles.Background}>
      {/* Profile Pic, Name, and Notifications */}
      <View style={styles.headerContainer}>
        <Pressable onPress={handleProfileScreen} style={{flexDirection: 'row'}}>
          <Avatar
            size={48}
            rounded
            source={{
              uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
            }}
          />
          <Text style={styles.NameHeaderText}>{userName}</Text>
        </Pressable>
        <Pressable onPress={handleNotifications}>
        {/* <IonIcon
          name="notifications-outline"
          size={24}
          style={{alignSelf: 'center'}}
          color={GlobalStyles.Colors.primary100}
        /> */}
        <NotificationIcon />
        </Pressable>
      </View>

      {/* Balance */}

      <View>
        <Text style={styles.LoanTitle}>Credit</Text>
      </View>
      <View>
        <Text style={styles.LoanNumber}>{balance}</Text>
      </View>

      {/* Deposit & Withdraw */}

      <View style={styles.headerContainer}>
        <Pressable
          onPress={handleDeposit}
          style={styles.DepositWithdrawContainer}>
          <IonIcon
            name="add"
            size={24}
            style={{alignSelf: 'center'}}
            color={GlobalStyles.Colors.primary100}
          />
          <Text style={styles.DepositWithdrawText}>Deposit</Text>
        </Pressable>
        <Pressable
          onPress={handleWithdraw}
          style={styles.DepositWithdrawContainer}>
          <IonIcon
            name="download-outline"
            size={24}
            style={{alignSelf: 'center'}}
            color={GlobalStyles.Colors.primary100}
          />
          <Text style={styles.DepositWithdrawText}>Withdraw</Text>
        </Pressable>
      </View>

      {/* Transaction History */}
      <TransactionHistory
        buttonText="View Transaction History"
        onPress={handleTransaction}
      />

      {/* Outline for ROLES */}

      <View
        style={{
          backgroundColor: GlobalStyles.Colors.primary100,
          width: '100%',
          flex: 1,
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
        }}>
        <View style={styles.MyRoleContainer}>
          <Text style={styles.MyRoleText}>My Roles</Text>
        </View>

        {/* Lender */}

        <View style={styles.RoleContainer}>
          <View style={styles.RoleLabelContainer}>
            <Text style={styles.LenderBorrowerText}>Lender</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.TextInRoles}>Offer Sent</Text>
              <Divider orientation="vertical" width={1} />
              <Text style={styles.NumberInRoles}>{OfferSent}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.TextInRoles}>Accepted Offers</Text>
              <Divider orientation="vertical" width={1} />
              <Text style={styles.NumberInRoles}>{AcceptedOffers}</Text>
            </View>
          </View>
          <View style={styles.RoleButtonContainer}>
            <Pressable
              onPress={handleLender}
              style={{
                width: '40%',
                height: 40,
                backgroundColor: GlobalStyles.Colors.primary200,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                marginBottom: 20,
                marginLeft: 60,
              }}>
              <Text style={styles.ViewButton}>View</Text>
            </Pressable>
          </View>
        </View>

        {/* Borrower */}

        <View style={styles.BorrowerRoleContainer}>
          <View style={styles.RoleLabelContainer}>
            <Text style={styles.LenderBorrowerText}>Borrower</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.TextInRoles}>Offers Accepted</Text>
              <Divider orientation="vertical" width={1} />
              <Text style={styles.NumberInRoles}>{OffersAccepted}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.TextInRoles}>New Offers</Text>
              <Divider orientation="vertical" width={1} />
              <Text style={styles.NumberInRoles}>{NewOffers}</Text>
            </View>
          </View>
          <View style={styles.RoleButtonContainer}>
            <Pressable
              onPress={handleBorrower}
              style={{
                width: '40%',
                height: 40,
                backgroundColor: GlobalStyles.Colors.primary200,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 8,
                marginBottom: 20,
                marginLeft: 60,
              }}>
              <Text style={styles.ViewButton}>View</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 40,
  },
  headerContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  NameHeaderText: {
    color: GlobalStyles.Colors.primary100,
    fontSize: 18,
    marginBottom: 4,
    alignSelf: 'center',
    marginLeft: 10,
  },
  subheaderText: {
    color: 'white',
    opacity: 0.6,
    fontSize: 13,
  },
  LoanTitle: {
    color: GlobalStyles.Colors.accent110,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginBottom: 8,
  },
  LoanNumber: {
    color: GlobalStyles.Colors.primary100,
    fontSize: 64,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',
    marginBottom: 8,
  },
  emailButton: {
    width: '90%',
    height: 50,
    borderColor: 'rgba(255,255,255, 0.6)',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  //   Reset Password styling
  SignButton: {
    width: '90%',
    height: 56,
    backgroundColor: '#BDAE8D',
    justifyContent: 'center',
    borderRadius: 16,
    marginBottom: 40,
  },
  SignButtonOutlined: {
    borderWidth: 2,
  },
  SignButtonText: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
  },

  // Additional TextInput Styling
  textInput: {
    color: 'rgba(255,255,255, 0.6)', // default color when there is no input
    fontSize: 16,
    paddingLeft: 10,
  },
  textActive: {
    color: 'white', // color when there is input
  },

  //   Deposit & Withdraw Styling
  DepositWithdrawContainer: {
    flexDirection: 'row',
    height: 56,
    alignSelf: 'center',
    backgroundColor: GlobalStyles.Colors.primary200,
    width: '45%',
    justifyContent: 'center',
    borderRadius: 16,
  },

  DepositWithdrawText: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 16,
    color: GlobalStyles.Colors.primary100,
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    fontWeight: 'bold',
  },

  //   Transaction History

  TransactionHistoryContainer: {
    marginVertical: 16,
    marginBottom: 22,
    height: 44,
    flexDirection: 'row',
    width: '90%',
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: GlobalStyles.Colors.accent115,
  },
  TransactionHistoryText: {
    alignSelf: 'center',
    fontSize: 16,
    marginLeft: 10,
    color: GlobalStyles.Colors.primary200,
  },

  //   ROLES

  MyRoleContainer: {
    marginTop: 20,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  MyRoleText: {
    fontSize: 24,
  },

  // Role Container

  RoleContainer: {
    height: 108,
    width: '90%',
    borderRadius: 20,
    backgroundColor: GlobalStyles.Colors.primary120,
    marginVertical: 16,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  RoleLabelContainer: {
    flexDirection: 'column',
    // backgroundColor: 'green',
    width: '50%',
    height: '100%',
  },
  RoleButtonContainer: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },

  //

  TextInRoles: {
    fontSize: 14,
    marginLeft: 16,
    marginRight: 8,
    marginBottom: 6,
    color: GlobalStyles.Colors.accent300,
    textAlign: 'center',
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    fontWeight: '500',
  },

  // Numbers inside Roles

  NumberInRoles: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 6,
    color: GlobalStyles.Colors.accent300,
    textAlign: 'center',
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    fontWeight: '500',
  },

  // View Button

  ViewButton: {
    color: GlobalStyles.Colors.primary100,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    fontWeight: 'bold',
  },

  //   Borrower

  BorrowerRoleContainer: {
    height: 108,
    width: '90%',
    borderRadius: 20,
    backgroundColor: GlobalStyles.Colors.primary120,
    marginVertical: 8,
    alignSelf: 'center',
    flexDirection: 'row',
  },

  LenderBorrowerText: {
    fontSize: 20,
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 6,
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    fontWeight: '500',
  },

  notificationBubble: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    fontSize: 10,
  },
});
