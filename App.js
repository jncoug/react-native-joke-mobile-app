import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import JokeGenerator from './JokeGenerator';
import FavoriteJokes from './FavoriteJokes';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

// this is the main app, all it does is use the jokeGenerator inside a view, and violat
export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={JokeGenerator} />
        <Tab.Screen
          name="Favorites"
          component={FavoriteJokes}
          initialParams={{favoriteJokes: []}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
