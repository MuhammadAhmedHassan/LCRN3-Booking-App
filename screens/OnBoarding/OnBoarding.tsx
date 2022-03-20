import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, FONTS, images, SIZES} from '../../constants';
import {Header} from './components';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'OnBoarding'>;

const OnBoarding = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar />

      <Header />
      <Image
        source={images.onboardingImage}
        resizeMode="contain"
        style={{
          height: 400,
          width: '100%',
        }}
      />

      <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center', maxWidth: SIZES.width / 1.6}}>
          <Text style={{...FONTS.h1, color: COLORS.gray}}>Digital Ticket</Text>
          <Text
            style={{
              ...FONTS.h4,
              color: COLORS.gray,
              marginTop: SIZES.padding,
              textAlign: 'center',
            }}>
            Easy solution to buy tickets for your travel, business trips,
            transportation, lodging and culinary.
          </Text>

          <TouchableOpacity
            style={[
              styles.shadow,
              {
                marginTop: SIZES.padding * 2,
                width: SIZES.width / 1.6,
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <LinearGradient
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
              }}
              colors={['#46aeff', '#5884ff']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}>
              <Text style={{color: COLORS.white, ...FONTS.h3}}>Start !</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
