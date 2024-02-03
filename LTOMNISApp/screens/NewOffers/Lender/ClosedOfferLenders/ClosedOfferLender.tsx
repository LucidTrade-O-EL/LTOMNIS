import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyles from '../../../../assets/constants/colors';
import {offersDataLender} from '../../../../assets/constants/offersDataLender';
import MediumBigContainerTwo from '../../../../assets/constants/Components/MediumBigContainerTwo';

const ClosedOfferLender = () => {
  const renderEmptyListComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Closed Offers</Text>
    </View>
  );

  return (
    <FlatList
      style={{backgroundColor: GlobalStyles.Colors.primary100}}
      data={offersDataLender}
      renderItem={({item}) => (
        <MediumBigContainerTwo
          targetScreen="ActiveOfferLenderDetails"
          title={item.title}
          firstNameLetter={item.firstNameLetter}
          lastNameLetter={item.lastNameLetter}
          avatarImage={item.avatarImage}
          userName={item.userName}
          amount={item.amount}
          interest={item.interest}
          status={'Closed'}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      ListEmptyComponent={renderEmptyListComponent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50, // Adjust as needed
  },
  emptyText: {
    fontSize: 18,
    color: 'grey', // Change as needed
  },
});

export default ClosedOfferLender;
