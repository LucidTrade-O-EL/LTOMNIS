import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyles from '../colors';
import GlobalFonts from '../fonts';
import {LinearProgress} from '@rneui/themed';
import OfferDetailSection from './OfferDetailSection';

type OfferBigContainerProps = {
  title: string;
  offerNumber: number;
  raiseNumber: number;
  fullNumber: number;
  users: {
    firstNameLetter: string;
    lastNameLetter: string;
    userName: string;
    amount: number;
    interest: number;
  }[];
};

const OfferBigContainer: React.FC<OfferBigContainerProps> = ({
  title,
  offerNumber,
  raiseNumber,
  fullNumber,
  users,
}) => {
  const progress = raiseNumber / fullNumber;

  //   Users Mapping

  //   CODE

  return (
    <View style={styles.container}>
      <View style={styles.innerContainerTitle}>
        <Text style={styles.TitleOfferText}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TitleOfferText}>{offerNumber}</Text>
          <Text style={styles.TitleOfferText}> offers</Text>
        </View>
      </View>
      <View style={styles.innerContainerBar}>
        <View>
          <Text
            style={{
              color: GlobalStyles.Colors.primary200,
              fontFamily: 'San Francisco',
              fontSize: 14,
              fontWeight: '700',
            }}>{`$${raiseNumber.toLocaleString()}`}</Text>
        </View>
        <View>
          <Text
            style={{
              color:
                raiseNumber >= fullNumber
                  ? GlobalStyles.Colors.primary300
                  : GlobalStyles.Colors.primary500,
              fontFamily: 'San Francisco',
              fontSize: 14,
            }}>{`$${fullNumber.toLocaleString()}`}</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <LinearProgress
          style={styles.progressBar}
          value={progress}
          variant="determinate"
          color={GlobalStyles.Colors.primary200}
        />
      </View>
      <View style={{width: '90%', alignSelf: 'center'}}>
        {users.map((user, index) => (
          <OfferDetailSection
            key={index}
            firstNameLetter={user.firstNameLetter}
            lastNameLetter={user.lastNameLetter}
            userName={user.userName}
            amount={user.amount}
            interest={user.interest}
          />
        ))}
      </View>
    </View>
  );
};

export default OfferBigContainer;

const styles = StyleSheet.create({
  container: {
    width: 343,
    backgroundColor: GlobalStyles.Colors.primary120,
    borderRadius: 20,
    marginTop: 16,
    paddingBottom: 20,
  },
  innerContainerTitle: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 32,
    justifyContent: 'space-between',
  },
  innerContainerBar: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  TitleOfferText: {
    fontSize: 18,
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    fontWeight: '500',
  },
  progressBarContainer: {
    width: '92%',
    height: 18,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(120,	120, 128, 0.08)',
    alignSelf: 'center',
  },
  progressBar: {
    marginVertical: 4,
    borderRadius: 10,
    height: 10,
    width: '98%',
  },
});
