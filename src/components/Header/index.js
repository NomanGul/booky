import React, { Component } from "react";
import { Toolbar } from "react-native-material-ui";

export default class Header extends Component {
  render() {
    const { backBtn, goBack, menuToggle } = this.props;
    return (
      <Toolbar
        leftElement={!backBtn ? "menu" : "keyboard-backspace"}
        onLeftElementPress={() => (!backBtn ? menuToggle() : goBack())}
        centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: "Search"
        }}
        onPress={() => console.log("hedpresss")}
        style={{
          container: {
            backgroundColor: "#ffff00"
          },
          titleText: {
            alignSelf: "center",
            color: "#454545"
          },
          leftElement: {
            color: "#454545"
          },
          rightElement: {
            color: "#454545"
          }
        }}
      />
    );
  }
}
