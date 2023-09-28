import { View, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import GlobalStyles from '../../assets/constants/colors';
import FeedTopTabs from './FeedTopTabs';
import Header from './Header';

type MyFeedScreenProps = {
  firstname: string;
  lastname: string;
};

const MyFeedScreen: React.FC<MyFeedScreenProps> = ({
  firstname = 'John',
  lastname = 'Sam',
}) => {
  const avatarImage = ''; // Assuming you'd get this from props or somewhere else

  return (
    <SafeAreaView style={styles.background}>
      <Header firstname={firstname} lastname={lastname} avatarImage={avatarImage} />
        <FeedTopTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.primary800,
  },
  whiteBackground: {

    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 24,
flex: 1,
    alignItems: 'center',
  },
  TitleOfferText: {
    fontSize: 16
  }
});

export default MyFeedScreen