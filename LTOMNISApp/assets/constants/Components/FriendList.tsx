import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Avatar} from 'react-native-elements';
import GlobalStyles from '../colors';

export interface Friend {
  id: string;
  name: string;
  username: string;
  avatarImage?: string;
  isFriend: boolean; // Add this line
  friends?: Array<any>; // <-- use the optional modifier (?)
}

interface FriendListProps {
  addFriendHandler: (friend: Friend) => void;
  unfriendHandler: (friend: Friend) => void;
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


const getInitials = (name: string) => {
  const parts = name.split(' ');
  const initials = parts.map(part => part.charAt(0)).join('');
  return initials;
};

const FriendList: React.FC<FriendListProps> = ({
  addFriendHandler,
  unfriendHandler,
}) => {
  const [friends, setFriends] = useState(friendsData);


  const renderFriendItem = ({item}: {item: Friend}) => {
    const isFriend = item.isFriend;

    const buttonStyle = isFriend
      ? {backgroundColor: GlobalStyles.Colors.primary600}
      : {backgroundColor: GlobalStyles.Colors.primary200};

    const buttonText = isFriend ? 'Unfriend' : 'Add';

    const handleFriendAction = (friend: Friend) => {
      if (friend.isFriend) {
        unfriend(friend);
      } else {
        addFriend(friend);
      }
      // Toggle friend status in the friends state.
      const updatedFriends = friends.map(f => {
        if (f.id === friend.id) {
          return {...f, isFriend: !f.isFriend}; // Toggle the isFriend flag.
        }
        return f;
      });
      setFriends(updatedFriends);
    };

    const addFriend = (friend: Friend) => {
      addFriendHandler(friend);
      console.log(`Add friend action for friend ID: ${friend.id}`);
    };

    const unfriend = (friend: Friend) => {
      unfriendHandler(friend);
      console.log(`Unfriend action for friend ID: ${friend.id}`);
    };

    return (
      <View style={styles.friendContainer}>
        <View style={styles.infoContainer}>
          <Avatar
            size={44}
            rounded
            title={item.avatarImage ? undefined : getInitials(item.name)}
            source={item.avatarImage ? {uri: item.avatarImage} : undefined}
            overlayContainerStyle={{
              backgroundColor: GlobalStyles.Colors.primary100,
            }}
            titleStyle={{color: 'black', fontSize: 14, fontWeight: '700'}}
          />
          <View>
            <Text style={styles.friendName}>{item.name}</Text>
            <Text style={styles.username}>@{item.username}</Text>
          </View>
        </View>
        <Pressable
          onPress={() => handleFriendAction(item)}
          style={[styles.buttonContainer, buttonStyle]}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </Pressable>
      </View>
    );
  };

  const handleUnfriend = (id: string) => {
    console.log(`Unfriend action for friend ID: ${id}`);
  };

  return (
    <FlatList
      data={friends} // Use the friends state here instead of friendsData
      renderItem={renderFriendItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  friendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: '100%', // Adjusted to 100%
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '70%', // Set a maximum width to leave room for the button
  },
  friendName: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '500',
    color: GlobalStyles.Colors.primary100,
  },
  username: {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: '500',
    color: GlobalStyles.Colors.accent100,
  },
  buttonContainer: {
    height: 36,
    justifyContent: 'center',
    backgroundColor: GlobalStyles.Colors.primary600,
    borderRadius: 8,
    paddingHorizontal: 10,
    minWidth: 100, // Set a minimum width to ensure the text fits within the button
  },
  buttonText: {
    textAlign: 'center',
    color: GlobalStyles.Colors.primary100,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default FriendList;
