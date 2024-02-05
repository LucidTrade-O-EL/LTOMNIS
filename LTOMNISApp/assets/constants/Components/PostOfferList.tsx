import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {t} from 'i18next';
import GlobalStyles from '../colors';
import GlobalFonts from '../fonts';
import {LinearProgress} from '@rneui/themed';
import OfferDetailSection, {
  OfferDetailSectionProps,
} from './OfferDetailSection';
import {FlatList} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {AppState} from '../../../ReduxStore';

export type PostType = {
  id: string;
  title: string;
  description: string;
  totalAmount: number;
  currentAmount: number;
  featured: boolean;
  financed: boolean;
  numOfOffers: number;
  offers: OfferType[];
  user: UserType;
};

export type OfferType = {
  id: string;
  amount: number;
  interestPercentage: number;
  accepted: boolean;
  user: UserType;
};

export type UserType = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  balance?: string;
};

const PostOfferList: React.FC<{post: PostType}> = ({post}) => {
  const progress = post.currentAmount / post.totalAmount;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainerTitle}>
        <Text style={styles.TitleOfferText}>{post.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TitleOfferText}>{post.numOfOffers}</Text>
          <Text style={styles.TitleOfferText}> offers</Text>
        </View>
      </View>
      <View style={styles.innerContainerBar}>
        <View>
          <Text style={styles.amountText}>{`$${post.currentAmount}`}</Text>
        </View>
        <View>
          <Text style={styles.amountText}>{`$${post.totalAmount}`}</Text>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <LinearProgress
          style={styles.progressBar}
          value={progress}
          variant="determinate"
          color={GlobalStyles.Colors.primary200}
        />
      </View>
      <FlatList
        style={{backgroundColor: GlobalStyles.Colors.primary120, }}
        data={post.offers}
        renderItem={({item}) => (
          <OfferDetailSection
            targetScreen="OfferDetailsScreen"
            firstName={item.user.firstName}
            lastName={item.user.lastName}
            totalAmount={item.amount}
            interestPercentage={item.interestPercentage}
            avatar={item.user.avatar} // If avatar exists in your data structure
            offerId={item.id}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 343,
    backgroundColor: GlobalStyles.Colors.primary120,
    borderRadius: 20,
    marginTop: 16,
    paddingBottom: 20,
  },
  innerContainerTitle: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 32,
    justifyContent: 'space-between',
  },
  innerContainerBar: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  TitleOfferText: {
    fontSize: 18,
    fontFamily: 'San Francisco', // This will default to San Francisco on iOS.
    fontWeight: '500',
  },
  progressBarContainer: {
    width: '92%',
    height: 18,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(120,	120, 128, 0.08)',
    alignSelf: 'center',
  },
  progressBar: {
    marginVertical: 4,
    borderRadius: 10,
    height: 10,
    width: '98%',
  },
  amountText: {
    color: GlobalStyles.Colors.primary200,
    fontFamily: 'San Francisco',
    fontSize: 14,
    fontWeight: '700',
  },
  listContainer: {
    // styles for the FlatList content container
  },
});

export default PostOfferList;
