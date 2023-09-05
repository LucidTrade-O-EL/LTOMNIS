import {Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Divider} from 'react-native-elements';
import GlobalStyles from '../colors';
import {StyleSheet} from 'react-native';


interface OfferDetail {
  firstNameLetter: string;
  lastNameLetter: string;
  avatarImage?: string | null;
  userName: string;
  amount: number;
  interest: number;
}

interface OfferDetailSectionLenderProps {
  offers: OfferDetail[];
}

export default function OfferDetailSectionLender({ offers }: OfferDetailSectionLenderProps) {
  return (
    <View style={{ flex: 1 }}>
      {offers.map((offer, index) => (
        <View key={index} style={{ height: 81 }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 16,
              marginLeft: 16,
              alignItems: 'center',
            }}>
            {offer.avatarImage ? (
              <Avatar size={25} rounded source={{uri: offer.avatarImage}} />
            ) : (
              <Avatar
                size={25}
                rounded
                title={`${offer.firstNameLetter}${offer.lastNameLetter}`}
                containerStyle={{backgroundColor: GlobalStyles.Colors.primary100}}
                titleStyle={{
                  color: GlobalStyles.Colors.primary500,
                  fontWeight: 'bold',
                }}
              />
            )}
            <Text style={styles.Subtext}>by {offer.userName}</Text>
            <View
              style={{
                height: 15,
                width: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <Divider orientation="vertical" width={1} />
            </View>
            <Text style={styles.Subtext}>30 mins ago</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: 18, alignItems: 'center'}}>
            <Text style={styles.NumberInRoles}>{`$${offer.amount.toLocaleString()}`}</Text>
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
            <Text style={styles.TextInRoles}>{`${offer.interest.toLocaleString()}% interest`}</Text>
          </View>
          <View style={styles.RoleButtonContainer}>
            <Pressable style={styles.ViewButtonContainer}>
              <Text style={styles.ViewButton}>Details</Text>
            </Pressable>
          </View>
        </View>
      ))}
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
    top: 40, // 10 pixels from the top of the parent View (adjust as needed).
    right: 0, // 10 pixels from the right edge of the parent View (adjust as needed).
    width: '60%',
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
    width: '60%',
    height: 40,
    backgroundColor: GlobalStyles.Colors.primary200,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 20,
    marginLeft: 60,
  },
  Subtext: {
    left: 8,
    fontWeight: '500',
    fontSize: 14,
    color: GlobalStyles.Colors.accent300,
  },
});