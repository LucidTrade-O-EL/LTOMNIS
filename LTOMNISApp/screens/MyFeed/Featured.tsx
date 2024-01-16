import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { PostCard, PostCardProps } from './PostCard';
import GlobalStyles from '../../assets/constants/colors';
import axios from 'axios';

export default function Featured() {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/api/omnis/posts/featured', {
          // Your request body here
        });
        setPostData(response.data); // Assuming the response data is the format you need
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // renderItem function
  const renderItem = ({ item }: { item: PostCardProps }) => (
    <PostCard
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
      offerText={item.offerText}
      id={item.id}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={postData} // pass the data array
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
