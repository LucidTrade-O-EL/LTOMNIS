import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import TitleWithMeter from '../../../../assets/constants/Components/OMNISScoreComp/TitleWithMeter';
import OMNISGraph from '../../../../assets/constants/Components/OMNISGraph';
import TitleWithGraph from '../../../../assets/constants/Components/OMNISScoreComp/TitleWithGraph';
import OmnisScoreChips from '../../../../assets/constants/Components/OmnisScoreChips';
import GlobalStyles from '../../../../assets/constants/colors';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import PieChartComp from '../../../../assets/constants/Components/PieChartComp';

const LenderScoreBreakDown = () => {
  const pieChartData = [
    {title: 'One', value: 10, color: '#E38627'},
    {title: 'Two', value: 15, color: '#C13C37'},
    {title: 'Three', value: 20, color: '#6A2135'},
  ];

  return (
    <ScrollView style={styles.background}>
      <TitleWithMeter title="Lending Behavior Meter" />
      <View style={{height: '100%', width: '100%'}}>
        <TitleWithGraph title="Amount Borrowed vs Repaid" />
        <OmnisScoreChips
          chips={[
            {text: 'Investment', backgroundColor: '#4CAF50'},
            {text: 'Return', backgroundColor: '#FFC107'},
            {text: 'Profit', backgroundColor: '#9C27B0'},
          ]}
        />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <PieChartComp />
        </View>
      </View>
    </ScrollView>
  );
};

export default LenderScoreBreakDown;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.primary100,
    marginBottom: 50,
  },
});
