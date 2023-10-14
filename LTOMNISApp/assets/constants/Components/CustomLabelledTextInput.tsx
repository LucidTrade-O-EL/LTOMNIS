import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface Props {
  label: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
}

const CustomLabelledTextInput: React.FC<Props> = ({
  label,
  placeholder,
  onChangeText,
  value,
  keyboardType = 'default',
}) => (
  <View style={styles.buttonContainer}>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText}>{label}</Text>
    </View>
    <View style={styles.textInputContainer}>
      <TextInput
        style={[styles.textInput, value ? styles.textActive : null]}
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255, 0.6)"
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    // Any shared styles for buttonContainer
  },
  labelContainer: {
    marginBottom: 8,
    alignSelf: 'center',
    width: '90%',
  },
  labelText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.6,
    textAlign: 'left',
  },
  textInputContainer: {
    // Styles for emailButton, though you might want to rename this for clarity now
  },
  textInput: {
    // Shared styles for textInput
  },
  textActive: {
    // Styles for when text is active
  },
});

export default CustomLabelledTextInput;
