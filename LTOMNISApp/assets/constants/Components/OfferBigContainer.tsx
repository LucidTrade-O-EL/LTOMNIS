import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalStyles from '../colors';
import GlobalFonts from '../fonts';
import {LinearProgress} from '@rneui/themed';
import OfferDetailSection, {
  OfferDetailSectionProps,
} from './OfferDetailSection';
import {t} from 'i18next';
import {AppState} from '../../../ReduxStore';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
import PostOfferList, { PostType } from './PostOfferList';

export type OfferBigContainerProps = {
  title: string;
  currentAmount: number;
  totalAmount: number;
  targetScreen: string;
  timeElapsed: string;
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
}) => {
  const progress = currentAmount / totalAmount;
  const userId = useSelector((state: AppState) => state.user.userId); // Only declaration of userId

  const token = useSelector((state: AppState) => state.token);
  const [activeData, setActiveData] = useState<PostType[]>([]);
  const [numOfOffers, setNumOfOffers] = useState([]);
  const [num, setNum] = useState(0);

  const fetchOfferDetails = async () => {
    if (!userId) {
      console.error('Offer ID is missing');
      return;
    }
    try {
      const options = {
        method: 'GET',
        url: `http://localhost:8080/api/omnis/posts/borrower`,
        headers: {
          Authorization: `Bearer ${token.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      console.log(`Bearer ${token.token}`);

      const res = await axios(options);
      if (res.data) {
        setActiveData(res.data.borrowerPostList);
        const allNumOfOffers = res.data.borrowerPostList.map(
          post => post.numOfOffers,
        );
        setNumOfOffers(allNumOfOffers); // Set the array of number of offers
        console.log(
          'this is my res count',
          JSON.stringify(res.data.borrowerPostList.numOfOffers),
        );
        console.log(
          'this is my res in Big Con',
          JSON.stringify(res.data.borrowerPostList),
        );
        console.log('this Active data', JSON.stringify(res.data.user));
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
    fetchOfferDetails();
  }, []); // Add id as a dependency


  return (
    <View style={styles.container}>
    {activeData.map(post => (
      <PostOfferList key={post.id} post={post} />
    ))}
      <View style={{width: '90%', alignSelf: 'center'}}>
      </View>
    </View>
  );
};

export default OfferBigContainer;

const styles = StyleSheet.create({
  container: {
    width: 343,
    backgroundColor: GlobalStyles.Colors.primary100,
    borderRadius: 20,
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
