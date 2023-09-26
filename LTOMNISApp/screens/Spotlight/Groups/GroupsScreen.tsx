import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import GlobalStyles from '../../../assets/constants/colors';
import {
  CustomCarousel,
  CustomTitle,
} from '../../../assets/constants/Components/SpotlightTitleCarousel';
import axios from 'axios';

import {SmallCustomCarousel} from '../../../assets/constants/Components/SmallCustomCarousel';
const handleButtonPress = () => {
  console.log('Button Pressed');
};

const GetMyGroup = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.lucidtrades.com/api/Group',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const res = await axios(options);

    console.log('data payload ', res.data, res.headers);

    const group = res.data;

    if (group == null) {
      console.log('No group data received');
    }
    setGroup(group);
    console.log('group: ', group);
  } catch (error: any) {
    console.error('An error occurred:', error);
  }
};

const GetMyFeaturedGroup = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.lucidtrades.com/api/Group/featured',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const res = await axios(options);

    console.log('data payload ', res.data, res.headers);

    const featuredGroup = res.data;

    if (featuredGroup == null) {
      console.log('No featured group data received');
    }
    setGroup(featuredGroup);
    console.log('featured group: ', featuredGroup);
  } catch (error: any) {
    console.error('An error occurred:', error);
  }
};

const GetMyInterestGroup = async () => {
  try {
    const options = {
      method: 'GET',
      url: 'https://api.lucidtrades.com/api/Group/all',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const res = await axios(options);

    console.log('data payload ', res.data, res.headers);

    const interestGroup = res.data;

    if (interestGroup == null) {
      console.log('No interest group data received');
    }
    setGroup(interestGroup);
    console.log('interest group: ', interestGroup);
  } catch (error: any) {
    console.error('An error occurred:', error);
  }
};

useEffect(() => {
  const fetchData = async () => {
    await GetMyGroup();
    await GetMyFeaturedGroup();
    await GetMyInterestGroup();
  };

  fetchData();
}, []);

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
    url: 'https://images.unsplash.com/photo-1693985320387-9b08d2c8e1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
    text: '1234567891',
  },
  {
    url: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    text: 'Baseball Team',
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
  const [group, setGroup] = useState([{title: 'Initial title'}]);
  const [featuredGroup, setFeaturedGroup] = useState([{}]);
  const [interestGroup, setInterestGroup] = useState([{}]);

  useEffect(() => {
    const fetchData = async () => {
      await GetMyGroup();
      await GetMyFeaturedGroup();
      await GetMyInterestGroup();
    };

    fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.background}>
      <View style={{marginTop: 20, width: '100%', alignSelf: 'center'}}>
        <CustomTitle
          data={group}
          title="My groups"
          buttonText="Create"
          onButtonPress={handleButtonPress}
        />
        <CustomCarousel data={group} images={images} />
        <View style={{marginTop: 20}} />
        <CustomTitle
          data={featuredGroup}
          title="Local groups"
          buttonText="Show all"
          onButtonPress={handleButtonPress}
        />
        <SmallCustomCarousel data={featuredGroup} images={images2} />
        <View style={{marginTop: 20}} />
        <CustomTitle
          data={interestGroup}
          title="Based on your interest"
          buttonText="Show all"
          onButtonPress={handleButtonPress}
        />
        <SmallCustomCarousel data={interestGroup} images={images2} />
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
