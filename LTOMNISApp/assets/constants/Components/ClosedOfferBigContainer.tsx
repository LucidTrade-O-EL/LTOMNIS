import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyles from '../colors';
import {LinearProgress} from '@rneui/themed';
import OfferDetailSection from './OfferDetailSection';
import CustomRow from './CustomRow';

type ClosedOfferBigContainerProps = {
  title: string;
  raiseNumber: number;
  fullNumber: number;
  users: Array<any>; // define a better type for users if possible
  status:
    | 'Closed'
    | 'Pending'
    | 'Accepted'
    | 'Not paid'
    | 'In processing'
    | 'Payed';
};

export type OfferStatus =
  | 'Closed'
  | 'Pending'
  | 'Accepted'
  | 'Not paid'
  | 'In processing'
  | 'Payed';

const statusStyles = {
  Closed: {backgroundColor: '#B9B9B9', color: 'white'},
  Pending: {backgroundColor: '#B9B9B9', color: 'white'},
  Accepted: {backgroundColor: '#3EA387', color: 'white'},
  'Not paid': {backgroundColor: '#F43636', color: 'white'},
  'In processing': {backgroundColor: '#B9B9B9', color: 'white'},
  Payed: {backgroundColor: '#3EA387', color: 'white'},
};

const getStatusStyle = (status: OfferStatus) => {
  return statusStyles[status];
};

const ClosedOfferBigContainer: React.FC<ClosedOfferBigContainerProps> = ({
  title,
  raiseNumber,
  fullNumber,
  users,
  status,
}) => {
  const progress = raiseNumber / fullNumber;

  //   Users Mapping

  //   CODE

  return (
    <View style={styles.container}>
      <View style={styles.innerContainerTitle}>
        <Text style={styles.TitleOfferText}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={[styles.statusChip, getStatusStyle(status)]}>
            <Text style={styles.statusText}>{status}</Text>
          </View>
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
      <View style={{width: '90%', alignSelf: 'center', marginTop: 12}}>
        <CustomRow
          leftText="1 offer"
          rightText="$3,000"
          //   icon={<YourIconComponent />}  // Add your desired icon component here, if needed
        />
        <CustomRow leftText="2 offers" rightText="$4,500" />
        <CustomRow leftText="3 offers" rightText="$600" />
        <TouchableOpacity
          style={styles.detailButton}
          onPress={() => {
            // Handle the button press here
          }}>
          <Text style={styles.detailButtonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ClosedOfferBigContainer;

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
  statusChip: {
    paddingHorizontal: 16, // Increase or adjust as desired
    borderRadius: 6, // Decrease for more rectangular, increase for more rounded
    marginLeft: 10, // This remains the same, it adds spacing between the number and the chip
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    color: 'white',
    fontSize: 12, // adjust size as needed
  },
  detailButton: {
    width: '100%',
    height: 40,
    backgroundColor: GlobalStyles.Colors.primary200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  detailButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
