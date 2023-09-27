import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../../colors';

interface FriendListProps {
  searchFriendHandler: (friend: Friend) => void;
}

const friendsData: Friend[] = [
  {
    id: '1',
    name: 'Zak Veasy',
    username: 'pablo',
    avatarImage: '',
    isFriend: false,
    friends: [], // <-- add this
    // friends property is missing here
  },
  {
    id: '2',
    name: 'Friend Ns',
    username: 'pablo2',
    isFriend: true,
    friends: [], // <-- add this
    // friends property is missing here too
  },
];

const SearchTextBox = ({ placeholder = "Search", ...props }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={16} color="white" style={styles.icon} />
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        placeholderTextColor={GlobalStyles.Colors.accent100}
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
    borderColor: GlobalStyles.Colors.accent100,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  icon: {
    marginRight: 8,
    color: GlobalStyles.Colors.accent100,
  },
  input: {
    color: 'white',
    flex: 1,
    fontSize: 15
  },
});

export default SearchTextBox;
