import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {PostCard, PostCardProps} from './PostCard';
import GlobalStyles from '../../assets/constants/colors';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {AppState} from '../../ReduxStore';

export default function MyPosts({route, navigation}) {
  const [postData, setPostData] = useState<PostCardProps[]>([]);
  const token = useSelector((state: AppState) => state.token);
  const fromMyPosts = route.params?.fromMyPosts ?? false;

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

  // Polling Underneath

  // useEffect(() => {
  //   const fetchInterval = setInterval(() => {
  //     fetchMyPostFeedList();
  //   }, 10000); // Fetches posts every 10 seconds
  
  //   return () => clearInterval(fetchInterval); // Clean up interval on component unmount
  // }, []);

  useEffect(() => {
    fetchMyPostFeedList(); // Fetch data when the component mounts
  }, []);


  const handleOfferPress = async (postId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/omnis/post/${postId}`,
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      // Now you can do something with the offers data, like navigating to a new screen with this data
      navigation.navigate('PostOfferSummary', {posts: response.data.uniquePost});

      console.log(
        'this is the ALL screen ***************************************',
        response.data,
      );
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };


  // renderItem function
  const renderItem = ({item, index}: {item: PostCardProps, index: number}) => (
    <PostCard
      key={index}
      avatar={item.avatar}
      firstName={item.user.firstName}
      lastName={item.user.lastName}
      timeElapsed={item.timeElapsed}
      number={item.number}
      totalAmount={item.totalAmount}
      currentAmount={item.currentAmount}
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
      offerText={fromMyPosts ? "Edit" : "Offer"}
      onOfferPress={() => handleOfferPress(item.id)}
      id={item.id}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        renderItem={renderItem}
        keyExtractor={item => item.id} 
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.Colors.primary100,
    flex: 1,
  },
  listContentContainer: {
    paddingBottom: 80,
  },
});
