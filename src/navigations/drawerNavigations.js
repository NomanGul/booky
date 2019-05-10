import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import Drawer from "../components/Drawer";
import { Home, BooksList, BookDetails } from "../screens";
import { width } from "../utils/dimensions";

const AppStack = createStackNavigator(
  {
    Home,
    BooksList,
    BookDetails
  },
  { headerMode: "none", initialRouteName: "Home" }
);

const drawerOptions = {
  contentComponent: Drawer,
  drawerWidth: width,
  initialRouteName: "AppStack"
};

const drawerNavigations = createDrawerNavigator({ AppStack }, drawerOptions);

export default drawerNavigations;
