import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import TitleWithMeter from '../../../../assets/constants/Components/OMNISScoreComp/TitleWithMeter'
import GlobalStyles from '../../../../assets/constants/colors'
import { Divider } from 'react-native-elements'
import TitleWithGraph from '../../../../assets/constants/Components/OMNISScoreComp/TitleWithGraph'

const BorrowerScoreBreakdown = () => {
  return (
    <SafeAreaView style={styles.background}>
     <TitleWithMeter title="Repayment Timeliness Meter" />
     <Divider width={1} style={{ width: '95%', alignSelf: 'center' }} color={GlobalStyles.Colors.accent250} />
     <TitleWithGraph title="Amount Borrowed vs Repaid"  />
    </SafeAreaView>
  )
}

export default BorrowerScoreBreakdown

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: GlobalStyles.Colors.primary100,
    },
})