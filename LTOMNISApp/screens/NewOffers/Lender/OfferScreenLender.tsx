    import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
    import React from 'react';
import ScreenTitle from '../../../assets/constants/Components/ScreenTitle';
import GlobalStyles from '../../../assets/constants/colors';
import OfferScreenTopTabsLender from '../../../assets/constants/Components/OfferScreenTopTabsLender';
    
    const OfferScreenLender = () => {
      return (
        <SafeAreaView style={styles.Background}>
          <ScreenTitle
            title="Lender"
            showBackArrow={true}
            onBackPress={() => {
              // Handle the back button press, e.g., navigate back
            }}
            showRightIcon={true}
            rightIconType="Feather" // Either 'Ionicons' or 'Feather'
            rightIconName="filter" // replace with actual Feather icon name
            onRightIconPress={() => {}}
          />
          <View
            style={{
              backgroundColor: GlobalStyles.Colors.primary100,
              height: '93%',
              width: '100%',
              borderRadius: 24,
            }}>
            <OfferScreenTopTabsLender />
          </View>
        </SafeAreaView>
      );
    };
    
    export default OfferScreenLender;
    
    const styles = StyleSheet.create({
      Background: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingVertical: 40,
      },
    });
    