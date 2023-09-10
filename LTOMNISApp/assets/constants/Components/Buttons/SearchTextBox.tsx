import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchTextBox = ({ placeholder = "Search", ...props }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="white" style={styles.icon} />
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        placeholderTextColor="white"
        {...props} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 36,
    width: '90%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    color: 'white',
    flex: 1,
  },
});

export default SearchTextBox;
