import React from "react";
import { View, ActivityIndicator } from "react-native";
import { COLORS } from "../../constant/colors";

const BooksIndicator = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: COLORS.APP_BACKGROUND
      }}
    >
      <ActivityIndicator
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
        size="large"
        color="#00F"
      />
    </View>
  );
};

export default BooksIndicator;
