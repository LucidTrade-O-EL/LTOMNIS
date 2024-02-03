import {View, Text, FlatList, StyleSheet} from 'react-native';
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
  const fromMyPosts = route.params?.fromMyPosts ?? false;

  const fetchActiveOffers = async () => {
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
          firstName={item.user.firstName}
          lastName={item.user.lastName}
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
