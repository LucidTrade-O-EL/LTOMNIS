import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import GlobalStyles from '../../assets/constants/colors';
import AcceptAndDecline from '../../assets/constants/Components/Buttons/AcceptAndDecline';
import ChipRow from '../../assets/constants/Components/Buttons/ChipRow';
import DateTimePickerComponent from '../../assets/constants/Components/DateTimePickerComponent';

export default function TransactionHistoryFilter() {
  const handleAccept = () => {
    console.log('Accept button pressed');
    // Your accept button logic here
  };

  const handleDecline = () => {
    console.log('Decline button pressed');
    // Your decline button logic here
  };

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle
        title="Filters"
        showBackArrow={true}
        onBackPress={() => {
          // Handle the back button press, e.g., navigate back
        }}
      />
      <View style={styles.content}>
        <View>
          <Text style={styles.sectionTitle}>Transaction Type</Text>
          <ChipRow
            chipsData={[
              {id: '1', label: 'Transfer'},
              {id: '2', label: 'Deposit'},
              {id: '3', label: 'Withdraw'},
              // ...more chips
            ]}
            onSelect={chip => {
              console.log('Chip selected:', chip);
              // ... Your logic for when a chip is selected
            }}
          />
        </View>
        <View>
          <Text style={styles.sectionTitle}>Money Range</Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Date Range</Text>
        </View>
        <DateTimePickerComponent />
      </View>
      <View style={styles.footer}>
        <AcceptAndDecline
          onAccept={handleAccept}
          onDecline={handleDecline}
          acceptText="Submit" // Custom label for accept button
          declineText="Reset" // Custom label for decline button
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.primary800,
  },
  content: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: GlobalStyles.Colors.primary100,
    fontWeight: '700',
  },
  footer: {
    width: '100%',
    padding: 16,
    backgroundColor: GlobalStyles.Colors.primary800,
  },
});
