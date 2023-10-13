import { View, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import GlobalStyles from '../../assets/constants/colors';
import FeedTopTabs from './FeedTopTabs';
import Header from './Header';

type Type1 = {
  property: string;
};

type Type2 = {
  property: string;
};

type MyFeedScreenProps = {
  firstname: string;
  lastname: string;
  prop1?: Type1;
  prop2?: Type2;
};

let defaultValue1: Type1 = {
  property: 'defaultValue1'
};

let defaultValue2: Type2 = {
  property: 'defaultValue2'
};

const MyFeedScreen: React.FC<MyFeedScreenProps> = ({
  firstname = 'John',
  lastname = 'Sam',
  prop1 = defaultValue1,
  prop2 = defaultValue2,
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