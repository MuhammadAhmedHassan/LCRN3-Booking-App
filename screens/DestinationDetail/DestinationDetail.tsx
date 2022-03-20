import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {Header} from '../../components';
import LinearGradient from 'react-native-linear-gradient';

function StarReview({rate}: {rate: number}) {
  let rating = rate;
  var fullStar = Math.floor(rate);
  var noStar = Math.floor(5 - rate);
  var halfStar = 5 - fullStar - noStar;
  const stars: ImageSourcePropType[] = [];

  Array(fullStar)
    .fill(1)
    .map(() => stars.push(icons.starFull));
  Array(halfStar)
    .fill(1)
    .map(() => stars.push(icons.starHalf));
  Array(noStar)
    .fill(1)
    .map(() => stars.push(icons.starEmpty));

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.base * 0.75,
      }}>
      {stars.map((star, index) => (
        <Image
          key={`full-${index}`}
          source={star}
          resizeMode="cover"
          style={{
            width: 15,
            height: 15,
          }}
        />
      ))}
      <Text
        style={{marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3}}>
        {rate}
      </Text>
    </View>
  );
}

function DestinationCard() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        ...styles.shadow,
        marginTop: -SIZES.padding * 4.5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          source={images.skiVilla}
          resizeMode="cover"
          style={{height: 60, width: 60, borderRadius: 10}}
        />
        <View style={{marginLeft: SIZES.font}}>
          <Text style={{...FONTS.h3}}>Ski Villa</Text>
          <Text style={{color: COLORS.gray, ...FONTS.body3}}>France</Text>
          <StarReview rate={4.5} />
        </View>
      </View>

      <View style={{marginTop: SIZES.radius}}>
        <Text style={{color: COLORS.gray, ...FONTS.body3}}>
          Ski Villa offers simple rooms with mountain views in front of the ski
          lift to the Ski Resort
        </Text>
      </View>
    </View>
  );
}

function IconLabel({icon, label}: {icon: ImageSourcePropType; label: string}) {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={icon}
        resizeMode="cover"
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text style={{marginTop: SIZES.padding, color: COLORS.gray, ...FONTS.h3}}>
        {label}
      </Text>
    </View>
  );
}

const DestinationDetail = () => {
  return (
    <ScrollView style={{backgroundColor: COLORS.white}}>
      <ImageBackground
        source={images.skiVilla}
        resizeMode="cover"
        style={{height: 350, width: '100%'}}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: SIZES.padding,
          }}>
          <Header
            tintColor={COLORS.white}
            showBackBtn={true}
            containerStyles={{paddingTop: SIZES.padding}}
          />
        </View>
      </ImageBackground>
      <View style={{paddingHorizontal: SIZES.padding}}>
        <DestinationCard />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: SIZES.padding,
        }}>
        <IconLabel icon={icons.villa} label="Villa" />
        <IconLabel icon={icons.parking} label="Parking" />
        <IconLabel icon={icons.wind} label="4 °C" />
      </View>

      <View style={{marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
        <Text style={{...FONTS.h2}}>About</Text>
        <Text
          style={{marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3}}>
          Located at the Alps with an altitude of 1,702 meters. The ski area is
          the largest ski area in the world and is known as the best place to
          ski. Many other facilities, such as fitness center, sauna, steam room
          to star-rated restaurants.
        </Text>
      </View>

      <View
        style={{
          marginTop: SIZES.padding * 1.5,
          marginHorizontal: SIZES.padding,
          marginBottom: SIZES.padding,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#edf0fc', '#d6dfff']}
          style={{
            flex: 1,
            height: 70,
            flexDirection: 'row',
            paddingVertical: SIZES.base,
            paddingRight: SIZES.base,
            paddingLeft: SIZES.padding,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 15,
          }}>
          <Text style={{...FONTS.h1}}>$1000</Text>

          <TouchableOpacity style={{height: '100%'}}>
            <View>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['#46aeff', '#5884ff']}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  width: 150,
                  height: '100%',
                  ...styles.shadow,
                }}>
                <Text style={{color: COLORS.white, ...FONTS.h2}}>BOOKING</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default DestinationDetail;

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
