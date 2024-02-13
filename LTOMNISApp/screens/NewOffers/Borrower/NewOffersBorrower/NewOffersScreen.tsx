// NewOffersScreen.js

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import {StyleSheet, FlatList, Text} from 'react-native';
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
        console.log('This is my Posts',res.data.myPostList )
      } else {
        console.log('No user data received');
      }
    } catch (error: any) {
      console.error('An error occurred:', error);
    }
  };

  useEffect(() => {
    fetchMyPostFeedList(); // Fetch data when the component mounts
  }, []);

  const renderEmptyListComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No New Offers</Text>
    </View>
  );

  const handleSelect = (item: OfferBigContainerProps) => {
    console.log("Selected item:", item);
    // Your selection logic here
  };
  

  return (
    <FlatList
      style={{backgroundColor: GlobalStyles.Colors.primary100}}
      data={postData}
      renderItem={({item}) => (
        <OfferBigContainer
          targetScreen="ActiveOfferDetails"
          avatar={item.avatar}
          timeElapsed={item.timeElapsed}
          number={item.number}
          totalAmount={item.totalAmount}
          currentAmount={item.currentAmount}
          title={item.title}
          description={item.description}
          interestPercentage={item.interestPercentage}
          // imageUrl={item.imageUrl}
          // offerText={fromMyPosts ? 'Edit' : 'Offer'}
          id={item.id}
          onSelect={() => handleSelect(item)} // Add this line
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      ListEmptyComponent={renderEmptyListComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: 'grey',
  },
});
