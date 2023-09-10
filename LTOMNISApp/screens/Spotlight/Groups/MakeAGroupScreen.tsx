import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import GlobalStyles from '../../../assets/constants/colors';
import ScreenTitle from '../../../assets/constants/Components/ScreenTitle';
import Feather from 'react-native-vector-icons/Feather';
import TextInputComponent from '../../../assets/constants/Components/TextInputComponent';
import CompleteButton from '../../../assets/constants/Components/Buttons/CompleteButton';
import {Divider} from 'react-native-elements';
import TextInputComponentWithAdd from '../../../assets/constants/Components/TextInputComponentWithAdd';
import ToggleButton from '../../../assets/constants/Components/ToggleButton';

export default function MakeAGroupScreen() {
  const [isFeatured, setIsFeatured] = React.useState(false);

  return (
    <SafeAreaView style={styles.background}>
      <ScreenTitle
        title="Make a group"
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
      <TextInputComponentWithAdd
        title="Tag Friends"
        keyboardType="default"
        onChangeText={text => console.log(text)}
        isAmount={true}
      />
      <View style={styles.uploadImage}>
        <Text style={styles.uploadImageText}>Upload Image</Text>
        <Feather
          name={'upload'}
          size={20}
          color={GlobalStyles.Colors.primary200}
        />
      </View>
      <Divider
        width={2}
        color={'rgba(256,256,256,0.04)'}
        style={{width: '90%', borderRadius: 10, alignSelf: 'center'}}
      />
      <ToggleButton
        title="Visibility"
        toggleTexts={['Private', 'Public']}
        onToggle={activeText => {
          console.log('Toggled:', activeText);
        }}
      />
      <ToggleButton
        title="Exposure"
        toggleTexts={['Regular', 'Featured']}
        onToggle={activeText => {
          console.log('Toggled:', activeText);
        }}
      />
      <CompleteButton
        text="Submit"
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
