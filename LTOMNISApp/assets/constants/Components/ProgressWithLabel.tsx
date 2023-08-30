import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LinearProgress} from 'react-native-elements';
import GlobalStyles from '../colors';

type ProgressWithLabelProps = {
  collected: number;
  goal: number;
};

const ProgressWithLabel: React.FC<ProgressWithLabelProps> = ({
  collected,
  goal,
}) => {
  const progress = collected / goal;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelCollected}>${collected.toFixed(2)}</Text>
        <Text style={styles.labelGoal}>${goal.toFixed(2)}</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <LinearProgress
          style={styles.progressBar}
          value={progress}
          variant="determinate"
          color={GlobalStyles.Colors.primary200}
        />
      </View>
      <View style={styles.labelContainerBottom}>
        <Text style={styles.labelCollectedBottom}>Collected</Text>
        <Text style={styles.labelGoalBottom}>Goal</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '92%',
    alignSelf: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  labelCollected: {
    color: GlobalStyles.Colors.primary200,
    fontWeight: '500',
    fontSize: 16,
  },
  labelGoal: {
    color: GlobalStyles.Colors.accent110,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'right',
  },
  progressBarContainer: {
    width: '100%',
    height: 18,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(120, 120, 128, 0.08)',
    position: 'relative',
  },
  progressBar: {
    marginVertical: 4,
    borderRadius: 10,
    height: 10,
    width: '98%',
  },
  labelGoalBottom: {
    color: GlobalStyles.Colors.accent110,
    fontWeight: '500',
    fontSize: 12,
    textAlign: 'right',
  },
  labelCollectedBottom: {
    color: GlobalStyles.Colors.primary200,
    fontWeight: '500',
    fontSize: 12,
  },
  labelContainerBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default ProgressWithLabel;
