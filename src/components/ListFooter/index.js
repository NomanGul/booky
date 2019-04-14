import React from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";

const ListFooter = ({ loadMore }) => {
  if (!loadMore) return null;

  return (
    <View style={styles.footerContainer}>
      <ActivityIndicator animating size="large" />
    </View>
  );
};

export default ListFooter;
