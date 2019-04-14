import React from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./styles";

const BooksIndicator = () => {
  return (
    <View style={styles.booksIndicatorContainer}>
      <ActivityIndicator style={styles.indicator} size="large" color="#00F" />
    </View>
  );
};

export default BooksIndicator;
