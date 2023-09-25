import {StyleSheet, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import GlobalStyles from '../../../../assets/constants/colors';
import ScreenTitle from '../../../../assets/constants/Components/ScreenTitle';
import PointsRow from './PointsRow';
import {View} from 'react-native';
import ScoreName from './ScoreName';

export default function LevelsScreen() {
  const [Points, setPoints] = useState(5500);
  const [expanded, setExpanded] = useState(false);
  const [expandedPoints, setExpandedPoints] = useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <ScreenTitle
        title="Levels"
        showBackArrow={true}
        onBackPress={() => {
          // Handle the back button press, e.g., navigate back
        }}
      />
      <PointsRow />
      <View style={styles.whiteBackground}>
        <ScoreName
          status="gold"
          title="Gold Status"
          subtext="OMNIS Score Champion is someone who has successfully built and maintained a high OMNIS Score."
          statusVisible={false}
          progress={20}
        />
        <ScoreName
          status="silver"
          title="Silver Status"
          subtext="Money Master is an individual who makes informed decisions that lead to financial success and wealth creation."
          statusVisible={false}
          progress={50}
        />
        <ScoreName
          status="bronze"
          title="Budgeting Champion"
          subtext="Budgeting Champion is someone who has demonstrated skills in managing their finance."
          statusVisible={true}
          progress={80}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.primary800,
  },
  whiteBackground: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 24,
    bottom: 0,
    alignItems: 'center',
  },
});
