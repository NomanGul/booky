import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DrawerNavigations from "./drawerNavigations";
import { COLORS } from "../constant/colors";

const AppStackNavigator = createStackNavigator(
  {
    Screens: DrawerNavigations
  },
  {
    headerMode: "none"
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
