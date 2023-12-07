// Import necessary components from React and React Native
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import App from './App';
import LanguageLearning from './LanguageLearning';

// Create a Stack Navigator
const Stack = createStackNavigator();

// Main App component with navigation
const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="LanguageLearning" component={LanguageLearning} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Export the MainApp component
export default MainApp;
