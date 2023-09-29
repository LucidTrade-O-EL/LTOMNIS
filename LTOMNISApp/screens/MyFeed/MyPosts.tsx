import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {PostCard, PostCardProps} from './PostCard';
import GlobalStyles from '../../assets/constants/colors';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {RootState} from '../../rootReducer';

export default function MyPosts() {
  const [postData, setPostData] = useState<PostCardProps[]>([]);
  const token = useSelector((state: RootState) => state.token.token);

  const fetchMyPostFeedList = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.lucidtrades.com/api/User/Feed',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      console.log(`Bearer ${token}`);

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
  }, [token]);

  // renderItem function
  const renderItem = ({item}: {item: PostCardProps}) => (
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
