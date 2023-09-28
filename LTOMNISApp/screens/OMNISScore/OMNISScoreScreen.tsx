import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import GlobalStyles from '../../assets/constants/colors';
import CreditScoreBar from '../../assets/constants/Components/CreditScoreBar';
import SmallCreditScoreBar from '../../assets/constants/Components/SmallCreditScoreBar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OmnisOptions from '../../assets/constants/Components/OmnisOptions';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import LevelDetails from './ScoreBreakDown/Levels/LevelDetails';


export default function OMNISScoreScreen() {

  const navigation = useNavigation<StackNavigationProp<any, any>>();
  const refRBSheet = useRef<RBSheet>(null);

  const handleIconPress = () => {
    refRBSheet.current?.open();
  };

  const handleClose = () => {
    refRBSheet.current?.close();
  };

  const score = 80; // Replace with actual score
  const creditScore = 780;
  const scoreUpdate = 20;

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle title="OMNIS Score" />
      <View style={styles.OMNISScoreBackground}>
        <TouchableOpacity
          onPress={handleIconPress}
          style={{position: 'absolute', right: 0, padding: 10}}>
          <MaterialCommunityIcons
            name={'information-outline'}
            size={18}
            color={'gray'}
          />
        </TouchableOpacity>
        <CreditScoreBar scoreUpdate={scoreUpdate} score={score} />
        <SmallCreditScoreBar creditScore={creditScore} />
        <Pressable onPress={() => {}} style={styles.ScoreBreakdownButton}>
          <Text style={styles.ScoreBreakdownButtonText}>Score Breakdown</Text>
        </Pressable>
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        onClose={handleClose}
        height={300}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(30, 30, 30, 0.8)',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
      <Pressable onPress={() => navigation.navigate('LevelDetails')}>
      <OmnisOptions
        isLottie={true}
        title="Money Master"
        isProgressBar={true}
        progress={2000}
        status="silver"
      />
      </Pressable>
      <OmnisOptions
        isLottie={false}
        imageSource={require('../../assets/Icons/knowledge.png')}
        title="Learning Hub"
        isProgressBar={false}
        subText="Improve financial literacy and earn rewards"
      />
      <OmnisOptions
        isLottie={false}
        imageSource={require('../../assets/Icons/award.png')}
        title="Visit Reward Shop"
        isProgressBar={false}
        subText="Redeem Points by buying best rewards for your purpose"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: GlobalStyles.Colors.primary800,
    paddingVertical: 40,
  },
  OMNISScoreBackground: {
    alignItems: 'center',
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    borderRadius: 24,
  },
  ScoreBreakdownButton: {
    height: 56,
    width: '90%',
    borderRadius: 16,
    backgroundColor: GlobalStyles.Colors.primary200,
    bottom: 380,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ScoreBreakdownButtonText: {
    color: GlobalStyles.Colors.primary100,
    fontWeight: 'bold',
    fontSize: 18,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
