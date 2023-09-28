// Header.tsx
import React from 'react';
import { View } from 'react-native';
import { Avatar } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import GlobalStyles from '../../assets/constants/colors';

type HeaderProps = {
  firstname: string;
  lastname: string;
  avatarImage?: string;
};

const Header: React.FC<HeaderProps> = ({ firstname, lastname, avatarImage }) => {
  const firstNameLetter = firstname ? firstname.charAt(0) : '';
  const lastNameLetter = lastname ? lastname.charAt(0) : '';

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        padding: 20,
      }}>
      {avatarImage ? (
        <Avatar size={25} rounded source={{ uri: avatarImage }} />
      ) : (
        <Avatar
          size={25}
          rounded
          title={`${firstNameLetter}${lastNameLetter}`}
          containerStyle={{ backgroundColor: GlobalStyles.Colors.primary100 }}
          titleStyle={{
            color: GlobalStyles.Colors.primary800,
            fontWeight: 'bold',
          }}
        />
      )}
      <Feather
        name={'filter'}
        size={20}
        color={GlobalStyles.Colors.primary100}
      />
    </View>
  );
};

export default Header;
