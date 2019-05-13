import { StyleSheet } from "react-native";
import { width, height } from "../../utils/dimensions";
import { COLORS } from "../../constant/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.APP_BACKGROUND
  },
  left: {
    backgroundColor: COLORS.APP_BACKGROUND,
    marginTop: height * 0.2,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  right: {
    flexDirection: "row",
    backgroundColor: COLORS.APP_BACKGROUND,
    justifyContent: "flex-end"
  },
  rightTop: {
    marginTop: width * 0.03,
    marginRight: width * 0.05
  },
  icon: {
    width: height * 0.03
  },
  drawerButton: {
    marginVertical: height * 0.04,
    justifyContent: "center",
    alignSelf: "center"
  },
  drawerButtonText: {
    color: COLORS.GREY,
    fontSize: width * 0.06
  }
});
