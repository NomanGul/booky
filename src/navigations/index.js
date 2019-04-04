import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, BooksList, BookDetails } from "../screens";

const AppNavigator = createStackNavigator(
  {
    Home,
    BooksList,
    BookDetails
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
