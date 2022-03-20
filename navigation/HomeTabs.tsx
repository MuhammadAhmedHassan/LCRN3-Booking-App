import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeBottomTabParamList} from '../types';
import {COLORS, icons, SIZES} from '../constants';
import { Home } from '../screens';

const Tab = createBottomTabNavigator<HomeBottomTabParamList>();

interface ITabBarIcon {
  focused: boolean;
  icon: ImageSourcePropType;
}

function TabBarIcon({focused, icon}: ITabBarIcon) {
  const tintColor = focused ? COLORS.primary : COLORS.gray;
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={{
        height: 30,
        width: 30,
        tintColor,
      }}
    />
  );
}

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,

        tabBarStyle: {
          height: 70,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,

          elevation: 21,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: props => <TabBarIcon {...props} icon={icons.home} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: props => <TabBarIcon {...props} icon={icons.search} />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Home}
        options={{
          tabBarIcon: props => <TabBarIcon {...props} icon={icons.bookmark} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Home}
        options={{
          tabBarIcon: props => <TabBarIcon {...props} icon={icons.user} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
