import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {PostCard, PostCardProps} from './PostCard';
import GlobalStyles from '../../assets/constants/colors';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {AppState} from '../../ReduxStore';

export default function MyPosts({route}) {
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

  // renderItem function
  const renderItem = ({item, index}: {item: PostCardProps, index: number}) => (
    <PostCard
      key={index}
      avatar={item.avatar}
      firstName={item.user.firstName}
      lastName={item.user.lastName}
      timeElasped={item.timeElasped}
      number={item.number}
      totalAmount={item.totalAmount}
      currentAmount={item.currentAmount}
      title={item.title}
      description={item.description}
      imageUrl={item.imageUrl}
      offerText={fromMyPosts ? "Edit" : "Offer"}
      id={item.id}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={postData} // pass the postData state variable here
        renderItem={renderItem} // pass the renderItem function
        keyExtractor={item => item.id} // use id for keyExtractor
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.Colors.primary100,
    flex: 1,
  },
});
