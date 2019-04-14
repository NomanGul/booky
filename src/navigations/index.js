import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, BooksList, BookDetails } from "../screens";
import { COLORS } from "../constant/colors";

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
      <StatusBar
        backgroundColor={COLORS.APP_BACKGROUND}
        barStyle="dark-content"
      />
      <AppContainer />
    </>
  );
};

export default AppNavigator;
