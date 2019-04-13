import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";

export const styles = StyleSheet.create({
  booksIndicatorContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: COLORS.APP_BACKGROUND
  },
  indicator: {
    alignItems: "center",
    justifyContent: "center"
  }
});
