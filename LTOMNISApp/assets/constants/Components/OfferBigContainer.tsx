import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyles from '../colors';
import GlobalFonts from '../fonts';
import {LinearProgress} from '@rneui/themed';
import OfferDetailSection, { OfferDetailSectionProps } from './OfferDetailSection';
import {t} from 'i18next';
import {AppState} from '../../../ReduxStore';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';

export type OfferBigContainerProps = {
  title: string;
  currentAmount: number;
  totalAmount: number;
  targetScreen: string;
  firstName: string;
  lastName: string;
  timeElasped: string;
  interestPercentage: number;
  avatar?: string;
  number: number;
  description?: string;
  imageUrl?: string;
  offerText?: string;
  id?: string;
};

const OfferBigContainer: React.FC<OfferBigContainerProps> = ({
  title,
  currentAmount,
  totalAmount,
  targetScreen,
  firstName,
  timeElasped,
  lastName,
  interestPercentage,
  avatar,
  description,
  imageUrl,
  number,
  offerText,
  id
}) => {
  const progress = currentAmount / totalAmount;

  const token = useSelector((state: AppState) => state.token);
  const [postData, setPostData] = useState<OfferDetailSectionProps[]>([]);

  const fetchOfferDetails = async (offerId: string) => {
    try {
      const options = {
        method: 'GET',
        url: `http://localhost:8080/api/omnis/offers/active/${offerId}`,
        headers: {
          Authorization: `Bearer ${token.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      console.log(`Bearer ${token.token}`);

      const res = await axios(options);
      if (res.data) {
        setPostData(res.data.myPostList); // Set the post data with the data from the API.
      } else {
        console.log('No user data received');
      }
    } catch (error: any) {
      console.error('An error occurred:', error);
    }
  };

  // Polling Underneath

  // useEffect(() => {
  //   const fetchInterval = setInterval(() => {
  //     fetchOfferDetails();
  //   }, 10000); // Fetches posts every 10 seconds

  //   return () => clearInterval(fetchInterval); // Clean up interval on component unmount
  // }, []);

  useEffect(() => {
    fetchOfferDetails(); // Fetch data when the component mounts
  }, []);

  console.log('This is a Request???', JSON.stringify({firstName}));

  return (
    <View style={styles.container}>
      <View style={styles.innerContainerTitle}>
        <Text style={styles.TitleOfferText}>
          {t('offerTitle', {offerTitle: title})}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TitleOfferText}>3</Text>
          <Text style={styles.TitleOfferText}> {t('offers')}</Text>
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
            }}>{`$${currentAmount}`}</Text>
        </View>
        <View>
          <Text
            style={{
              color:
                currentAmount >= totalAmount
                  ? GlobalStyles.Colors.primary300
                  : GlobalStyles.Colors.primary500,
              fontFamily: 'San Francisco',
              fontSize: 14,
            }}>{`$${totalAmount}`}</Text>
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
        <FlatList
          style={{backgroundColor: GlobalStyles.Colors.primary100}}
          data={postData}
          renderItem={(
            {item, index}, // Destructure `index` here
          ) => (
            <OfferDetailSection
              targetScreen={targetScreen}
              firstName={firstName}
              lastName={lastName}
              totalAmount={totalAmount}
              interestPercentage={interestPercentage}
              avatar={avatar}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.container}
        />
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
