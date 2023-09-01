import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyles from '../colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type WordWithIcon = {
  text: string;
  icon?: string;
};

type Props = {
  title: string;
  rightWords?: WordWithIcon[];
};

const DEFAULT_RIGHT_WORDS: WordWithIcon[] = [
  {text: '01/01/2023'},
  {text: '05:15 PM'},
  {text: 'Zak Veasy'},
  {text: '3%'},
  // ... Add other default values as needed
];

const LEFT_WORDS = [
  'Date',
  'Time',
  'Sent from',
  'Interest rate',
  // ... Add other left words as needed
];

const SmallOfferDetailsVTwo: React.FC<Props> = ({
  title,
  rightWords = DEFAULT_RIGHT_WORDS,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      {LEFT_WORDS.map((leftWord, index) => {
        const icon = rightWords[index].icon;
        return (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.leftWord}>{leftWord}</Text>
              <View style={styles.rightWordContainer}>
                <Text style={styles.rightWord}>{rightWords[index]?.text}</Text>
                {icon && (
                  <MaterialCommunityIcons
                    name={icon}
                    size={14}
                    color={GlobalStyles.Colors.primary100}
                  />
                )}
              </View>
            </View>
            {index !== LEFT_WORDS.length - 1 && <View style={styles.divider} />}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '98%',
    padding: 10,
    marginTop: 40,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.Colors.primary100,
    marginBottom: 20,
  },
  leftWord: {
    fontSize: 14,
    color: GlobalStyles.Colors.primary100,
  },
  rightWordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightWord: {
    fontSize: 14,
    color: GlobalStyles.Colors.primary100,
    marginRight: 5,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
    height: 1,
    backgroundColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },



});

export default SmallOfferDetailsVTwo;
