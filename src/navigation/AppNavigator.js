import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import { extendTheme } from 'native-base';
import { NativeBaseProvider } from 'native-base';


const Stack = createNativeStackNavigator();
const customTheme = extendTheme({
	colors: {
	  primary: {
		500: '#007bff', // Customize your primary color
	  },
	  // Add other color customizations here
	},
	// Add more theme properties based on your requirements
  });
const AppNavigator = () => {
	return (
		<NativeBaseProvider theme={customTheme}>
			<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="RecipeList" component={RecipeListScreen} />
				<Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
			</Stack.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
		
	);
};

export default AppNavigator;