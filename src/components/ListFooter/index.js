import React from "react";
import { View, ActivityIndicator } from "react-native";
import { width } from "../../utils/dimensions";

const ListFooter = ({ loadMore }) => {
  if (!loadMore) return null;

  return (
    <View
      style={{
        position: "relative",
        width: width,
        paddingVertical: 5,
        marginTop: 10,
        marginBottom: 10
      }}
    >
      <ActivityIndicator animating size="large" />
    </View>
  );
};

export default ListFooter;
