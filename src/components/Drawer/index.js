import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constant/colors";

class Drawer extends Component {
  closeDrawer = () => {
    this.props.navigation.closeDrawer();
  };

  navigate = (screen, params) => {
    this.closeDrawer();
    return this.props.navigation.navigate(screen, params);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.right}>
          <View style={styles.rightTop}>
            <Icon
              name="ios-menu"
              size={styles.icon.width}
              color={COLORS.GREY}
              onPress={this.closeDrawer}
            />
          </View>
        </View>
        <View style={styles.left}>
          <TouchableOpacity
            style={styles.drawerButton}
            onPress={() => this.navigate("Home")}
          >
            <Text style={styles.drawerButtonText}>🏠 Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerButton}
            onPress={() => this.navigate("BooksList")}
          >
            <Text style={styles.drawerButtonText}>📃 Books List</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(Drawer);
