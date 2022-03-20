import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, icons} from '../constants';

interface IProps {
  tintColor?: string;
  showBackBtn?: boolean;
  containerStyles?: ViewStyle;
}

const Header = ({tintColor, showBackBtn, containerStyles}: IProps) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: showBackBtn ? 'space-between' : 'flex-end',
        ...containerStyles,
      }}>
      {showBackBtn && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={{height: 25, width: 25, tintColor: tintColor ?? COLORS.gray}}
          />
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => console.log('Menu')}>
        <Image
          source={icons.menu}
          resizeMode="contain"
          style={{height: 25, width: 25, tintColor: tintColor ?? COLORS.gray}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
