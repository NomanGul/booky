import { COLORS } from "../../constant/colors";
import { width } from "../../utils/dimensions";

export const toolBarStyles = {
  container: {
    backgroundColor: COLORS.APP_BACKGROUND,
    elevation: 0.3,
    shadowOpacity: 0.3
  },
  centerElementContainer: {
    position: "relative",
    left: width * 0.3
  },
  titleText: {
    color: "#454545"
  },
  leftElement: {
    color: "#454545"
  },
  rightElement: {
    color: "#454545"
  }
};
