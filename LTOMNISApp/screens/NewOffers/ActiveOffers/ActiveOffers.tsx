import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import GlobalStyles from '../../../assets/constants/colors';
import { offersData } from '../../../assets/constants/data';
import OfferBigContainer from '../../../assets/constants/Components/OfferBigContainer';

export default function ActiveOffers() {
    return (
        <FlatList
          style={{backgroundColor: GlobalStyles.Colors.primary100}}
          data={offersData}
          renderItem={({item}) => (
            <OfferBigContainer
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