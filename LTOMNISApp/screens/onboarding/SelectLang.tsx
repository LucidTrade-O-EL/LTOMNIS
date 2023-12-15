// SelectLang.tsx
import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import {Divider} from 'react-native-elements';
import GlobalStyles from '../../assets/constants/colors';
import RowWithRadioButton from '../MyProfile/RowWithRadioButton';
import CompleteButton from '../../assets/constants/Components/Buttons/CompleteButton';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../rootReducer'; // Adjust the import path
import { setLanguage } from '../SelectLanguage/LanguageActions';

export default function SelectLang() {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.language);
  const [selectedIndex, setIndex] = useState<number | null>(null);

  const handleLanguageChange = (newLanguage: string, index: number) => {
    setIndex(index);
    dispatch(setLanguage(newLanguage));
  };

  return (
    <SafeAreaView style={styles.Background}>
      <ScreenTitle title="Languages" />
      <View>
        <Text style={{color: 'rgba(255, 255, 255, 0.6)'}}>
          Choose preferred language for using OMNIS
        </Text>
      </View>
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
      <CompleteButton text="Submit" onPress={() => {}} />
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
