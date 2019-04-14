import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class Home extends Component {
  render() {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <View>
        <Text> Home </Text>
        <Button title="Go to list" onPress={() => navigate("BooksList")} />
      </View>
    );
  }
}
