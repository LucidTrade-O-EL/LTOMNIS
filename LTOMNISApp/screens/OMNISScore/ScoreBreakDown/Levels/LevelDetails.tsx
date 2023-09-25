import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import ScreenTitle from '../../../../assets/constants/Components/ScreenTitle'
import GlobalStyles from '../../../../assets/constants/colors';

export default function LevelDetails() {
  return (
    <SafeAreaView style={styles.background}>
      <ScreenTitle
        title="Levels Details"
        showBackArrow={true}
        onBackPress={() => {
          // Handle the back button press, e.g., navigate back
        }}
      />
      <View style={styles.whiteBackground}>

      </View>
    </SafeAreaView>
  )
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
