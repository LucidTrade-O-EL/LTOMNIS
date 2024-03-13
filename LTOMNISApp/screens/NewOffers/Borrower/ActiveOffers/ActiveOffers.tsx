import {View, Text, FlatList, StyleSheet, RefreshControl} from 'react-native'; // Import RefreshControl
import React, {useEffect, useState} from 'react';
import GlobalStyles from '../../../../assets/constants/colors';
import {offersData} from '../../../../assets/constants/data';
import OfferBigContainer, {
  OfferBigContainerProps,
} from '../../../../assets/constants/Components/OfferBigContainer';
import {useSelector} from 'react-redux';
import {AppState} from '../../../../ReduxStore';
import axios from 'axios';

export default function ActiveOffers({route}) {
  const [postData, setPostData] = useState<OfferBigContainerProps[]>([]);
  const token = useSelector((state: AppState) => state.token);
  const [refreshing, setRefreshing] = useState(false); // Added refreshing state
  const fromMyPosts = route.params?.fromMyPosts ?? false;
  const id = useSelector((state: AppState) => state.user.userId);

  console.log('this is the ID***', id);

  const fetchActiveOffers = async () => {
    setRefreshing(true); // Start refreshing
    try {
      const options = {
        method: 'GET',
        url: `http://localhost:8080/api/omnis/posts/borrower/active_offers`,
        headers: {
          Authorization: `Bearer ${token.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const res = await axios(options);
      if (res.data) {
        console.log("Active List", res.data)
        console.log("Active List 2", JSON.stringfy(res.data.activeOffersPostList.offers[0]))
        setPostData(res.data.activeOffersPostList); // Update post data
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setRefreshing(false); // Stop refreshing
    }
  };

  useEffect(() => {
    fetchActiveOffers(); // Initial fetch
  }, []);

  useEffect(() => {
    fetchActiveOffers(); // Fetch data when the component mounts
  }, []);

  const renderEmptyListComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Active Offers</Text>
    </View>
  );

  return (
    <FlatList
      style={{backgroundColor: GlobalStyles.Colors.primary100}}
      data={postData}
      renderItem={({item}) => (
        <OfferBigContainer
          targetScreen="ActiveOfferMakePayment"
          title={item.title}
          offerNumber={item.offerNumber}
          raiseNumber={item.raiseNumber}
          fullNumber={item.fullNumber}
          users={item.users}
          // firstName={item.user.firstName}
          // lastName={item.user.lastName}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      ListEmptyComponent={renderEmptyListComponent}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={fetchActiveOffers} // Refresh function
        />
      }
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
