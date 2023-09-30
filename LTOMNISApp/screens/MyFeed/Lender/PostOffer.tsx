import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import ScreenTitle from '../../../assets/constants/Components/ScreenTitle';
import GlobalStyles from '../../../assets/constants/colors';
import GroupDetailsInfo from '../../../assets/constants/Components/GroupDetailsInfo';
import CompleteButton from '../../../assets/constants/Components/Buttons/CompleteButton';
import Header from '../Header';
import PostOfferHeader from './PostOfferHeader';

export default function PostOffer() {
  return (
    <View style={styles.Background}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW5lcmd5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        }}
        style={styles.backgroundImage}
        resizeMode="cover"></ImageBackground>
      <View
        style={{
          width: '100%',
          height: '70%',
          bottom: 0,
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 24,
        }}>
        <PostOfferHeader
          avatar="https://example.com/avatar.jpg"
          firstname="John"
          lastname="Doe"
          number={5}
          title="Some Title"
          totalAmount={700}
          progress={200}
          participants={[
            { name: 'John Doe', avatarUri: 'http://example.com/johndoe.png' },
            { name: 'John Doe', avatarUri: 'http://example.com/johndoe.png' },
            { name: 'John Doe', avatarUri: 'http://example.com/johndoe.png' },
            // ... other participants
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleContainer: {
    marginTop: 60, // Adjust the margin to position the title appropriately
  },
});
