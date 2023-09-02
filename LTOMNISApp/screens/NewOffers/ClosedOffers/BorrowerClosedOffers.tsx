import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import GlobalStyles from '../../../assets/constants/colors';
import ClosedOfferBigContainer, {
  OfferStatus,
} from '../../../assets/constants/Components/ClosedOfferBigContainer';
import {offersData} from '../../../assets/constants/data';

const validStatuses = [
  'Closed',
  'Pending',
  'Accepted',
  'Not paid',
  'In processing',
  'Payed',
];

export default function BorrowerClosedOffers() {
  return (
    <FlatList
      style={{backgroundColor: GlobalStyles.Colors.primary100}}
      data={offersData}
      renderItem={({item}) => (
        <ClosedOfferBigContainer
          title={item.title} // <-- Change offer to item
          raiseNumber={item.raiseNumber} // <-- Change offer to item
          fullNumber={item.fullNumber} // <-- Change offer to item
          users={item.users} // <-- Change offer to item
          status={
            validStatuses.includes(item.status as OfferStatus) // <-- Using a type assertion
              ? item.status
              : 'Closed'
          }
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
});
