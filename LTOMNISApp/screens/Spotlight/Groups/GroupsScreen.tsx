import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import GlobalStyles from '../../../assets/constants/colors';
import {
  CustomCarousel,
  CustomTitle,
} from '../../../assets/constants/Components/SpotlightTitleCarousel';
import { SmallCustomCarousel } from '../../../assets/constants/Components/SmallCustomCarousel';
const handleButtonPress = () => {
  console.log('Button Pressed');
};

const images = [
  {
    url: 'https://images.unsplash.com/photo-1693985320387-9b08d2c8e1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    tag: 'Tag 1',
  },
  {
    url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    tag: 'Tag 2',
  },
  {
    url: 'https://images.unsplash.com/photo-1693985320387-9b08d2c8e1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    tag: 'Tag 1',
  },
  {
    url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    tag: 'Tag 2',
  },
  {
    url: 'https://images.unsplash.com/photo-1693985320387-9b08d2c8e1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    tag: 'Tag 1',
  },
  {
    url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    tag: 'Tag 2',
  },
  // ... more image URLs
];

const images2 = [
  {
    url: 'https://images.unsplash.com/photo-1693985320387-9b08d2c8e1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',  text: '1234567891',
  },
  {
    url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60', text: 'Baseball Team',
  },
  {
    url: 'https://images.unsplash.com/photo-1693985320387-9b08d2c8e1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1693985320387-9b08d2c8e1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
  },
];

export default function GroupsScreen() {
  return (
    <SafeAreaView style={styles.background}>
      <View style={{marginTop: 20, width: '100%', alignSelf: 'center'}}>
        <CustomTitle
          title="My groups"
          buttonText="Create"
          onButtonPress={handleButtonPress}
        />
        <CustomCarousel
          images={images}
        />
        <View style={{marginTop: 20}} />
        <CustomTitle
          title="Local groups"
          buttonText="Show all"
          onButtonPress={handleButtonPress}
        />
        <SmallCustomCarousel
          images={images2}

        />
        <View style={{marginTop: 20}} />
        <CustomTitle
          title="Based on your interest"
          buttonText="Show all"
          onButtonPress={handleButtonPress}
        />
        <SmallCustomCarousel
          images={images2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.primary800,
  },
});
