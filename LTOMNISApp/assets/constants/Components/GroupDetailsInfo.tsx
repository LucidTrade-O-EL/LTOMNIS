import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import GlobalStyles from '../colors';
import SmallOfferDetailsVFive from './SmallOfferDetailsVFive';
import CompleteButton from './Buttons/CompleteButton';

interface GroupDetailsInfoProps {
  title?: string;
  description?: string;
}

export default function GroupDetailsInfo({
  title = 'Chicago',
  description = 'This is a fake description data to represent the information that might be displayed here. This could potentially span multiple lines if the content is long enough, demonstrating the wrapping behavior of this text component in the UI.',
}: GroupDetailsInfoProps) {
  // Fake data for demonstration purposes
  const fakeData = {
    title: 'Fake Group Details',
    rightWords: [
      {text: 'Fake User 1', icon: 'account'},
      {text: 'Needed amount'},
      {text: 'Visibility'},
      {text: 'Exposure'},
    ],
    participants: [
      {name: 'Alice', avatarUri: 'https://fake-avatar-uri.com/alice.jpg'},
      {name: 'Bob', avatarUri: 'https://fake-avatar-uri.com/bob.jpg'},
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.myRoleContainer}>
        <Text style={styles.myRoleText}>{title}</Text>
      </View>
      {description && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      )}
      <View style={styles.translucentBackground}>
        <SmallOfferDetailsVFive
          title={fakeData.title}
          rightWords={fakeData.rightWords}
          participants={fakeData.participants}
        />
      </View>
      <CompleteButton
        text="Create a group bill"
        color={GlobalStyles.Colors.primary200}
        onPress={() => console.log('Button pressed!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.Colors.primary100,
    width: '100%',
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  myRoleContainer: {
    marginTop: 20,
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  myRoleText: {
    fontSize: 24,
    fontWeight: '500',
    color: GlobalStyles.Colors.primary800,
  },
  descriptionContainer: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: GlobalStyles.Colors.primary800,
  },
  translucentBackground: {
    width: '98%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
