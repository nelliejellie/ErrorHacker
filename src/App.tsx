import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Details from './screens/Details';
import {ContextProviders} from './context/context';

export type RootStartParamList = {
  Home: undefined;
  Details: {productId: string};
};

const Stack = createNativeStackNavigator<RootStartParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <ContextProviders>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Trending Products',
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: 'Products Details',
            }}
          />
        </Stack.Navigator>
      </ContextProviders>
    </NavigationContainer>
  );
}

export default App;
