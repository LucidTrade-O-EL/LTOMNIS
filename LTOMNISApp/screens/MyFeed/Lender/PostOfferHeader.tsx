import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';
import GlobalStyles from '../../../assets/constants/colors';
import StarCircle from '../../../assets/constants/Components/Buttons/StarCircle';
import CustomOfferBlock from '../../../assets/constants/Components/CustomOfferBlock';
import SmallOfferDetailsVThree from '../../../assets/constants/Components/SmallOfferDetailsVThree';
import {ParticipantDetails} from './ParticipantDetails';

type Participant = {
  name: string;
  avatarUri?: string;
};

// Add type for the props
type PostOfferHeaderProps = {
  avatar?: string;
  firstname: string;
  lastname: string;
  number: number;
  title: string;
  totalAmount: number;
  progress: number;
  participants: Participant[]; // add this line
};

// Pass the props to the function
export default function PostOfferHeader({
  avatar,
  firstname,
  lastname,
  number,
  title,
  progress,
  totalAmount,
  participants,
}: PostOfferHeaderProps) {
  const progressBarRef = useRef<View>(null);
  const calculatedProgressBarWidth =
    (Number(progress) / Number(totalAmount)) * 100;

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.setNativeProps({
        style: {width: calculatedProgressBarWidth + '%'},
      });
    }
  }, [calculatedProgressBarWidth]);

  return (
    <View style={{flexDirection: 'column', width: '100%', alignSelf: 'center'}}>
      <View style={styles.header}>
        <Avatar
          size={25}
          rounded
          source={avatar ? {uri: avatar} : undefined}
          title={`${firstname.charAt(0)}${lastname.charAt(0)}`}
          containerStyle={
            avatar
              ? {backgroundColor: GlobalStyles.Colors.primary800} // style when avatar is provided
              : {backgroundColor: 'blue'} // style when avatar is not provided
          }
        />
        <Text style={styles.NameTitle}>{`${firstname} ${lastname}`}</Text>
        <View style={styles.right}>
          <StarCircle
            iconName="star-four-points-outline"
            height={16}
            width={16}
          />
          <Text style={styles.textNumber}>{number}</Text>
        </View>
      </View>
      <View style={styles.titleAmountRow}>
        <Text style={styles.titleText}>{title}</Text>
        <Text
          style={styles.amountText}>{`$${totalAmount.toLocaleString()}`}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View
            ref={progressBarRef}
            style={{
              height: '100%',
              backgroundColor: GlobalStyles.Colors.primary200,
              borderRadius: 6,
            }}
          />
        </View>
      </View>
      <ParticipantDetails participants={participants} />
      <CustomOfferBlock
        data={[
          {leftText: 'Loan amount', rightText: `$${380}`},
          {leftText: 'Interest rate', rightText: `${5}%`},
          {isDivider: true},
          {leftText: 'Remaining', rightText: `$${375}`},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    alignSelf: 'center',
    marginTop: 10,
  },
  textNumber: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
    color: GlobalStyles.Colors.primary510,
  },
  right: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  NameTitle: {
    fontSize: 14,
    marginLeft: 10,
    marginVertical: 5,
    color: GlobalStyles.Colors.primary500,
  },
  progressBarContainer: {
    flexDirection: 'row',
    height: 18,
    backgroundColor: 'rgba(120,120,128,0.08)',
    padding: 5, // Padding around the progress bar
    borderRadius: 6,
    marginTop: 20,
    width: '90%', // Set the width of the progress bar container to 80%
    alignSelf: 'center', // Center the progress bar container
  },
  amountContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  progressText: {
    fontSize: 22,
    color: GlobalStyles.Colors.primary800,
    fontWeight: '500',
  },
  totalAmountText: {
    fontSize: 14,
    color: GlobalStyles.Colors.accent120,
  },
  offerContainer: {
    backgroundColor: GlobalStyles.Colors.primary200,
    width: '40%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  offerText: {
    fontSize: 18, // Change fontSize to a number
    color: GlobalStyles.Colors.primary100,
    fontWeight: 'bold',
  },
  titleAmountRow: {
    flexDirection: 'row', // arrange title and amount in one row
    justifyContent: 'space-between', // separate title and amount
    alignItems: 'center', // center align items vertically
    padding: 10, // add some padding
  },
  titleText: {
    fontSize: 22, // set font size to 22 as specified
    color: GlobalStyles.Colors.primary800, // set the color
    fontWeight: '600',
  },
  amountText: {
    fontSize: 22, // set font size to 22 as specified
    color: GlobalStyles.Colors.primary800, // set the color
    fontWeight: '600',
  },
});
