import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import GlobalStyles from '../../assets/constants/colors';

type HeaderProps = {
  firstname: string;
  lastname: string;
  avatarImage?: string;
  avatarSize?: number;
  avatarBackgroundColor?: string;
  avatarTextColor?: string;
};

const Header: React.FC<HeaderProps> = ({
  firstname,
  lastname,
  avatarImage,
  avatarSize = 25,
  avatarBackgroundColor = GlobalStyles.Colors.primary100,
  avatarTextColor = GlobalStyles.Colors.primary800,
}) => {
  const { width } = useWindowDimensions();
  const firstNameLetter = firstname ? firstname.charAt(0) : '';
  const lastNameLetter = lastname ? lastname.charAt(0) : '';
  const iconSize = width <= 320 ? 15 : 20;

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
        <Avatar size={avatarSize} rounded source={{ uri: avatarImage }} />
      ) : (
        <Avatar
          size={avatarSize}
          rounded
          title={`${firstNameLetter}${lastNameLetter}`}
          containerStyle={{ backgroundColor: avatarBackgroundColor }}
          titleStyle={{
            color: avatarTextColor,
            fontWeight: 'bold',
          }}
        />
      )}
      <Feather
        name={'filter'}
        size={iconSize}
        color={GlobalStyles.Colors.primary100}
      />
    </View>
  );
};

export default Header;
