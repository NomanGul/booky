import React, { Component } from "react";
import { Toolbar } from "react-native-material-ui";

export default class Header extends Component {
  render() {
    const { backBtn, goBack, menuToggle } = this.props;
    return (
      <Toolbar
        leftElement={!backBtn ? "menu" : "keyboard-backspace"}
        onLeftElementPress={() => (!backBtn ? menuToggle() : goBack())}
        centerElement="Booky"
        searchable={{
          autoFocus: true
        }}
        onPress={() => console.log("hedpresss")}
        style={{
          container: {
            backgroundColor: "#ffff00",
            elevation: 0.3,
            shadowOpacity: 0.3
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
