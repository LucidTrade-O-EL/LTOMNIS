import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {PostCard, PostCardProps} from './PostCard';
import GlobalStyles from '../../assets/constants/colors';
import axios from 'axios';
import {AppState} from '../../ReduxStore';
import {useSelector} from 'react-redux';

export default function Featured({route, navigation}) {
  const fromMyPosts = route.params?.fromMyPosts ?? false;
  // Data array
  // const postData = [
  //   {
  //     id: '1',
  //     avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
  //     firstname: 'John',
  //     lastname: 'Doe',
  //     hours: 1,
  //     number: 5000,
  //     totalAmount: 100,
  //     progress: 50,
  //     title: 'This is a Post Title',
  //     subtext: 'This is some subtext for the post. It provides more information about the post.',
  //     imageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  //     offerText: 'Offers',
  //   },
  //   {
  //     id: '2',
  //     firstname: 'Jane',
  //     lastname: 'Smith',
  //     hours: 2,
  //     number: 3000,
  //     totalAmount: 100,
  //     progress: 80,
  //     title: 'Another Post Title',
  //     subtext: 'Here is more subtext for another post.',
  //     offerText: 'Offers',
  //   },
  // ];

  const [postData, setPostData] = useState<PostCardProps[]>([]);
  const token = useSelector((state: AppState) => state.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/omnis/posts/featured',
          {
            headers: {
              Authorization: `Bearer ${token.token}`,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
          },
        );
        setPostData(response.data.featuredPostList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function immediately to fetch data initially
    fetchData();

    // Set up polling to fetch data every specified interval
    const interval = setInterval(fetchData, 30000); // Fetch data every 30 seconds

    // Clean up interval on component unmount
    return () => clearInterval(interval);
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
      navigation.navigate('PostOfferSummary', {
        posts: response.data.uniquePost,
      });

      console.log(
        'this is the Featured screen ***************************************',
        response.data,
      );
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };

  // renderItem function
  const renderItem = ({item}: {item: PostCardProps; index: number}) => (
    <PostCard
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
      offerText={fromMyPosts ? 'Edit' : 'Offer'}
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
