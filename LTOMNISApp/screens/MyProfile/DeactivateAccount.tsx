import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import GlobalStyles from '../../assets/constants/colors';
import {Image} from 'react-native';
import IconWithText from './IconWithText';

export default function DeactivateAccount() {
  const [userData, setUserData] = React.useState({
    omnisPoints: 2354,
    omnisScore: '',
    lendAmount: 34.23,
    lendUsers: 12,
    earnedAmount: 214.23,
    borrowedAmount: 11111,
  });

  function formatNumber(num) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  }

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle showBackArrow={true} title={'Deactivate Your Account'} />
      <View
        style={{
          height: 410,
          width: '90%',
          borderRadius: 16,
          backgroundColor: GlobalStyles.Colors.primary100,
          marginTop: 30,
        }}>
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            height: '50%',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: GlobalStyles.Colors.primary510,
            }}>
            Sad to see you go
          </Text>
          <Image source={require('./SettingPics/Unhappy.png')} />
        </View>
        <View style={{padding: 20}}>
          <Text
            style={{
              color: GlobalStyles.Colors.primary800,
              fontSize: 16,
              fontWeight: '700',
              marginBottom: 10,
            }}>
            With OMNIS Community
          </Text>
          <View style={{height: '55%', justifyContent: 'space-evenly'}}>
            <IconWithText
              iconType="Ionicons"
              iconName="cash-outline"
              text={`You Earned ${formatNumber(
                userData.omnisPoints,
              )} OMNIS Points and achieved ${userData.omnisScore}`}
            />
            <IconWithText
              iconType="MaterialCommunity"
              iconName="star-four-points-outline"
              text={`You successfully lent out $${formatNumber(
                userData.lendAmount,
              )} to ${userData.lendUsers} users and earned $${formatNumber(
                userData.earnedAmount,
              )}`}
            />
            <IconWithText
              iconType="MaterialCommunity"
              iconName="account-cash-outline"
              text={`You successfully borrowed $${formatNumber(
                userData.borrowedAmount,
              )}`}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

// account-cash-outline
// star-four-points-outline

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
});
