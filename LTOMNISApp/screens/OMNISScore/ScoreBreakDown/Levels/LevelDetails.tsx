import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import ScreenTitle from '../../../../assets/constants/Components/ScreenTitle';
import GlobalStyles from '../../../../assets/constants/colors';
import {useNavigation} from '@react-navigation/native';

export default function LevelDetails() {
  const navigation = useNavigation(); // Get the navigation object
  console.log(navigation);

  return (
    <SafeAreaView style={styles.background}>
      <ScreenTitle
        title="Levels Details"
        showBackArrow={true}
        onBackPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            console.log('Cannot go back');
          }
          
        }}
/>
      <View style={styles.whiteBackground}></View>
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
