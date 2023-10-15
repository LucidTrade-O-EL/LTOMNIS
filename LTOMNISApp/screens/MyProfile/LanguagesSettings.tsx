import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import RowWithRadioButton from './RowWithRadioButton';
import {Divider} from 'react-native-elements';
import GlobalStyles from '../../assets/constants/colors';

export default function LanguagesSettings() {
  const [selectedIndex, setIndex] = useState<number | null>(null);

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
          onSelected={() => setIndex(0)}
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
          title="Spanish"
          isSelected={selectedIndex === 1}
          onSelected={() => setIndex(1)}
        />
        <RowWithRadioButton
          title="Mandarin"
          isSelected={selectedIndex === 2}
          onSelected={() => setIndex(2)}
        />
        <RowWithRadioButton
          title="Hindi"
          isSelected={selectedIndex === 3}
          onSelected={() => setIndex(3)}
        />
        <RowWithRadioButton
          title="French"
          isSelected={selectedIndex === 4}
          onSelected={() => setIndex(4)}
        />
        <RowWithRadioButton
          title="Arabic"
          isSelected={selectedIndex === 5}
          onSelected={() => setIndex(5)}
        />
        <RowWithRadioButton
          title="Russian"
          isSelected={selectedIndex === 6}
          onSelected={() => setIndex(6)}
        />
        <RowWithRadioButton
          title="Indonesia"
          isSelected={selectedIndex === 7}
          onSelected={() => setIndex(7)}
        />
        <RowWithRadioButton
          title="Vietnamese"
          isSelected={selectedIndex === 8}
          onSelected={() => setIndex(8)}
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
