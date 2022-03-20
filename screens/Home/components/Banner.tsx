import {ImageBackground, StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS, FONTS, images, SIZES} from '../../../constants';

const Banner = () => {
  return (
    <ImageBackground
      source={images.homeBanner}
      resizeMode="contain"
      style={{
        marginTop: SIZES.font,
        width: '100%',
        // height: '100%',
        height: 200,
        justifyContent: 'center',
      }}
      imageStyle={{borderRadius: 5}}>
      <Text
        style={[
          FONTS.h1,
          {color: COLORS.gray, marginHorizontal: SIZES.padding},
        ]}>
        Are you ready for advanture?
      </Text>
    </ImageBackground>
  );
};

export default Banner;

const styles = StyleSheet.create({});
