import { StyleSheet } from "react-native";
import { width, height } from "../../utils/dimensions";
import { COLORS } from "../../constant/colors";

export const styles = StyleSheet.create({
  bookCardContainer: {
    width: width * 0.3,
    height: height * 0.4,
    aspectRatio: 0.75,
    padding: width * 0.02,
    marginBottom: height * 0.02
  },
  imgContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: COLORS.APP_BACKGROUND
  },
  img: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%"
  },
  noThumbnailImg: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});
