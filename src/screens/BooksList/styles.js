import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";
import { height } from "../../utils/dimensions";

export const styles = StyleSheet.create({
  booksListContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.APP_BACKGROUND
  },
  itemsFlatList: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: height * 0.01,
    paddingBottom: height * 0.2
  }
});
