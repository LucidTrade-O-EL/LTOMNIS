import React from 'react';
import {View, Text, StyleSheet, Switch, SafeAreaView} from 'react-native';
import GlobalStyles from '../../assets/constants/colors';
import ScreenTitle from '../../assets/constants/Components/ScreenTitle';
import TextInputComponent from '../../assets/constants/Components/TextInputComponent';
import Feather from 'react-native-vector-icons/Feather';
import CompleteButton from '../../assets/constants/Components/Buttons/CompleteButton';

export default function AddPostScreen() {
  const [isFeatured, setIsFeatured] = React.useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <ScreenTitle
        title="Add Post"
        showBackArrow={true}
        onBackPress={() => {
          // Handle the back button press, e.g., navigate back
        }}
      />
      <TextInputComponent
        title="Title"
        placeholder="Your custom placeholder here"
        keyboardType="default"
        onChangeText={text => console.log(text)}
      />
      <TextInputComponent
        title="Description"
        placeholder="Write a short description"
        keyboardType="default"
        onChangeText={text => console.log(text)}
        inputHeight={110}
      />
      <View style={styles.uploadImage}>
        <Text style={styles.uploadImageText}>Upload Image</Text>
        <Feather
          name={'upload'}
          size={20}
          color={GlobalStyles.Colors.primary200}
        />
      </View>
      <TextInputComponent
        title="Amount"
        placeholder="Enter Amount"
        keyboardType="default"
        onChangeText={text => console.log(text)}
        isAmount={true}
      />
      <View style={styles.featured}>
        <Text style={styles.featuredText}>Featured</Text>
        <Switch
          trackColor={{false: '#767577', true: GlobalStyles.Colors.primary200}}
          thumbColor={isFeatured ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setIsFeatured(!isFeatured)}
          value={isFeatured}
        />
      </View>
      <CompleteButton
        text="Add"
        color={GlobalStyles.Colors.primary200}
        onPress={() => console.log('Button pressed!')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: GlobalStyles.Colors.primary800,
  },
  uploadImage: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 24,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadImageText: {
    color: GlobalStyles.Colors.primary200,
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
  },
  featured: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 24,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  featuredText: {
    color: GlobalStyles.Colors.primary100,
    fontSize: 16,
  },
});
