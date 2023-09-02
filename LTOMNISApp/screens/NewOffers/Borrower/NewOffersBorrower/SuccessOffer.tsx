import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import GlobalStyles from '../../assets/constants/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import CompleteButton from '../../assets/constants/Components/Buttons/CompleteButton';
import SmallOfferDetailsVOne from '../../assets/constants/Components/SmallOfferDetailsVOne';

type SuccessOfferProps = {
  receivedAmount?: string;
};

const SuccessOffer: React.FC<SuccessOfferProps> = ({
  receivedAmount = '$15',
}) => {
  return (
    <SafeAreaView style={styles.Background}>
      <View
        style={{
          flexDirection: 'column',
          width: '90%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <ScreenTitle
          showRightIcon={true}
          rightIconType="Feather"
          rightIconName="upload"
          onRightIconPress={() => {}}
        />
        <View style={styles.AlignItems}>
          <Icon
            name="checkmark-circle-outline"
            size={50}
            color={GlobalStyles.Colors.primary200}
          />
        </View>
        <View style={styles.AlignItems}>
          <Text style={{fontSize: 16, color: 'rgba(256,256,256, 0.4)'}}>
            You just received
          </Text>
        </View>
      </View>
      <View>
        <Text style={{color: GlobalStyles.Colors.primary100, fontSize: 48}}>
          {receivedAmount}
        </Text>
      </View>
      <SmallOfferDetailsVOne
        title="Offer Details"
        rightWords={[
          '01/02/2023',
          '06:00 PM',
          'John Doe',
          '4%',
          '$32',
          '$6',
          '5%APR, 6 months',
        ]}
      />
      <CompleteButton
        onPress={() => {
          console.log('Button pressed!');
        }}
        text="Done"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.Colors.primary800,
  },
  AlignItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SuccessOffer;
