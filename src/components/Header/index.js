import React, { Component } from "react";
import { Toolbar } from "react-native-material-ui";
import { toolBarStyles } from "./styles";

export default class Header extends Component {
  render() {
    const { backBtn, goBack, menuToggle, query, WillCloseSearch } = this.props;
    return (
      <Toolbar
        leftElement={!backBtn ? "menu" : "keyboard-backspace"}
        onLeftElementPress={() => (!backBtn ? menuToggle() : goBack())}
        centerElement="Booky"
        searchable={{
          autoFocus: true,
          onSearchPressed: () => console.log("I'm active>>>*"),
          onSearchClosed: () => console.log("I'm search closed>>>*"),
          onSearchCloseRequested: () => WillCloseSearch(),
          onChangeText: text => query(text)
        }}
        onPress={() => console.log("hedpresss")}
        style={toolBarStyles}
      />
    );
  }
}
