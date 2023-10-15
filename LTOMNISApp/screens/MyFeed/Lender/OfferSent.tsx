import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../../../assets/constants/colors';
import ScreenTitle from '../../../assets/constants/Components/ScreenTitle';
import SmallOfferDetailsVFour from '../../../assets/constants/Components/SmallOfferDetailsVFour';
import CompleteButton from '../../../assets/constants/Components/Buttons/CompleteButton';
import CustomOfferBlock from '../../../assets/constants/Components/CustomOfferBlock';

type OfferSentProps = {
  receivedAmount?: string;
};

const OfferSent: React.FC<OfferSentProps> = ({receivedAmount = '$399.78'}) => {
  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        showRightIcon={true}
        rightIconType="Feather" // Either 'Ionicons' or 'Feather'
        rightIconName="upload" // replace with actual Feather icon name
        onRightIconPress={() => {}}
      />
      <View style={{marginTop: 50}}>
        <Icon
          name="checkmark-circle-outline"
          size={60}
          color={GlobalStyles.Colors.primary200}
          style={{alignSelf: 'center'}}
        />
        <View style={styles.AlignItems}>
          <Text style={{fontSize: 16, color: 'rgba(256,256,256, 0.4)'}}>
            You just received
          </Text>
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={{color: GlobalStyles.Colors.primary100, fontSize: 48}}>
          {receivedAmount} {/* used receivedAmount prop here */}
        </Text>
      </View>
      <CustomOfferBlock
        data={[
          {leftText: 'Sent to', rightText: 'Zak Veasy'},
          {isDivider: true},
          {leftText: 'Amount Offered', rightText: '$15.45'},
        ]}
      />
      <View
        style={{marginTop: 40, width: '100%', flex: 1, alignItems: 'center'}}>
        <SmallOfferDetailsVFour
          title="Deposit Details"
          words={[
            {
              leftText: 'Transaction number',
              rightText: '#61251981891',
            },
            {leftText: 'Time', rightText: '6:18'},
            {leftText: 'Date', rightText: 'March, 2 2024'},
          ]}
        />
      </View>
      <View style={{marginBottom: 40}}>
        <CompleteButton
          text="Back to Feed"
          icon="return-up-back"
          iconSet="Ionicons"
          iconColor={GlobalStyles.Colors.primary100}
          color={GlobalStyles.Colors.primary600}
          onPress={() => console.log('Button pressed!')}
        />
      </View>
      <CompleteButton
        text="Visit Spotlight"
        iconColor={GlobalStyles.Colors.primary100}
        color={GlobalStyles.Colors.primary200}
        onPress={() => console.log('Button pressed!')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  AlignItems: {
    alignItems: 'center', // added this to center the text
  },
});

export default OfferSent;
