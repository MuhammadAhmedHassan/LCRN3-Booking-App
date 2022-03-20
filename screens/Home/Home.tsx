import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {Header} from '../../components';
import {Banner, Destination, Options} from './components';

const Home = () => {
  return (
    <ScrollView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar />
      <View
        style={{
          paddingHorizontal: SIZES.padding,
          paddingTop: SIZES.padding,
          flex: 1,
          backgroundColor: COLORS.white,
        }}>
        {/* Header */}
        <Header />

        {/* Banner */}
        <Banner />
      </View>
      {/* Options */}
      <Options />
      
      {/* Destination */}
      <Destination />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
