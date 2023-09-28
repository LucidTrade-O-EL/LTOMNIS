import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import GlobalStyles from '../../assets/constants/colors';

type PostCardProps = {
  avatar?: string;
  firstname: string;
  lastname: string;
  hours: number;
  number: number;
  title?: string; // added title prop
  subtext?: string; // added subtext prop
  imageUrl?: string; // added imageUrl prop
};

export const PostCard: React.FC<PostCardProps> = ({
  avatar,
  firstname,
  lastname,
  hours,
  number,
  title,
  subtext,
  imageUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          size={25}
          rounded
          source={avatar ? { uri: avatar } : undefined}
          title={`${firstname.charAt(0)}${lastname.charAt(0)}`}
          containerStyle={{ backgroundColor: GlobalStyles.Colors.primary200 }}
        />
        <Text style={styles.text}>{`${firstname} ${lastname}`}</Text>
        <Text style={styles.text}>{`${hours} hour ago`}</Text>
        <View style={styles.right}>
          <Text style={styles.text}>{number}</Text>
        </View>
      </View>
      {title && <Text style={styles.title}>{title}</Text>} 
      {subtext && <Text style={styles.subtext}>{subtext}</Text>} 
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />} 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: GlobalStyles.Colors.primary120,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
  },
  right: {
    marginLeft: 'auto',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 2,
  },
  subtext: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 10,
    marginBottom: 10,
  },
  image: {
    width: '90%',
    height: 133,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
