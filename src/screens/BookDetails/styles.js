import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";
import { height, width } from "../../utils/dimensions";

export const styles = StyleSheet.create({
  indicator: {
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  halfTopContainer: {
    height: height * 0.3,
    backgroundColor: COLORS.APP_BACKGROUND,
    flexDirection: "row",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.05,
    zIndex: 9999
  },
  halfBottomContainer: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.03,
    marginBottom: height * 0.1
  },
  bookCardContainer: {
    width: width * 0.3,
    height: height * 0.4,
    aspectRatio: 0.75,
    backgroundColor: COLORS.APP_BACKGROUND
  },
  imgContainer: {
    height: "100%",
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
  },
  pageCountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  pageCount: {
    fontWeight: "100",
    color: COLORS.LIGHT_GREY
  },
  topRightContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    flexShrink: 1,
    height: height * 0.25
  },
  bookTitleContainer: {
    flexShrink: 1,
    flexGrow: 1,
    marginLeft: 20,
    alignSelf: "flex-start",
    justifyContent: "flex-start"
  },
  bookTitle: {
    fontWeight: "bold",
    fontSize: height * 0.03,
    color: COLORS.GREY
  },
  bookAuthorName: {
    fontWeight: "100",
    fontSize: height * 0.02,
    color: COLORS.LIGHT_GREY
  },
  priceRatingContainer: {
    flexShrink: 1,
    flexGrow: 1,
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  price: {
    fontWeight: "bold",
    fontSize: height * 0.025,
    color: COLORS.GREY,
    marginRight: 10
  },
  description: {
    fontSize: height * 0.022,
    color: COLORS.GREY,
    fontWeight: "300",
    textAlign: "left",
    lineHeight: height * 0.035
  },
  scrollViewContainer: {
    flexGrow: 1
  },
  btnsContainer: {
    height: height * 0.04,
    backgroundColor: COLORS.APP_BACKGROUND,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: width * 0.05,
    paddingVertical: height * 0.05
  }
});

export const buyBtn = {
  container: {
    backgroundColor: COLORS.BLUE,
    width: width * 0.3,
    height: height * 0.05,
    borderRadius: (width * 0.3 * (height * 0.05)) / 10,
    marginRight: width * 0.1
  },
  text: {
    fontWeight: "bold",
    fontSize: 18
  }
};

export const favoriteBtn = {
  container: {
    backgroundColor: COLORS.RED,
    width: width * 0.1,
    height: height * 0.055,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  }
};
