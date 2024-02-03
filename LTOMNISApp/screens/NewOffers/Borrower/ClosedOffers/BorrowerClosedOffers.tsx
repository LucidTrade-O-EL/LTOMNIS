import React from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';
import GlobalStyles from '../../../../assets/constants/colors';
import ClosedOfferBigContainer, {
  OfferStatus,
} from '../../../../assets/constants/Components/ClosedOfferBigContainer';
import {offersData} from '../../../../assets/constants/data';
import {t} from 'i18next'
import { View } from 'react-native';

const validStatuses = [
  'Closed',
  'Pending',
  'Accepted',
  'Not paid',
  'In processing',
  'Payed',
];

export default function BorrowerClosedOffers() {

  const renderEmptyListComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{t('No Closed Offers')}</Text>
    </View>
  );
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
          status={t('Closed')}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      ListEmptyComponent={renderEmptyListComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: 'grey',
  },
});