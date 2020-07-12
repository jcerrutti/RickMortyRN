/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './src/pages/dashboard';
import Detail from './src/pages/detail';

import {COLORS} from './src/styles/variables';

const Stack = createStackNavigator();

const navigationStyles = {
  headerStyle: {
    backgroundColor: COLORS.dark.background,
  },
  headerTitleStyle: {
    color: COLORS.dark.textPrimary,
    fontSize: 24,
    fontWeight: '600',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: 'Rick And Morty Characters',
              ...navigationStyles,
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={({route}) => ({
              title: route.params.name,
              ...navigationStyles,
            })}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.dark.background,
  },
  navigationStyles: {},
});

export default App;
