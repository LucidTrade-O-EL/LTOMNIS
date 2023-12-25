import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyles from '../../../../assets/constants/colors';
import {offersDataLender} from '../../../../assets/constants/offersDataLender';
import MediumBigContainer from '../../../../assets/constants/Components/MediumBigContainer';



const ActiveOffersLender = () => {
  return (
    <FlatList
      style={{backgroundColor: GlobalStyles.Colors.primary100}}
      data={offersDataLender}
      renderItem={({item}) => (
        <MediumBigContainer targetScreen="ActiveOfferLenderDetails"
          title={item.title}
          firstNameLetter={item.firstNameLetter}
          lastNameLetter={item.lastNameLetter}
          avatarImage={item.avatarImage}
          userName={item.userName}
          amount={item.amount}
          interest={item.interest}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
});

export default ActiveOffersLender;
