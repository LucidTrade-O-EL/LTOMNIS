import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {Chip} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../colors';

interface TextInputComponentWithAddProps {
  title: string;
  placeholder?: string;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'number-pad'
    | 'decimal-pad'
    | 'email-address'
    | 'phone-pad';
  onChangeText?: (text: string) => void;
  inputHeight?: number;
  isAmount?: boolean;
  chips?: string[]; // Added chips property as optional
}

const TextInputComponentWithAdd: React.FC<TextInputComponentWithAddProps> = ({
  title,
  placeholder = '',
  keyboardType = 'default',
  inputHeight = 50,
  chips: initialChips = ['@easy', '@user2', '@user3', '@user2', '@user3'], // Providing default dummy chips
}) => {
  const [textValue, setTextValue] = useState<string>('');
  const [chips, setChips] = useState<string[]>(initialChips); // Initializing with dummy chips
  const [isValid, setIsValid] = useState<boolean>(true);

  const addChip = (): void => {
    if (textValue.trim()) {
      setChips(prev => [...prev, `@${textValue.trim()}`]);
      setTextValue('');
    }
  };

  return (
    <View style={styles.customComponentContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={styles.titleText}>{title}</Text>
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 24,
            backgroundColor: 'rgba(95, 95, 95, 0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name={'add'}
            size={20}
            color={GlobalStyles.Colors.primary100}
            onPress={addChip}
          />
        </View>
      </View>

      <View
        style={[
          styles.inputField,
          {
            height: inputHeight,
          },
        ]}>
        <View style={{height: '80%', width: '100%'}}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{width: '100%'}}>
            {chips.map((chip, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  backgroundColor: GlobalStyles.Colors.primary200,
                  borderRadius: 16,
                  paddingVertical: 4,
                  paddingHorizontal: 8,
                  marginHorizontal: 5,
                  alignItems: 'center',
                  minWidth: 80,
                  flexGrow: 1, // Allow the container to grow and take up any available space
                }}>
                <Text style={{color: 'white', flexShrink: 1}}>{chip}</Text>
                <Icon
                  name="close"
                  size={16}
                  color="white"
                  style={{marginLeft: 8}}
                  onPress={() => {
                    setChips(
                      chips.filter((_, chipIndex) => chipIndex !== index),
                    );
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
        <TextInput
          style={[styles.textInput, {paddingTop: 10, minWidth: 100}]}
          placeholder={placeholder}
          placeholderTextColor="rgba(255,255,255, 0.6)"
          keyboardType={keyboardType}
          onChangeText={setTextValue}
          value={textValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customComponentContainer: {
    marginBottom: 8,
    alignSelf: 'center',
    width: '98%',
  },
  titleText: {
    color: GlobalStyles.Colors.primary100,
    fontSize: 13,
    opacity: 0.6,
    marginBottom: 8,
    alignSelf: 'center',
    width: '90%',
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    width: '90%',
    borderColor: 'rgba(255,255,255, 0.6)',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 16,
    marginBottom: 20,
  },
  textInput: {
    color: '#fff',
    paddingHorizontal: 10,
    flex: 1,
  },
});

export default TextInputComponentWithAdd;
