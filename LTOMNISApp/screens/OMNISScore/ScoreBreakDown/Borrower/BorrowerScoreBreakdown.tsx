import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import TitleWithMeter from '../../../../assets/constants/Components/OMNISScoreComp/TitleWithMeter';
import GlobalStyles from '../../../../assets/constants/colors';
import {Divider} from 'react-native-elements';
import TitleWithGraph from '../../../../assets/constants/Components/OMNISScoreComp/TitleWithGraph';
import OmnisScoreChips from '../../../../assets/constants/Components/OmnisScoreChips';

const BorrowerScoreBreakdown = () => {
  return (
    <SafeAreaView style={styles.background}>
      <TitleWithMeter title="Repayment Timeliness Meter" />
      <Divider
        width={1}
        style={{width: '95%', alignSelf: 'center'}}
        color={GlobalStyles.Colors.accent250}
      />
      <TitleWithGraph title="Amount Borrowed vs Repaid" />
      <OmnisScoreChips
        chips={[
          {text: 'Borrowed', backgroundColor: GlobalStyles.Colors.primary800},
          {text: 'Repaid', backgroundColor: GlobalStyles.Colors.primary200},
        ]}
      />
    </SafeAreaView>
  );
};

export default BorrowerScoreBreakdown;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.primary100,
  },
});
