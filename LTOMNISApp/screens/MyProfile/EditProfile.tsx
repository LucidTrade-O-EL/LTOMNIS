import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import CustomLabelledTextInput from '../../assets/constants/Components/CustomLabelledTextInput';

export default function EditProfile() {
  // State for all the form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle showBackArrow={true} title="Edit Profile" />
      <CustomLabelledTextInput
        label="First Name"
        placeholder="Zak"
        onChangeText={setFirstName}
        value={firstName}
      />
      <CustomLabelledTextInput
        label="Last Name"
        placeholder="Veasy"
        onChangeText={setLastName}
        value={lastName}
      />
      <CustomLabelledTextInput
        label="Email"
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <CustomLabelledTextInput
        label="Phone Number"
        placeholder="Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <CustomLabelledTextInput
        label="Country"
        placeholder="USA"
        onChangeText={setCountry}
        value={country}
      />
      <CustomLabelledTextInput
        label="State"
        placeholder="California"
        onChangeText={setState}
        value={state}
      />
      <CustomLabelledTextInput
        label="City"
        placeholder="San Jose"
        onChangeText={setCity}
        value={city}
      />
      <CustomLabelledTextInput
        label="Address"
        placeholder="402 Biker Ave"
        onChangeText={setAddress}
        value={address}
      />
      <CustomLabelledTextInput
        label="Postal Code"
        placeholder="15158"
        onChangeText={setPostalCode}
        value={postalCode}
        keyboardType="number-pad"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
});
