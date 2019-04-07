import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, BooksList, BookDetails } from "../screens";

const AppStackNavigator = createStackNavigator(
  {
    Home,
    BooksList,
    BookDetails
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

const AppNavigator = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffff00" barStyle="dark-content" />
      <AppContainer />
    </>
  );
};

export default AppNavigator;
