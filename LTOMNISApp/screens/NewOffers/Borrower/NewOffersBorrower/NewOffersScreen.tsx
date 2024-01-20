// NewOffersScreen.js

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import GlobalStyles from '../../../../assets/constants/colors';
import OfferBigContainer, {
  OfferBigContainerProps,
} from '../../../../assets/constants/Components/OfferBigContainer';
import {offersData} from '../../../../assets/constants/data';
import {AppState} from '../../../../ReduxStore';

export default function NewOffersScreen() {
  const [postData, setPostData] = useState<OfferBigContainerProps[]>([]);
  const token = useSelector((state: AppState) => state.token);

  const fetchMyPostFeedList = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'http://localhost:8080/api/omnis/posts/mypost',
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

  // useEffect(() => {
  //   const fetchInterval = setInterval(() => {
  //     fetchMyPostFeedList();
  //   }, 10000); // Fetches posts every 10 seconds

  //   return () => clearInterval(fetchInterval); // Clean up interval on component unmount
  // }, []);

  useEffect(() => {
    fetchMyPostFeedList(); // Fetch data when the component mounts
  }, []);

  return (
    <FlatList
      style={{backgroundColor: GlobalStyles.Colors.primary100}}
      data={postData}
      renderItem={({item}) => (
        <OfferBigContainer
          targetScreen="ActiveOfferDetails"
          avatar={item.avatar}
          timeElasped={item.timeElasped}
          number={item.number}
          totalAmount={item.totalAmount}
          currentAmount={item.currentAmount}
          title={item.title}
          description={item.description}
          interestPercentage={item.interestPercentage}
          // imageUrl={item.imageUrl}
          // offerText={fromMyPosts ? 'Edit' : 'Offer'}
          // onOfferPress={() => handleOfferPress(item.id)}
          id={item.id}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
});
