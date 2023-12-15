import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import RowWithRadioButton from './RowWithRadioButton';
import {Divider} from 'react-native-elements';
import GlobalStyles from '../../assets/constants/colors';
import {useDispatch} from 'react-redux';
import {setLanguage} from '../../screens/SelectLanguage/LanguageActions'; // Update the path to where your action is defined

export default function LanguagesSettings() {
  const dispatch = useDispatch();
  const [selectedIndex, setIndex] = useState<number | null>(null);

  const handleLanguageChange = (language: string, index: number) => {
    setIndex(index);
    dispatch(setLanguage(language));
  };

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle showBackArrow={true} title="Languages" />
      <View style={styles.container}>
        <Text style={styles.title}>Suggested</Text>
      </View>
      <View style={{width: '98%'}}>
        <RowWithRadioButton
          title="English (US)"
          isSelected={selectedIndex === 0}
          onSelected={() => handleLanguageChange('English (US)', 0)}
        />
        <RowWithRadioButton
          title="English (UK)"
          isSelected={selectedIndex === 1}
          onSelected={() => handleLanguageChange('English (UK)', 1)}
        />
        <RowWithRadioButton
          title="Spanish"
          isSelected={selectedIndex === 2}
          onSelected={() => handleLanguageChange('Spanish', 2)}
        />
        <Divider
          width={1}
          color={GlobalStyles.Colors.primary100}
          style={{width: '98%', alignSelf: 'center', marginVertical: 20}}
        />
        <View style={styles.Others}>
          <Text style={styles.title}>Others</Text>
        </View>
        <RowWithRadioButton
          title="Mandarin"
          isSelected={selectedIndex === 3}
          onSelected={() => handleLanguageChange('Mandarin', 3)}
        />
        <RowWithRadioButton
          title="Hindi"
          isSelected={selectedIndex === 4}
          onSelected={() => handleLanguageChange('Hindi', 4)}
        />
        <RowWithRadioButton
          title="French"
          isSelected={selectedIndex === 5}
          onSelected={() => handleLanguageChange('French', 5)}
        />
        <RowWithRadioButton
          title="Arabic"
          isSelected={selectedIndex === 6}
          onSelected={() => handleLanguageChange('Arabic', 6)}
        />
        <RowWithRadioButton
          title="Russian"
          isSelected={selectedIndex === 7}
          onSelected={() => handleLanguageChange('Russian', 7)}
        />
        <RowWithRadioButton
          title="Indonesia"
          isSelected={selectedIndex === 8}
          onSelected={() => handleLanguageChange('Indonesia', 8)}
        />
        <RowWithRadioButton
          title="Vietnamese"
          isSelected={selectedIndex === 9}
          onSelected={() => handleLanguageChange('Vietnamese', 9)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '98%',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600', // Semibold
    color: 'white',
  },
  Others: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '98%',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
