// NewOffersScreen.js

import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import GlobalStyles from '../../../../assets/constants/colors';
import OfferBigContainer from '../../../../assets/constants/Components/OfferBigContainer';
import { offersData } from '../../../../assets/constants/data';


export default function NewOffersScreen() {
  return (
    <FlatList
      style={{backgroundColor: GlobalStyles.Colors.primary100}}
      data={offersData}
      renderItem={({item}) => (
        <OfferBigContainer
        targetScreen="ActiveOfferDetails"
          title={item.title}
          offerNumber={item.offerNumber}
          raiseNumber={item.raiseNumber}
          fullNumber={item.fullNumber}
          users={item.users}
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
