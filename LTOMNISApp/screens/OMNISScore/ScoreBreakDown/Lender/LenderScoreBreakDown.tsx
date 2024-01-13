import {View, Text} from 'react-native';
import React from 'react';
import TitleWithMeter from '../../../../assets/constants/Components/OMNISScoreComp/TitleWithMeter';
import OMNISGraph from '../../../../assets/constants/Components/OMNISGraph';

const LenderScoreBreakDown = () => {
  return (
    <View>
      <TitleWithMeter title="Sample Title" />
      <View style={{ height: '100%', width: '100%', }} >
        <OMNISGraph />
      </View>
    </View>
  );
};

export default LenderScoreBreakDown;
