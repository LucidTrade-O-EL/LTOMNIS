import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Divider} from 'react-native-elements';
import GlobalStyles from '../colors';
import {StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../../App';

interface OfferDetailSectionProps {
  targetScreen: string;
  firstNameLetter: string;
  lastNameLetter: string;
  userName: string;
  amount: number;
  avatarImage: undefined;
  interest: number;
};

const OfferDetailSection: React.FC<OfferDetailSectionProps> = ({
    firstNameLetter = 'Z',
    lastNameLetter = 'V',
    avatarImage = null,
    userName = 'Easy 438',
    amount = 1000,
    interest = 25,
    targetScreen
  }) => {
    const title = `${firstNameLetter}${lastNameLetter}`;
  const navigation =
  useNavigation<NativeStackNavigationProp<HomeStackParamList>>();


  return (
    <View
      style={{
        backgroundColor: GlobalStyles.Colors.primary100,
        borderRadius: 20,
        height: 81,
        marginTop: 10,
      }}>
      {/* Profile and Username */}

      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          marginLeft: 16,
          alignItems: 'center',
        }}>
        {avatarImage ? (
          <Avatar size={22} rounded source={{uri: avatarImage}} />
        ) : (
          <Avatar
            size={22}
            rounded
            title={title}
            containerStyle={{backgroundColor: GlobalStyles.Colors.primary120}}
            titleStyle={{
              color: GlobalStyles.Colors.primary500,
              fontWeight: 'bold',
            }}
          />
        )}
        <Text style={{left: 8, fontFamily: 'San Francisco', fontSize: 14}}>
          {userName}
        </Text>
      </View>

      {/* Amount */}
      <View style={{flexDirection: 'row', marginTop: 6, alignItems: 'center'}}>
        <Text
          style={styles.NumberInRoles}>{`$${amount.toLocaleString()}`}</Text>
        <View
          style={{
            height: 15,
            width: 1,
            bottom: 3,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Divider orientation="vertical" width={1} />
        </View>
        <Text
          style={
            styles.TextInRoles
          }>{`${interest.toLocaleString()}% interest`}</Text>
      </View>
      <View style={styles.RoleButtonContainer}>
        <Pressable onPress={() => navigation.navigate('TransactionHistoryTax')}
          style={styles.ViewButtonContainer}>
          <Text style={styles.ViewButton}>Details</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInRoles: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 6,
    color: GlobalStyles.Colors.primary500,
    textAlign: 'center',
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    alignContent: 'center',
  },

  // Numbers inside Roles

  NumberInRoles: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 8,
    marginBottom: 6,
    color: GlobalStyles.Colors.primary500,
    textAlign: 'center',
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    fontWeight: '500',
  },

  // View Button Styles

  RoleButtonContainer: {
    position: 'absolute', // To allow absolute positioning within the parent View.
    top: 10, // 10 pixels from the top of the parent View (adjust as needed).
    right: 0, // 10 pixels from the right edge of the parent View (adjust as needed).
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },

  ViewButton: {
    color: GlobalStyles.Colors.primary100,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    fontWeight: 'bold',
  },

  ViewButtonContainer: {
    width: '42%',
    height: 40,
    backgroundColor: GlobalStyles.Colors.primary200,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 20,
    marginLeft: 60,
  }
});


export default OfferDetailSection