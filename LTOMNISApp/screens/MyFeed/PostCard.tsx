import {color} from '@rneui/base';
import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Avatar} from 'react-native-elements';
import GlobalStyles from '../../assets/constants/colors';
import StarCircle from '../../assets/constants/Components/Buttons/StarCircle';
import {useNavigation} from '@react-navigation/native';

export type PostCardProps = {
  avatar?: string;
  firstname: string;
  lastname: string;
  hours: number;
  number: number;
  totalAmount: number;
  progress: number; // Add progress as a prop
  title?: string; // added title prop
  subtext?: string; // added subtext prop
  imageUrl?: string; // added imageUrl prop
  offerText?: string;
  id: string;
};

export const PostCard: React.FC<PostCardProps> = ({
  avatar,
  firstname,
  lastname,
  hours,
  number,
  title,
  subtext,
  totalAmount,
  progress,
  imageUrl,
  offerText,
  id,
}) => {
  const navigation = useNavigation();
  const progressBarRef = useRef<View>(null);
  const calculatedProgressBarWidth =
    (Number(progress) / Number(totalAmount)) * 100;

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.setNativeProps({
        style: {width: calculatedProgressBarWidth + '%'},
      });
    }
  }, [calculatedProgressBarWidth]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.header} onPress={() => {navigation.navigate('FriendsProfile')}}>
        <Avatar
          size={25}
          rounded
          source={avatar ? {uri: avatar} : undefined}
          title={`${firstname.charAt(0)}${lastname.charAt(0)}`}
          containerStyle={{backgroundColor: GlobalStyles.Colors.primary800}}
        />
        <Text style={styles.NameTitle}>{`${firstname} ${lastname}`}</Text>
        <Text style={styles.TimeText}>{`${hours} hour ago`}</Text>
        </Pressable>
        <Pressable onPress={() => {navigation.navigate('LevelsScreen')}} style={styles.right}>
          <StarCircle
            iconName="star-four-points-outline"
            height={16}
            width={16}
          />
          <Text style={styles.textNumber}>{number}</Text>
        </Pressable>
      </View>
      {title && <Text style={styles.title}>{title}</Text>}
      {subtext && <Text style={styles.subtext}>{subtext}</Text>}
      {imageUrl && <Image source={{uri: imageUrl}} style={styles.image} />}
      <View style={styles.progressBarContainer}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View
            ref={progressBarRef}
            style={{
              height: '100%',
              backgroundColor: GlobalStyles.Colors.primary200,
              borderRadius: 6,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <View style={styles.amountContainer}>
          <Text style={styles.progressText}>{`$${progress}`}</Text>
          <Text style={styles.totalAmountText}>{`/ $${totalAmount}`}</Text>
        </View>
        <Pressable
          style={styles.offerContainer}
          onPress={() => {
            navigation.navigate('PostDetails', {
              avatar: avatar,
              firstname: firstname,
              lastname: lastname,
              hours: hours,
              number: number,
              title: title,
              subtext: subtext,
              totalAmount: totalAmount,
              progress: progress,
              imageUrl: imageUrl,
              offerText: offerText,
              id: id,
            });
          }}>
          <Text style={styles.offerText}>{offerText}</Text>
        </Pressable>
      </View>
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
    fontSize: 16,
  },
  textNumber: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '700',
    color: GlobalStyles.Colors.primary510,
  },
  right: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 5,
  },
  NameTitle: {
    fontSize: 14,
    marginLeft: 10,
    marginVertical: 5,
    color: GlobalStyles.Colors.primary500,
  },
  TimeText: {
    fontSize: 14,
    marginLeft: 10,
    marginVertical: 5,
    color: GlobalStyles.Colors.accent120,
  },
  subtext: {
    fontSize: 14,
    color: GlobalStyles.Colors.primary800,
    marginLeft: 10,
    marginBottom: 20,
  },
  image: {
    width: '90%',
    height: 133,
    alignSelf: 'center',
    borderRadius: 10,
  },
  progressBarContainer: {
    flexDirection: 'row',
    height: 18,
    backgroundColor: 'rgba(120,120,128,0.08)',
    padding: 5, // Padding around the progress bar
    borderRadius: 6,
    marginTop: 20,
    width: '100%', // Set the width of the progress bar container to 80%
    alignSelf: 'center', // Center the progress bar container
  },
  amountContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  progressText: {
    fontSize: 22,
    color: GlobalStyles.Colors.primary800,
    fontWeight: '500',
  },
  totalAmountText: {
    fontSize: 14,
    color: GlobalStyles.Colors.accent120,
  },
  offerContainer: {
    backgroundColor: GlobalStyles.Colors.primary200,
    width: '40%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  offerText: {
    fontSize: 18, // Change fontSize to a number
    color: GlobalStyles.Colors.primary100,
    fontWeight: 'bold',
  },
});
