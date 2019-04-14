import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";
import { width, height } from "../../utils/dimensions";

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: COLORS.APP_BACKGROUND
  },
  // imgContainer: {
  //   elevation: 5,
  //   backgroundColor: COLORS.APP_BACKGROUND
  // },
  img: {
    width: width * 0.5,
    height: height * 0.3,
    aspectRatio: 1
  },
  subline: {
    fontSize: width * 0.1,
    fontFamily: "Roboto",
    marginTop: height * -0.2,
    color: "#de4040"
  },
  btnContainer: {
    borderRadius: 10,
    height: height * 0.08,
    backgroundColor: "#de4040"
  },
  btnText: {
    fontSize: width * 0.05,
    color: "#fff"
  }
});
