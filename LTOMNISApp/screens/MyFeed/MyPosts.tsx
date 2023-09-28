import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { PostCard, PostCardProps } from './PostCard';
import GlobalStyles from '../../assets/constants/colors';
import axios from 'axios';

export default function MyPosts() {
  const [postData, setPostData] = useState<PostCardProps[]>([]);

  const fetchMyPostFeedList = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.lucidtrades.com/api/User/Feed',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const res = await axios(options);
      if (res.data) {
        setPostData(res.data); // Set the post data with the data from the API.
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

  // renderItem function
  const renderItem = ({ item }: { item: PostCardProps }) => (
    <PostCard
      avatar={item.avatar}
      firstname={item.firstname}
      lastname={item.lastname}
      hours={item.hours}
      number={item.number}
      totalAmount={item.totalAmount}
      progress={item.progress}
      title={item.title}
      subtext={item.subtext}
      imageUrl={item.imageUrl}
      offerText={item.offerText}
      id={'1'}
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
