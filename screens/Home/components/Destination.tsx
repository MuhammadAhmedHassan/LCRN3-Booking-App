import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, dummyData, FONTS, SIZES} from '../../../constants';
import {RootStackParamList} from '../../../types';
import {StackNavigationProp} from '@react-navigation/stack';

interface IDestinationItem {
  destination: typeof dummyData.destinations[0];
  index: number;
}

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

function DestinationItem(props: IDestinationItem) {
  const navigation = useNavigation<HomeScreenProp>();
  const {destination, index} = props;
  const lastItem = index === dummyData.destinations.length - 1;
  const {id, img, name} = destination;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DestinationDetail')}
      style={{
        alignItems: 'flex-start',
        marginLeft: SIZES.padding,
        marginRight: lastItem ? SIZES.padding : 0,
      }}>
      <View>
        <Image
          source={img}
          resizeMode="cover"
          style={{
            width: 120,
            height: 200,
            borderRadius: 10,
          }}
        />
      </View>
      <Text style={{marginTop: SIZES.base / 2, ...FONTS.h4}}>{name}</Text>
    </TouchableOpacity>
  );
}

const Destination = () => {
  return (
    <View style={{marginVertical: SIZES.padding}}>
      <Text
        style={[
          FONTS.h2,
          {
            marginHorizontal: SIZES.padding,
            color: COLORS.gray,
            marginBottom: SIZES.font,
          },
        ]}>
        Destination
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dummyData.destinations}
        keyExtractor={item => `item-${item.id}`}
        renderItem={({index, item}) => (
          <DestinationItem destination={item} index={index} />
        )}
      />
    </View>
  );
};

export default Destination;

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
