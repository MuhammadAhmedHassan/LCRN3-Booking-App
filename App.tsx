import React, {useEffect} from 'react';
import {useColorScheme, Text, LogBox} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {OnBoarding, DestinationDetail} from './screens';
import HomeTabs from './navigation/HomeTabs';
import {RootStackParamList} from './types';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    LogBox.ignoreLogs(['Looks like you']);
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="OnBoarding">
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen
          name="DestinationDetail"
          component={DestinationDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
