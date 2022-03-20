import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, icons, SIZES} from '../../../constants';

interface IOptionItem {
  icon: ImageSourcePropType;
  bgColor: [string, string];
  label: string;
  onPress: () => void;
}

function OptionItem(props: IOptionItem) {
  const {icon, bgColor, label, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginHorizontal: SIZES.padding / 2,
        marginTop: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <LinearGradient
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 60,
            width: 60,
            borderRadius: 10,
            ...styles.shadow,
          }}
          colors={bgColor}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Image
            source={icon}
            resizeMode="cover"
            style={{
              tintColor: COLORS.white,
              width: 30,
              height: 30,
            }}
          />
        </LinearGradient>
      </View>

      <Text
        style={{
          marginTop: SIZES.base,
          color: COLORS.gray,
          ...FONTS.body3,
          textAlign: 'center',
          width: 75,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const Options = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: SIZES.font,
      }}>
      <OptionItem
        icon={icons.airplane}
        bgColor={['#46aeff', '#5884ff']}
        label="Flight"
        onPress={() => {
          console.log('Flight');
        }}
      />
      <OptionItem
        icon={icons.train}
        bgColor={['#fddf90', '#fcda13']}
        label="Train"
        onPress={() => {
          console.log('Train');
        }}
      />
      <OptionItem
        icon={icons.bus}
        bgColor={['#e973ad', '#da5df2']}
        label="Bus"
        onPress={() => {
          console.log('Bus');
        }}
      />
      <OptionItem
        icon={icons.taxi}
        bgColor={['#fcaba8', '#fe6bba']}
        label="Taxi"
        onPress={() => {
          console.log('Taxi');
        }}
      />

      <OptionItem
        icon={icons.bed}
        bgColor={['#ffc465', '#ff9c5f']}
        label="Hotel"
        onPress={() => {
          console.log('Hotel');
        }}
      />
      <OptionItem
        icon={icons.eat}
        bgColor={['#7cf1fb', '#4ebefd']}
        label="Eats"
        onPress={() => {
          console.log('Eats');
        }}
      />
      <OptionItem
        icon={icons.compass}
        bgColor={['#7be993', '#46caaf']}
        label="Adventure"
        onPress={() => {
          console.log('Adventure');
        }}
      />
      <OptionItem
        icon={icons.event}
        bgColor={['#fca397', '#fc7b6c']}
        label="Event"
        onPress={() => {
          console.log('Event');
        }}
      />
    </View>
  );
};

export default Options;

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
